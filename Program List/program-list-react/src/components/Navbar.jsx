import { useState } from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = ({ isActive }) => 
    isActive 
    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-white text-sm font-medium text-white' 
    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white hover:text-gray-100'
  
  const mobileLinkClasses = ({ isActive }) => 
    isActive 
    ? "border-l-4 border-white text-white block pl-3 pr-4 py-2 text-base font-medium" 
    : "border-l-4 border-transparent text-white hover:border-white block pl-3 pr-4 py-2 text-base font-medium"
  
  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-between flex-1">
            {/* Logo */}
            <NavLink to="/">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-primary font-bold font-logo">
                    <img src={Logo} alt="Logo" />
                  </span>
                </div>
                <span className="ml-2 text-xl font-bold text-white font-logo">GoGrow</span>
              </div>
            </NavLink>
            
            {/* Navigation Links - Desktop */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <NavLink to="/" className={linkClasses}>
                Home
              </NavLink>
              <NavLink to="/programs" className={linkClasses}>
                Programs
              </NavLink>
              <NavLink to="/add-program" className="inline-flex items-center px-4 py-2 ml-4 border border-transparent text-sm font-medium rounded-md text-primary bg-gray-100 hover:bg-white">
                Add Program
              </NavLink>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <NavLink to="/" className={mobileLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/programs" className={mobileLinkClasses}>
              Programs
            </NavLink>
            <NavLink to="/add-program" className="block mx-3 my-2 px-4 py-2 text-center text-sm font-medium rounded-md text-primary bg-gray-100 hover:bg-white">
              Add Program
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}