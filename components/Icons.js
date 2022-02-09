import React from 'react'
import {FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'next/image'

function Icons() {
  return (
		<div className="Contact">
            <div className="flex justify-center w-full h-full">
				< a href = "https://studio.youtube.com/channel/UCt-kJPxl1ZT-ZmLqD6nK0WA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D" > < FaYoutube className = "mr-10"
				size = "2em" / > </a>
				<a href="https://github.com/RISHAB-182001?tab=repositories"><FaGithub className="mr-10" size="2em" /></a>
				<a href="https://www.linkedin.com/in/rishab-kashyap-029a841a4/"><FaLinkedin className="mr-5" size="2em" /></a>
            </div>
        </div>
  )
}

export default Icons
