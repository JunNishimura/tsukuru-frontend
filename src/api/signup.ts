import { HttpClient } from '~/types/httpClient'
import type { SignupParams } from '~/types/signup'

export async function signup(
  httpClient: HttpClient,
  params: SignupParams
): Promise<any> {
  const res = await httpClient.post<any>('/v1/auth', params)
  return res
}
