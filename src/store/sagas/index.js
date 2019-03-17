import { all, takeLatest } from 'redux-saga/effects';
import { addDeveloper } from './developer';
import { Types as TypesDevelopers } from '../ducks/developer';

export default function* rootSaga() {
  yield all([takeLatest(TypesDevelopers.ADD_REQUEST, addDeveloper)]);
}
