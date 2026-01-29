import React, { useState } from 'react'
import { Login } from '../../api/apis.js'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const LoginPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const userData = { email, password }

    try {
      const response = await Login(userData)

      if (response.token) {
        localStorage.setItem('token', response.token)
        navigate('/')
      } else {
        setError('Invalid credentials. Please try again.')
      }
    } catch (err) {
      setError('Unable to sign in right now. Please retry.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white shadow-xl rounded-3xl px-8 py-10 space-y-8 border">

          {/* Logo */}
          <div className="text-center space-y-2">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow">
              ShopEase
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h1>
            <p className="text-sm text-gray-500">Login to continue shopping</p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition disabled:opacity-60"
            >
              {isLoading ? 'Signing in...' : 'Login'}
            </button>
          </form>

          {/* Register link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">
              Create one
            </Link>
          </p>

        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage
