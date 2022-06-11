import apisauce from 'apisauce'
import ApiConfig from '../Config/ApiConfig'

const baseURL = ApiConfig.baseURL + '/'
const create = () => {
  const api = apisauce.create({
    baseURL,
    headers: ApiConfig.headers,
    timeout: ApiConfig.timeOut
  })

  const confirmLoan = (loanData: any) => {
    return api.post('loans', { ...loanData })
  }

  const getProvince = () => {
    return api.get('provinces')
  }

  return {
    getProvince,
    confirmLoan
  }
}

export default { create }
