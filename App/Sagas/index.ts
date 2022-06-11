import { all } from 'redux-saga/effects'

/* ------------- Sagas ------------- */
import AmountSaga from './AmountSaga'
import UserSaga from './UserSaga'

/* ------------- Connect All Saga ------------- */

export default function* root() {
  yield all([
    AmountSaga(),
    UserSaga(),
  ])
}
