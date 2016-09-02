import { computed } from 'utils';

export default class userStore {
  @computed get helloMessage() {
    return {
      en: 'Hello',
      pl: 'Cześć',
    }[this.stores.uiStore.language];
  }
}
