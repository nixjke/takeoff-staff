import Sidebar from '../components/Sidebar'
import { useAuth } from '../hooks/use-auth'

export default function ContactsPage() {
  const { isAuth } = useAuth()
  return isAuth ? (
    <div>
      <Sidebar></Sidebar>
      <div className="ml-24 sm:ml-40 transition-all">Contacts asdasd Page</div>
    </div>
  ) : (
    // Вернуть <Navigate to="/" />
    <div>
      <Sidebar></Sidebar>
      <div className="ml-24 sm:ml-40 transition-all">Contacts asdasd Page</div>
    </div>
  )
}
