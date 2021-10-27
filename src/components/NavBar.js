import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
       <header className="bg-red-100">
           <div className="container mx-auto flex justify-between">
               <nav className="flex">
                   <NavLink to="/" 
                   exact 
                   activeClassName="text-purple bg-green-50"                    className="inline-flex items-center py-6 px-3 mr-4 hover:text-purple-800 text-4xl font-bold cursive tracking-widest">
                       Morgan
                   </NavLink>

                   <NavLink to="/post"
                   className="inline-flex items-center py-6 px-3 mr-4 hover:text-white text-2xl font-bold cursive tracking-widest"
                   activeClassName="text-black bg-indigo-200">
                       Blog
                   </NavLink>

                   <NavLink to="/project"
                   className="inline-flex items-center py-6 px-3 mr-4 hover:text-white text-2xl font-bold cursive tracking-widest"
                   activeClassName="text-black bg-purple-300">
                       Projects
                   </NavLink>

                   <NavLink to="/about"
                   className="inline-flex items-center py-6 px-3 mr-4 hover:text-white text-2xl font-bold cursive tracking-widest"
                   activeClassName="text-black bg-yellow-100">
                       About Me!
                   </NavLink>
               </nav>
               <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/morgan-jemerson/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://twitter.com/CodeSheMakes" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
               </div>
           </div>
       </header>
        )
}