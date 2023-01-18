import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar'
import Title from './Title'
const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} - NEXT SHOP</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  )
}

export default Page
