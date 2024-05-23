export interface IUser {
  _id: string
  firstName?: string
  lastName?: string
  nickname: string
  email?: string
  profilePicture?: string
  status?: 'online' | 'offline' | 'busy'
}
