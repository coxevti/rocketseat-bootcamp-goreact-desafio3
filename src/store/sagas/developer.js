import { call, put, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import Api from '../../services/api';
import { Creators as DeveloperActions } from '../ducks/developer';

export function* addDeveloper(action) {
  try {
    const { data } = yield call(Api.get, `/users/${action.payload.developer.developerInput}`);
    const isDuplicate = yield select(({ developers }) => developers.data.find(dev => dev.id === data.id));
    if (isDuplicate) {
      yield put(DeveloperActions.addDeveloperFailure('Usuário já adicionado.'));
      toast.warn('Usuário já adicionado.', {
        position: toast.POSITION.TOP_CENTER,
      });
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
      toast.success('Usuário adicionado com sucesso.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  } catch (error) {
    yield put(DeveloperActions.addDeveloperFailure('Usuário não encontrado...'));
    toast.error('Usuário não encontrado...', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
