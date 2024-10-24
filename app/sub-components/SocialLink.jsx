import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialLink = () => {
  return (
    <div>
      <ul className="flex">
		<li className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0a3d62] before:rounded-full before:transition-all before:duration-500 before:opacity-0 before:z-[-1] hover:before:opacity-100 hover:before:scale-80 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:border-2 after:border-dashed after:border-[#2e86de] after:transition-all after:duration-500 after:opacity-0 hover:after:opacity-100 animate-rotating "><FaLinkedin /></li>
		<li className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0a3d62] before:rounded-full before:transition-all before:duration-500 before:opacity-0 before:z-[-1] hover:before:opacity-100 hover:before:scale-80 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:border-2 after:border-dashed after:border-[#2e86de] after:transition-all after:duration-500 after:opacity-0 hover:after:opacity-100 animate-rotating "><FaGithub /></li>
		<li className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0a3d62] before:rounded-full before:transition-all before:duration-500 before:opacity-0 before:z-[-1] hover:before:opacity-100 hover:before:scale-80 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:border-2 after:border-dashed after:border-[#2e86de] after:transition-all after:duration-500 after:opacity-0 hover:after:opacity-100 animate-rotating "><FaWhatsapp /></li>
		<li className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0a3d62] before:rounded-full before:transition-all before:duration-500 before:opacity-0 before:z-[-1] hover:before:opacity-100 hover:before:scale-80 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:border-2 after:border-dashed after:border-[#2e86de] after:transition-all after:duration-500 after:opacity-0 hover:after:opacity-100 animate-rotating "><FaTwitter /></li>
	</ul>
    </div>
  );
}

export default SocialLink;
