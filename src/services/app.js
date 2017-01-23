import { action } from 'utils';

export default class app {
  @action setLanguage = language => {
    this.store.app.language = language;
  }
}
