export default {
  baseURL: 'https://api.lendy.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    language: 'vn',
    'x-api-key': 'a1b2c3d4e5',
    'build-app-version': '1',
    timezone: new Date().getTimezoneOffset()
  },
  timeOut: 30000
}