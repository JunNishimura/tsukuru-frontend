export type Config = {
  withCredentials?: boolean
  params?: any
}

export type Response<T> = {
  data: {
    data: T
  }
  status: number
}

export type RequestData = any

export type HttpClient = {
  get<T>(url: string, config?: Config): Promise<Response<T>>
  post<T>(url: string, data?: RequestData, config?: Config): Promise<Response<T>>
  put<T>(url: string, data?: RequestData, config?: Config): Promise<Response<T>>
  delete<T>(url: string, data?: RequestData, config?: Config): Promise<Response<T>>
}
