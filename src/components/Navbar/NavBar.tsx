import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.scss";

function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  

  const showNav = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  const GoToNavLink = [
    {Text: "Home", href:"/#"},
    {Text: "About oss", href:"/#"},
    {Text: "Contakt oss", href:"/#"},
    {Text: "Different services", href:"/#"},
    {Text: "Cooperate with oss", href:"/#"}
  ]

  return (
    <section className="NavBar">
      <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            {GoToNavLink.map((GoToNavLink, index) =>(
                <a key={index} href={GoToNavLink.href}>{GoToNavLink.Text}</a>
            ))}
          <button className="nav-btn nav-close-btn" onClick={showNav}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNav}>
          <FaBars />
          {/* detta är icon för när det är små skärmar */}
        </button>
      </header>
    </section>
  );
}

export default Navbar;
