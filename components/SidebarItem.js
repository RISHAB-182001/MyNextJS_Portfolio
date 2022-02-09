import React from 'react'

function SidebarItem({ Icon, title }) {
  return (
	< sidebar className = "m-2 pl-3" >
		< div className = "group flex cursor-pointer group w-15 sm:w-25 hover:text-white" >
			< p className = "" >{title} </p>
			< Icon className = "h-7 w-7 opacity-0 group-hover:opacity-100 group-hover:text-white tracking-widest " />
		
		</div>
	</sidebar>
  )
}

export default SidebarItem
