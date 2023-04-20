type MethodOfRequest = 'POST' | 'GET' | 'PATCH' | 'DELETE'| 'PUT'


export interface RequestHeader {
  method?: MethodOfRequest,
  body?: Record<string, any>
}