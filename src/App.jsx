import './app.scss'
import Navbar from './components/navbar/Navbar';

const App = () => { 
  return <div>
    <section id='Homepage'>
      <Navbar/>
    </section>
    <section>parallax</section>
    <section id='Skills'>skills</section>
    <section>parallax</section>
    <section id='Portfolio'>portfolio</section>
    <section>portfolio2</section>
    <section>portfolio3</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
