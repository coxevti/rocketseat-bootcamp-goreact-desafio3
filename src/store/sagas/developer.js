import { call, put, select } from 'redux-saga/effects';

import Api from '../../services/api';
import { Creators as DeveloperActions } from '../ducks/developer';

export function* addDeveloper(action) {
  try {
    const { data } = yield call(Api.get, `/users/${action.payload.developer.developerInput}`);
    const isDuplicate = yield select(({ developers }) => developers.data.find(dev => dev.id === data.id));
    if (isDuplicate) {
      yield put(DeveloperActions.addDeveloperFailure('Usuário já adicionado.'));
    } else {
      const { latitude, longitude } = action.payload.developer.lngLat;
      const developerData = {
        id: data.id,
        name: data.name,
        login: data.login,
        img: data.avatar_url,
        longitude,
        latitude,
      };
      yield put(
        DeveloperActions.addDeveloperSuccess(developerData, 'Usuário adicionado com sucesso.'),
      );
    }
  } catch (error) {
    yield put(DeveloperActions.addDeveloperFailure('Usuário não encontrado...'));
  }
}
