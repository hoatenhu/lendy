import { AppState } from './AppTypes'
import { AmoutState, UserState } from './AmountTypes'
export type FetchingError = null | string

export type RootState = {
  app: AppState
  amount: AmoutState
  user: UserState
}

export type Error = {
  error: string
  message: string
  code: number
  details: string
  statusCode: number
} | null
