import { Error } from './RootState'


export type AmoutState = {
  offerData: any
  fetchingGetOffer: boolean
  errorGetOffer: Error | null

  fetchingGetWeather: boolean,
  errorGetWeather: Error | null,
  weatherData: any
}

export type UserState = {
  userData: any
  fetchingConfirmLoan: boolean,
  errorConfirmLoan: Error | null,

  provinceData: any,
  fetchingGetProvince: boolean,
  errorGetProvince: Error | null,
}
