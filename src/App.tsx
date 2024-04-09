import './App.css';
import Navbar from './components/Navbar/NavBar';
import ShareButton from './components/Buttens/buttens';
// import Card from './components/Cards/Card';


const GoToNavLink = [
  { Text: 'Home', href: '/#' },
  { Text: 'About oss', href: '/#' },
  { Text: 'Contakt oss', href: '/#' },
  { Text: 'Different services', href: '/#' },
  { Text: 'Cooperate with oss', href: '/#' }
];

const socialLinks = [
  { className: "twitter", icon: "ri-twitter-line", href: "#" },
  { className: "facebook", icon: "ri-facebook-line", href: "#" },
  { className: "close", icon: "ri-close-line", href: "#" }, // För att stänga knap menyn 
  { className: "dribbble", icon: "ri-dribbble-line", href: "#" },
  { className: "whatsapp", icon: "ri-whatsapp-line", href: "#" }
];



      
function App() {
  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />
      <ShareButton socialLinks={socialLinks} />
      {/* <Card /> */}
    </>
  );
}

export default App;
