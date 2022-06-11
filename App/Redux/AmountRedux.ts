import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Types
import { AmoutState } from '../Types/AmountTypes'
import { Error } from '../Types/RootState'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getOfferRequest: [''],
  getOfferSuccess: ['offerData'],
  getOfferFailure: ['errorGetOffer'],
})

export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<AmoutState> = Immutable({
  fetchingGetOffer: false,
  errorGetOffer: null,
  offerData: null
})

/* ------------- Reducers ------------- */

// Get offer
export const getOfferRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingGetOffer: true, errorGetOffer: null })

export const getOfferFailure = (
  state = INITIAL_STATE,
  { errorGetOffer }: { errorGetOffer: Error }
) => state.merge({ fetchingGetOffer: false, errorGetOffer })

export const getOfferSuccess = (
  state = INITIAL_STATE,
  { offerData }: { offerData: any }
) =>
  state.merge({ fetchingGetOffer: false, offerData })
  

/* ------------- Hookup Reducers To Types ------------- */
export { Types }
export const reducer = createReducer(INITIAL_STATE, {
  GET_OFFER_REQUEST: getOfferRequest,
  GET_OFFER_SUCCESS: getOfferSuccess,
  GET_OFFER_FAILURE: getOfferFailure,
})
