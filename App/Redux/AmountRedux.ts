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

  getWeatherRequest: ['position'],
  getWeatherSuccess: ['weatherData'],
  getWeatherFailure: ['errorGetWeather'],
})

export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<AmoutState> = Immutable({
  fetchingGetOffer: false,
  errorGetOffer: null,
  offerData: null,

  fetchingGetWeather: false,
  errorGetWeather: null,
  weatherData: null
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
  
// Get offer
export const getWeatherRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingGetWeather: true, errorGetWeather: null })

export const getWeatherFailure = (
  state = INITIAL_STATE,
  { errorGetWeather }: { errorGetWeather: any }
) => state.merge({ fetchingGetWeather: false, errorGetWeather })

export const getWeatherSuccess = (
  state = INITIAL_STATE,
  { weatherData }: { weatherData: any }
) =>
  state.merge({ fetchingGetWeather: false, weatherData })
  

/* ------------- Hookup Reducers To Types ------------- */
export const AmountTypes = Types
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_OFFER_REQUEST]: getOfferRequest,
  [Types.GET_OFFER_SUCCESS]: getOfferSuccess,
  [Types.GET_OFFER_FAILURE]: getOfferFailure,

  [Types.GET_WEATHER_REQUEST]: getWeatherRequest,
  [Types.GET_WEATHER_SUCCESS]: getWeatherSuccess,
  [Types.GET_WEATHER_FAILURE]: getWeatherFailure,
})
