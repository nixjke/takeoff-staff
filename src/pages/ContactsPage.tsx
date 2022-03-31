import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

export default function ContactsPage() {
  const { isAuth } = useAuth()
  return isAuth ? <div>Contacts Page</div> : <Navigate to="/" />
}
