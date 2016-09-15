import { observable, computed } from 'utils';

export default observable({
  app: {
    language: 'en',
    @computed get helloMessage() {
      return {
        en: 'Hello',
        pl: 'Cześć',
      }[this.language];
    },
  },
});
