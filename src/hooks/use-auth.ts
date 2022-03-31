import { useAppSelector } from '../store/hooks'

export const useAuth = () => {
  const { login, token } = useAppSelector(state => state.user)

  return {
    isAuth: !!login,
    token
  }
}
