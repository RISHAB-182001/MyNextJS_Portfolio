// How to make on click for Menu button, 16:30 minutes into the video:https://www.youtube.com/watch?v=DOOoS6GHDw8

import React from 'react';
import Image from 'next/image';
import {
	BookOpenIcon,
	TagIcon,
	StarIcon,
	MenuIcon,
	BookmarkIcon,
	GiftIcon
}from "@heroicons/react/solid";
import SidebarItem from './SidebarItem';
import Center from './Center';


function Sidebar() {
    return (
        < sidebar className = " relative min-h-screen md:flex text-gray-300 ease-in-out" >
			{/* Mobile Menu */}
			<div className="bg-black text-gray-100 md:hidden ">
				{/* logo */}
				<div className="pl-5 rounded hover:bg-gray-800">
					<SidebarItem className="Menu" title='Menu' Icon={MenuIcon} />
				</div>
				{/* Focus bg-gray-700|||https://www.youtube.com/watch?v=DOOoS6GHDw8 */}
				{/* Mobile Menu Button */}
			</div>


			< div className = "sidebar_real bg-black py-10 px-2 font-bold absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition-duration-200 ease-in-out w-64 " >
			{/* < div className = "bg-black py-2 px-2 font-bold absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition-duration-200 ease-in-out w-64 " > */}
				<div className="rounded hover:bg-gray-800"><SidebarItem title='Education' Icon={BookOpenIcon} /></div>
				<div className="rounded hover:bg-gray-800"><SidebarItem title='Skills' Icon={TagIcon} /></div>
				<div className="rounded hover:bg-gray-800"><SidebarItem title='About Me' Icon={StarIcon} /></div>
				{/* <SidebarItem title='Projects' Icon={BookmarkIcon} />
				<SidebarItem title='Achievements' Icon={GiftIcon} /> */}
			</div>			

			< div className = "flex justify-center w-screen" >
				<Center />
			</div>
        </sidebar>
    );
}

export default Sidebar
