import { observable, asMap } from 'utils';
import app from './app';
import user from './user';

export default observable({
  forms: asMap(),
  app,
  user,
});
