import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import Sidebar from '../components/Sidebar'

export default function ContactsPage() {
  const { isAuth } = useAuth()
  return isAuth ? (
    <div>
      <Sidebar></Sidebar>
      <div className="ml-24 sm:ml-40 transition-all">Contacts asdasd Page</div>
    </div>
  ) : (
    <Navigate to="/" />
  )
}
