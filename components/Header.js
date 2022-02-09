import Image from 'next/image'
import React from 'react'
import PortfolioPic from './../Image/New2.png'

function Header() {
  return (
	<header className = "flex space-y-50 bg-gradient-to-r from-indigo-900 via-purple-500 to-orange-600 justify-between" >
	{/* <header className = "flex space-y-50 bg-gradient-to-r from-gray-400 to-black justify-between" > */}
		<h1 className = "ml-5 flex flex-col justify-center text-right font-bold hover:animate-pulse" >MY NEXT.JS BUILD</h1> 
		{/* Not a normal Image Tag, it's only present in Nextjs and Lazy Loaded */ }
		
		<Image className="ml-5" src={PortfolioPic} alt="My Logo" height={100} width={180} />

		
	</header>
  )
}

export default Header
