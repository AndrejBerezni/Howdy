import { IUser } from '../../../compiler/interfaces'

export default function SearchResultUser({ user }: { user: IUser }) {
  // to check if user is friend, when I implement friends functionality

  return <li>{user.nickname}</li>
}
