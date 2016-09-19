import React, { Component } from 'react';
import { observer } from 'utils';
import coercer from 'coercer';
import ZSchema from 'z-schema';
import * as FormRules from './formize.rules';

export function formize(fields = [], schema = {}) {
  const validator = new ZSchema({
    customValidator: (Report, Schema, Values) => {
      Object.keys(FormRules).forEach(rule => FormRules[rule](Report, Schema, Values));
    },
  });

  return function wrapWithFields(ComposedComponent) {
    @observer
    class Form extends Component {
      static propTypes = {
        services: React.PropTypes.object,
        store: React.PropTypes.object,
      }

      static contextTypes = {
        services: React.PropTypes.object,
        store: React.PropTypes.object,
      }

      static formName;

      constructor(props, context) {
        super(props, context);

        if (typeof fields === 'function') {
          const parsedFields = fields(props);
          this.fields = parsedFields;
          this.schema = schema;
        } else {
          this.fields = fields;
          this.schema = schema;
        }

        this.fields = this.fields.reduce((obj, item) => ({
          ...obj,
          [item.name]: item,
        }), {});

        this.formName = ComposedComponent.formName ||
                        ComposedComponent.displayName ||
                        ComposedComponent.name;
        this.services = props.services || context.services;
        this.store = props.store || context.store;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSetValue = this.handleSetValue.bind(this);
      }

      componentWillMount() {
        this.services.forms.addForm(this.formName, this.fields);
      }

      handleSubmit(event, cb) {
        // Get form fields
        const formFields = this.store.forms[this.formName].fields;
        // Bind values to field names
        const getKeyValue = (obj, key) => ({
          ...obj,
          [key]:
            this.fields[key].hasOwnProperty('checked') ? this.fields[key].checked :
            this.fields[key].hasOwnProperty('value') ? this.fields[key].value :
            this.fields[key].defaultValue,
        });
        // Get object with fieldName: fieldValue items.
        const data = Object.keys(formFields).reduce(getKeyValue, {});

        const isValid = validator.validate(data, this.schema);
        const errors = validator.getLastErrors();
        const formName = this.formName;

        this.services.forms.bindErrors(formName, errors);

        if (isValid) {
          cb(event, coercer(data));
        }

        event.preventDefault();
      }

      handleSetValue(event, val) {
        const isObject = typeof event === 'object';
        const isCheckbox = event.target.type === 'checkbox';

        const name = isObject ? event.target.name : event;
        const value = isObject ? event.target.value : val;
        const checked = isObject && isCheckbox ? coercer(event.target.checked) : undefined;

        this.services.forms.setValue(this.formName, name, coercer(value), checked);
      }

      render() {
        return (
          <ComposedComponent
            {...this.props}
            form={{
              ...this.store.forms[this.formName],
              submit: this.handleSubmit,
              setValue: this.handleSetValue,
            }}
          />
        );
      }
    }

    return Form;
  };
}
