import {put, call, takeLatest} from 'redux-saga/effects';

// Redux
import AmountActions, {AmountTypes} from '../Redux/AmountRedux';

// Functions
import {
  setNetworkActivityStatusBar,
  getErrorAPI,
} from '../Functions/ApiFunctions';

// Api
import AmountApi from '../Services/AmountApi';

const amountApi = AmountApi.create();

export function* getOfferSaga(): any {
  try {
    setNetworkActivityStatusBar(true);
    const response = yield call(amountApi.getOffer);
    setNetworkActivityStatusBar();
    if (response.ok && response.status === 200) {
      yield put(AmountActions.getOfferSuccess());
    } else {
      yield put(AmountActions.getOfferFailure(getErrorAPI(response)));
    }
  } catch (error: any) {
    yield put(AmountActions.getOfferFailure(error.message));
  }
}

export default function* AmountSaga() {
  yield takeLatest(AmountTypes.GET_OFFER_REQUEST, getOfferSaga);
}
