import AppConfig from './AppConfig'

export default {
  baseURL: AppConfig.SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    language: AppConfig.LANGUAGE,
    'x-api-key': AppConfig.X_API_KEY,
    'build-app-version': AppConfig.APP_VERSION_CODE,
    timezone: new Date().getTimezoneOffset()
  },
  timeOut: 30000
}