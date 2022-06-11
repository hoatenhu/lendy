import { put, call, takeLatest } from 'redux-saga/effects'

// Api
import UserApi from '../Services/UserApi'

// Redux
import UserActions, { Types as UserTypes } from '../Redux/UserRedux'

// Functions
import {
  setNetworkActivityStatusBar,
  getErrorAPI
} from '../Functions/ApiFunctions'

const userApi = UserApi.create()

export function* confirmLoanSaga(action: any): any {
  try {
    const { loanData } = action
    setNetworkActivityStatusBar(true)
    const response = yield call(userApi.confirmLoan, loanData)
    setNetworkActivityStatusBar()
    if (response.ok && response.status === 200) {
      yield put(UserActions.confirmLoanSuccess(response.data))
    } else {
      yield put(UserActions.confirmLoanFailure(getErrorAPI(response)))
    }
  } catch (error: any) {
    yield put(UserActions.confirmLoanFailure(getErrorAPI(error.message)))
  }
}

export function* getProvinceSaga(): any {
  try {
    setNetworkActivityStatusBar(true)
    const response = yield call(userApi.getProvince)
    setNetworkActivityStatusBar()
    if (response.ok && response.status === 200) {
      yield put(UserActions.getProvinceSuccess(response.data))
    } else {
      yield put(UserActions.getProvinceFailure(getErrorAPI(response)))
    }
  } catch (error: any) {
    yield put(UserActions.getProvinceFailure(getErrorAPI(error.message)))
  }
}


export default function* UserSaga() {
  yield takeLatest(UserTypes.GET_PROVINCE_REQUEST, getProvinceSaga)
  yield takeLatest(UserTypes.CONFIRM_LOAN_REQUEST, confirmLoanSaga)
}
