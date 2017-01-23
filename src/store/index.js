import app from './app';
import user from './user';
import { observable } from 'utils';

export default observable({
  // List of pending actions/request
  pending: observable.map(),
  // List of form errors
  errors: observable.map(),
  forms: observable.map(),
  app,
  user
});
