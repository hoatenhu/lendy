import { all } from 'redux-saga/effects'

/* ------------- Sagas ------------- */
import AuthSaga from './AmountSaga'
import UserSaga from './UserSaga'

/* ------------- Connect All Saga ------------- */

export default function* root() {
  yield all([
    AuthSaga(),
    UserSaga(),
  ])
}
