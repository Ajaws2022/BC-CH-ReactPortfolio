import React, {useState} from "react";
// import About from "./About";
// import Portfolio from "./Portfolio";
// import Contact from "./Contact";
// import Resume from "./Resume"
import { Link } from 'react-router-dom'
export default function Navbar(){
    const [page, setPage] = useState('about');

    function handleClick(event) {
        setPage(event.target.name);
    }
    return(
        <div className="mr-4 mb-2">
            <nav>
                <ul>
                    <li><Link to={{pathname: "/about"}} onClick={handleClick}>About</Link></li>
                    <li><Link to={{pathname: "/portfolio"}} onClick={handleClick}>Portfolio</Link></li>
                    <li><Link to={{pathname: "/contact"}} onClick={handleClick}>Contact</Link></li>
                    <li><Link to={{pathname: "/resume"}} onClick={handleClick}>Resume</Link></li>
                    
                </ul>
            </nav>
            {/* {page === 'about' && <About />}
            {page === 'portfolio' && <Portfolio />}
            {page === 'contact' && <Contact />}
            {page === 'resume' && <Resume />} */}
        </div>
    )
}