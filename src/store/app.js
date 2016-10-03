import { computed } from 'utils';

export default {
  language: 'en',
  @computed get helloMessage() {
    return {
      en: 'Hello',
      pl: 'Cześć',
    }[this.language];
  },
};
