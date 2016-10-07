import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('Default colors', () => (
    <div>
      <p><Button modifiers="primary">Primary button</Button></p>
      <p><Button modifiers="secondary">Secondary button</Button></p>
      <p><Button modifiers="tertiary">Tertiary button</Button></p>
      <p><Button modifiers="positive">Positive button</Button></p>
      <p><Button modifiers="negative">Negative button</Button></p>
    </div>
  ))
  .add('With some emoji', () => (
    <p>
      <Button onClick={action('clicked')}>👍 like</Button>
    </p>
  ));
