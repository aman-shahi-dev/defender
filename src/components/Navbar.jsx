import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center px-10 justify-between py-2 gap-10 h-16 sticky top-0 left-0 right-0 bg-black font-jost">

        <img src="/defender/land-rover.svg" alt="Land Rover Logo" width="70" height="50" className="select-none" />

        <div className="flex space-x-10 items-center justify-center h-full">
            <Link
                className='text-sm md:text-xl hover:scale-110 transition-transform duration-300 ease-in-out'
                to='/'
            >
                Home
            </Link>
            <Link
                className='text-sm md:text-xl hover:scale-110 transition-transform duration-300 ease-in-out'
                to='/features'
            >
                Features
            </Link>
            <Link
                className='text-sm md:text-xl hover:scale-110 transition-transform duration-300 ease-in-out'
                to='/gallery'
            >
                Gallery
            </Link> 
            <Link
                className='text-sm md:text-xl hover:scale-110 transition-transform duration-300 ease-in-out'
                to='/about'
            >
                About
            </Link>
        </div>
        
    </nav>
  );
}

export default Navbar;