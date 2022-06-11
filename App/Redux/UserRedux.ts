import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Types
import { User, UserState } from '../Types/AmountTypes'
import { Error } from '../Types/RootState'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  confirmLoanRequest: ['loanData'],
  confirmLoanSuccess: ['userData'],
  confirmLoanFailure: ['errorConfirmLoan'],
})

export default Creators
export { Types }

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<UserState> = Immutable({
  userData: null,

  fetchingConfirmLoan: false,
  errorConfirmLoan: null,
})

/* ------------- Reducers ------------- */

// Confirm Loan
export const confirmLoanRequest = (state = INITIAL_STATE) =>
  state.merge({
    fetchingConfirmLoan: true,
    errorConfirmLoan: null
  })

export const confirmLoanSuccess = (
  state = INITIAL_STATE,
  { userData }: { userData: User }
) =>
  state.merge({
    userData,
    fetchingConfirmLoan: false,
    errorConfirmLoan: null
  })

export const confirmLoanFailure = (
  state = INITIAL_STATE,
  { errorConfirmLoan }: { errorConfirmLoan: Error }
) =>
  state.merge({
    fetchingConfirmLoan: false,
    errorConfirmLoan
  })


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  CONFIRM_LOAN_REQUEST: confirmLoanRequest,
  CONFIRM_LOAN_SUCCESS: confirmLoanSuccess,
  CONFIRM_LOAN_FAILURE: confirmLoanFailure,
})
