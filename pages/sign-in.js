import { useRouter } from 'next/router'
import React, { useState } from 'react'

import Button from '../components/Button'
import Field from '../components/Field'
import Input from '../components/Input'
import Page from '../components/Page'
import { useSignIn } from '../hooks/user'

const SignInPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, signInError, signInLoading } = useSignIn()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const valid = await signIn(email, password)
      if (valid) {
        router.push('/')
      }
    } catch (err) {
      // mutation.isError will be true
    }
  }

  return (
    <Page title="Sign In">
      <form onSubmit={handleSubmit}>
        <Field label="Email">
          <Input
            type="Email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>
        <Field label="Password">
          <Input
            type="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </Field>
        {signInError && <p className="text-red-700">Invalid credentials</p>}
        {signInLoading ? (
          <p>Loading...</p>
        ) : (
          <Button type="submit">Sign In</Button>
        )}
      </form>
    </Page>
  )
}

export default SignInPage
