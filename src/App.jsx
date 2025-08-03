import Navbar from './components/Navbar'
import Home from './components/Home'
import Body from './components/Body'
import ContactUs from './components/Contact_Us'
import AboutUs from './components/About_Us'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <section id="home" className="scroll-mt-24">
        <Home />
      </section>

      <section id="services" className="scroll-mt-24">
        <Body />
      </section>


      <section id="about" className="scroll-mt-24">
        <AboutUs />
      </section>
      
      <section id="contact" className="scroll-mt-24">
        <ContactUs />
      </section>


      <Footer />
    </div>
  );
}

export default App;
