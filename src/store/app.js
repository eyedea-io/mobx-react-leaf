import { computed, observable } from 'utils';

export default {
  @observable language: 'en',
  @computed get helloMessage() {
    return {
      en: 'Hello',
      pl: 'Cześć'
    }[this.language];
  }
};
