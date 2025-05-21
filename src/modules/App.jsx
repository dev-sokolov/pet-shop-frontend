import Navbar from './Navbar/Navbar';
import Navigation from '../pages/Navigation';
import Footer from './Footer/Footer';
// import BurgerMenu from './Navbar/BurgerMenu/BurgerMenu';

import '../shared/styles/style.css'

function App() {

  return (
    <>
      {/* <BurgerMenu /> */}
      <Navbar />
      <Navigation />
      <Footer />
    </>
  );
}

export default App;
