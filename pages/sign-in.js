import React, { useState } from 'react'
import Button from '../components/Button'
import Field from '../components/Field'
import Input from '../components/Input'
import Page from '../components/Page'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Page title="Sign In">
      <form>
        <Field label="Email">
          <Input
            type="Email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>
        <Field
          label="Password"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        >
          <Input type="password" />
        </Field>
        <Button type="submit">Sign In</Button>
      </form>
    </Page>
  )
}

export default SignInPage
