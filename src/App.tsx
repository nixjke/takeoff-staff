import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactsPage from './pages/ContactsPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
