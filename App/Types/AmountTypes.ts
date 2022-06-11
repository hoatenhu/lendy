import { Error } from './RootState'


export type AmoutState = {
  offerData: any

  fetchingGetOffer: boolean
  errorGetOffer: Error | null
}

export type UserState = {
  userData: any
  fetchingConfirmLoan: boolean,
  errorConfirmLoan: Error | null,

  provinceData: any,
  fetchingGetProvince: boolean,
  errorGetProvince: Error | null,
}
