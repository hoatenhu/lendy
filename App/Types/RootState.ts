import { AppState } from './AppTypes'
import { AuthState, UserState } from './AmountTypes'
export type FetchingError = null | string

export type RootState = {
  app: AppState
  auth: AuthState
  user: UserState
}

export type Error = {
  error: string
  message: string
  code: number
  details: string
  statusCode: number
} | null
