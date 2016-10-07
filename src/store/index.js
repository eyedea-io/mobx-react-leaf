import { observable, asMap } from 'utils';
import app from './app';
import user from './user';

export default observable({
  // List of pending actions/request
  pending: asMap(new Set()),
  forms: asMap(),
  app,
  user,
});
