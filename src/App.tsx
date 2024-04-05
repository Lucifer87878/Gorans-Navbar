import './App.css';
import Navbar from './components/Navbar/NavBar';

const GoToNavLink = [
  { Text: 'Home', href: '/#' },
  { Text: 'About oss', href: '/#' },
  { Text: 'Contakt oss', href: '/#' },
  { Text: 'Different services', href: '/#' },
  { Text: 'Cooperate with oss', href: '/#' }
];

function App() {
  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />
    </>
  );
}

export default App;
