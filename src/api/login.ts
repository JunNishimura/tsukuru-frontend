import { HttpClient } from '~/types/httpClient'
import { LoginParams } from '~/types/login'

export async function login(
  httpClient: HttpClient,
  params: LoginParams
): Promise<any> {
  const res = await httpClient.post('v1/auth/sign_in', params)
  return res
}
