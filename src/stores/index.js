import { configureStores } from 'utils';

import uiStore from './uiStore';
import userStore from './userStore';

export default configureStores({
  uiStore,
  userStore,
});
