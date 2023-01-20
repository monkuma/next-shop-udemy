import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useUser } from '../hooks/user'
import { fetchJson } from '../lib/api'

function NavBar() {
  const user = useUser()

  const handleSignOut = async () => {
    await fetchJson('/api/logout')
  }
  console.log('[NavBar] user: ', user)

  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li role="separator" className="flex-1" />
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <button onClick={handleSignOut}>Sign out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Next Shop</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
