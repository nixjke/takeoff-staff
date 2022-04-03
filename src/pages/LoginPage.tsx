import axios from 'axios'
import { useAppDispatch } from '../store/hooks'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../store/slices/userSlice'

interface IFormInput {
  email: string
  password: string
}

export default function LoginPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:3001/login',
        data: {
          email: email,
          password: password
        }
      })
      dispatch(
        setUser({
          email: response.data.user.email,
          id: response.data.user.id,
          accessToken: response.data.accessToken
        })
      )
      navigate('/contacts')
    } catch (error) {
      console.log(error)
    }
  }

  const { register, handleSubmit } = useForm<IFormInput>({ mode: 'onBlur' })
  const onSubmit: SubmitHandler<IFormInput> = data => {
    handleLogin(data.email, data.password)
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="my-2 px-4 py-3 focus:outline-none focus:bg-green-100 hover:bg-green-100 transition-colors"
            placeholder="Login"
            {...register('email', { required: true, maxLength: 20 })}
          />
        </div>
        <div>
          <input
            type="password"
            className="my-2 px-4 py-3 focus:outline-none focus:bg-green-100 hover:bg-green-100 transition-colors"
            placeholder="Password"
            {...register('password', { required: true, minLength: 8 })}
          />
        </div>

        <div>
          <input
            className="cursor-pointer mt-2 w-full px-4 py-4 bg-white hover:bg-green-100 focus:outline-none focus:bg-green-100 transition-colors uppercase font-mono font-bold"
            type="submit"
            value="Sign in"
          />
        </div>
      </form>
    </div>
  )
}
