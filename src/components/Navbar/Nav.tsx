import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css"


function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);

    const showNav = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("responsive_nav");
        }
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About oss</a>
                <a href="/#">Contakt oss</a>
                <a href="/#">different services</a>
                <a href="/#">Cooperate with oss</a>
                <button className="nav-btn nav-close-btn" onClick={showNav}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNav}>
                <FaBars />  
                {/* detta är icon för när det är små skärmar */}
            </button>
        </header>
    );
    
}

export default Navbar;