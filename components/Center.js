import Image from 'next/image'
import React from 'react'
import School from './../Image/School.jpg'
import College from './../Image/College.jpg'
import University from './../Image/University.jpg'
import ProfilePic from './../Image/ProfilePic.png'
import Skills from './Skills'


function Center() {
  return (
	<div className="flex-1 text-purple-600 px-2 md:py-10">
		< div className ="Education py-2">
	  		< h1 className = "flex justify-center font-serif hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-xl py-3" > EDUCATION </h1>
			<div className="my-4 mx-2 sm:grid xl:grid-cols-3 px-2 py-2 justify-center">
				<div className="mx-2 my-2"><Image className="mx-2 my-2" src={School} caption="School" />INNISFREE HOUSE SCHOOL</div>
				<div className="mx-2 my-2"><Image src={College} />RV PU COLLEGE</div>
				<div className="flex flex-col mx-2 my-2"><Image src={University} />PES UNIVERSITY</div>
				
				<div className = "flex justify-between opacity-0 xl:opacity-100">
				</div>
			</div>


			< h1 className = "flex justify-center font-serif hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-xl my-10 py-3" > SKILLS </h1>
			<div className="Skills">
				{/* <button className="flex-basis:50% background-color:black box-shadow: 0 0 1vw 0.3vw white border-radius:9px margin-bottom:2px">Subscribe</button> */}
				<Skills />
			</div>
			<div className="About">
				< h1 className = "flex justify-center text-middle font-serif hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-xl py-3" > ABOUT ME </h1>
				<div className = " text-white font-medium flex justify-center w-100%">
				<p className = "w-3/4 flex my-32 ">Hey,
					Hi I am Rishab Kashyap. A 3rd year computer science engineering student at 
					PES UNIVERSITY of India. I am fascinated by the world of computer science 
					around me, which teaches just how vast this technology and subject is. I 
					have a keen interest in learning Web Technology and Artificial Intelligence. 
					This is my first official presentable Nextjs build!
					Looking forward to making this interaction a memorable one!
					Thank you, for visiting my website and considering me worthy of your time!</p>
					<div className="flex flex-col justify-center w-1/2 "><Image src={ProfilePic}/>	</div>	
			</div>
			</div>
			
{/* 		
			< h1 className = "justify-center font-serif hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-xl" > PROJECTS </h1>
			
			
			
			< h1 className = "justify-center font-serif hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-xl" > ACHIEVEMENTS </h1> */}

		</div>
	</div>
	
  )
}

export default Center;