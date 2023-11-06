export interface ILogin {
  userName: string
}

export interface ILoginParams {
  page: number
  pageSize: number
  [keys: string]: any
}

export interface UserInfosStates {
  userInfos: ILogin
  token: string
}
