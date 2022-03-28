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
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Login</p> <input {...register('login', { required: true, maxLength: 20 })} />
          <p>{errors.login?.type === 'required' && 'Login is required'}</p>
        </label>

        <label>
          <p>Password</p> <input {...register('password', { required: true, minLength: 8 })} />
          <p>{errors.password && 'Password is required'}</p>
        </label>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}
