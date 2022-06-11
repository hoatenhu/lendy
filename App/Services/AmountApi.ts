import apisauce from 'apisauce'
import ApiConfig from '../Config/ApiConfig'

const baseURL = ApiConfig.baseURL + '/offer'
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

  return {
    signUp,
    getOffer
  }
}

export default { create }
