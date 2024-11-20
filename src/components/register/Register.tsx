import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import './Register.css'

interface RegisterFormData {
  name: string
  email: string
  password: string
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<RegisterFormData>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data)

    navigate('/records')
  }

  const validateField = async (field: keyof RegisterFormData) => {
    await trigger(field)
  }

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-block">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="input-el"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters',
              },
            })}
            onBlur={() => validateField('name')}
            onChange={() => validateField('name')}
          />
          {errors.name && <p className="error-msg">{errors.name.message}</p>}
        </div>

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
            onBlur={() => validateField('email')}
            onChange={() => validateField('email')}
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
            onBlur={() => validateField('password')}
            onChange={() => validateField('password')}
          />
          {errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="form-btn">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
