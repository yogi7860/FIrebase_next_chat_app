import React from 'react'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <h1>{process.env.NEXT_PUBLIC_ENV}</h1>
    </div>
  )
}

export default Login
