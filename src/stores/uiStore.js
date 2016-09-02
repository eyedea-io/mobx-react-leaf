import { observable, action } from 'utils';

export default class uiStore {
  @observable language = 'en';

  @action setLanguage = (language) => {
    this.language = language;
  }
}
