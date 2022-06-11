import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Types
import {UserState} from '../Types/AmountTypes';
import {Error} from '../Types/RootState';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  confirmLoanRequest: ['loanData'],
  confirmLoanSuccess: ['userData'],
  confirmLoanFailure: ['errorConfirmLoan'],

  getProvinceRequest: [''],
  getProvinceSuccess: ['provinceData'],
  getProvinceFailure: ['errorGetProvince'],
});

export default Creators;
export const UserTypes = Types;

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<UserState> = Immutable({
  userData: null,

  fetchingConfirmLoan: false,
  errorConfirmLoan: null,

  provinceData: null,
  fetchingGetProvince: false,
  errorGetProvince: null,
});

/* ------------- Reducers ------------- */

// Confirm Loan
export const confirmLoanRequest = (state = INITIAL_STATE) =>
  state.merge({
    fetchingConfirmLoan: true,
    errorConfirmLoan: null,
  });

export const confirmLoanSuccess = (
  state = INITIAL_STATE,
  {userData}: {userData: any},
) =>
  state.merge({
    userData,
    fetchingConfirmLoan: false,
    errorConfirmLoan: null,
  });

export const confirmLoanFailure = (
  state = INITIAL_STATE,
  {errorConfirmLoan}: {errorConfirmLoan: Error},
) =>
  state.merge({
    fetchingConfirmLoan: false,
    errorConfirmLoan,
  });

// Get provinces
export const getProvinceRequest = (state = INITIAL_STATE) =>
  state.merge({
    fetchingGetProvince: true,
    errorConfirmLoan: null,
  });

export const getProvinceSuccess = (
  state = INITIAL_STATE,
  {provinceData}: {provinceData: any},
) =>
  state.merge({
    provinceData,
    fetchingGetProvince: false,
    errorConfirmLoan: null,
  });

export const getProvinceFailure = (
  state = INITIAL_STATE,
  {errorGetProvince}: {errorGetProvince: Error},
) =>
  state.merge({
    fetchingGetProvince: false,
    errorGetProvince,
  });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CONFIRM_LOAN_REQUEST]: confirmLoanRequest,
  [Types.CONFIRM_LOAN_SUCCESS]: confirmLoanSuccess,
  [Types.CONFIRM_LOAN_FAILURE]: confirmLoanFailure,

  [Types.GET_PROVINCE_REQUEST]: getProvinceRequest,
  [Types.GET_PROVINCE_SUCCESS]: getProvinceSuccess,
  [Types.GET_PROVINCE_FAILURE]: getProvinceFailure,
});
