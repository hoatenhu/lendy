import { Error } from './RootState'

export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}

export enum ValidateCodeStatus {
  VALID = 'valid',
  WRONG_CODE = 'wrong-code',
  NO_ATTEMPTS_LEFT = 'no-attempts-left',
  EXPIRED = 'expired'
}

export type Phone = {
  countryCode: number
  phoneNumber: string
}

export type Image = {
  id: string
  url: string
  resizedUrl: string
  originalName: string
  size: number
  path: string
}

export type User = {
  id: string
  storeId: string
  manager: {
    firstName: string
    lastName: string
    fullName: string
    email: string
    gender: Gender
    companyName: string
    businessCode: string
    phone: {
      countryCode: number
      phoneNumber: string
    }
    preferredLanguage: string
  }
  name: string
  phone: Phone
  address: string
  limitOrderDay: number
  schedule: [
    {
      dayOfWeek: number
      scheduleHours: [
        {
          start: number
          end: number
          text: string
        }
      ]
    }
  ]
  coverImage: Image
  timezone: number
  createdAt: string
  updatedAt: string
  isReceiveNotification: boolean
  isFirstOpenApp: boolean

  roleName: string
}

export type AmoutState = {
  offerData: any

  fetchingGetOffer: boolean
  errorGetOffer: Error | null
}

export type UserState = {
  userData: User | null
  
  fetchingConfirmLoan: boolean,
  errorConfirmLoan: Error | null,
}
