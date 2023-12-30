import './app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

const App = () => { 
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id='Portfolio'><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id='Skills'><Skills/></section> 
    {/* <section id='Portfolio'>portfolio</section>
    <section>portfolio2</section>
    <section>portfolio3</section>
    <section id='Contact'>Contact</section> */}
  </div>;
};

export default App;
