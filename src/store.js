import { observable, computed } from 'utils';

export default observable({
  forms: {},
  app: {
    language: 'en',
    @computed get helloMessage() {
      return {
        en: 'Hello',
        pl: 'Cześć',
      }[this.language];
    },
  },
  user: {
    profile: {},
    @computed get isLoggedIn() {
      return !!Object.keys(this.profile).length;
    },
  },
});
