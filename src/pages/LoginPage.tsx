import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  login: string
  password: string
}

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IFormInput>({ mode: 'onBlur' })
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="my-2 px-4 py-3 focus:outline-none focus:bg-green-100 hover:bg-green-100 transition-colors"
            placeholder="Login"
            {...register('login', { required: true, maxLength: 20 })}
          />
        </div>
        <div>
          <input
            className="my-2 px-4 py-3 focus:outline-none focus:bg-green-100 hover:bg-green-100 transition-colors"
            placeholder="Password"
            {...register('password', { required: true, minLength: 8 })}
          />
        </div>

        <div>
          <input
            className="mt-2 w-full px-4 py-4 bg-white hover:bg-green-100 focus:outline-none focus:bg-green-100 transition-colors uppercase font-mono font-bold"
            type="submit"
            value="Sign in"
          />
        </div>
      </form>
    </div>
  )
}
