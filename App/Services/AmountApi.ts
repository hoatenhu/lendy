import apisauce from 'apisauce'
import ApiConfig from '../Config/ApiConfig'

const baseURL = ApiConfig.baseURL 
const URL = ({lat, lng}: any) => `forecast?lat=${lat}&lon=${lng}&appid=cee606701cb8d19ce5d4d0257d952975`
const create = () => {
  const api = apisauce.create({
    baseURL,
    headers: ApiConfig.headers,
    timeout: ApiConfig.timeOut
  })

  const signUp = (signUpData: any, deviceId: string) => {
    api.setHeaders({
      'device-id': deviceId
    })
    return api.post('stores/sign-up', { ...signUpData })
  }

  const getOffer = () => {
    return api.get('')
  }

  const getWeather = (position: any) => {
    return api.get(URL(position))
  }

  return {
    signUp,
    getOffer,
    getWeather
  }
}

export default { create }
