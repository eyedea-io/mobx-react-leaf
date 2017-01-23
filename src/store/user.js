import { computed } from 'utils';

export default {
  profile: {},
  @computed get isLoggedIn() {
    return Boolean(Object.keys(this.profile).length);
  }
};
