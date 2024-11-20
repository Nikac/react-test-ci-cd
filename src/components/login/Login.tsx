// src/components/LoginForm.tsx
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import './Login.css'

interface LoginFormData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data)

    navigate('/records')
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-block">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="input-el"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
        </div>

        <div className="input-block">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="input-el"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          {errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="form-btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
