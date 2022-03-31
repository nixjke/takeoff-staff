import { useAppSelector } from '../store/hooks'

export const useAuth = () => {
  const { email, accessToken, id } = useAppSelector(state => state.user)

  return {
    isAuth: !!accessToken,
    email,
    accessToken,
    id
  }
}
