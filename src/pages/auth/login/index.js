import React from 'react'
import Button from '@mui/material/Button';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <h1>{process.env.NEXT_PUBLIC_ENV}</h1>
      <Button variant="contained">
        Test Button
      </Button>
    </div>
  )
}

export default Login
