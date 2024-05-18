export interface IUser {
  uid: string
  firstName?: string
  lastName?: string
  nickname: string
  email?: string
  profilePicture?: string
  status?: 'online' | 'offline' | 'busy'
}
