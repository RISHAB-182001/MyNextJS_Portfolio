import React from 'react';
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Icons from '../components/Icons'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main> */}
		<Header />
        {/* Sidebar - For Navigation */}  
        <Sidebar />
        {/* Center inside SideBar*/}
		{/* Contact */}
		<Contact />
		{/* Icons for Github, LinkedIn, etc. */}
		<Icons />
    </div>
  )
}
