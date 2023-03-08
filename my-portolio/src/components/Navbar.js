import React, {useState} from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume"
export default function Navbar(){
    const [page, setPage] = useState('about');

    function handleClick(event) {
        setPage(event.target.name);
    }
    return(
        <div>
            <nav>
                <ul>
                    <li><button name="about" onClick={handleClick}>About</button></li>
                    <li><button name="portfolio" onClick={handleClick}>Portfolio</button></li>
                    <li><button name="contact" onClick={handleClick}>Contact</button></li>
                    <li><button name="resume" onClick={handleClick}>Resume</button></li>
                    
                </ul>
            </nav>
            {page === 'about' && <About />}
            {page === 'portfolio' && <Portfolio />}
            {page === 'contact' && <Contact />}
            {page === 'resume' && <Resume />}
        </div>
    )
}