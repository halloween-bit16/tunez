import NavBar from './NavBar';
import Footer from './Footer';
import Cards from '../components/Cards';
import hs from '../assets/hs.jpg';
import tb from '../assets/tb.jpg';
import tlt from '../assets/tlt.jpg';
import pk from '../assets/pk.jpg';
import b from '../assets/b.jpg';
import r from '../assets/r.jpg';
import hr from '../assets/hr.jpg';

function Singles(){
    return(
        <>
        <section className="bg-gradient-to-b from-blue-800 to-black">
            <NavBar></NavBar>
        </section>
        
        <section className="bg-black min-h-screen px-10 py-6 text-white">
  <h1 className="text-3xl font-bold mb-4">Songs</h1>
  <p className="text-gray-300 mb-8">Songs that are timeless hits.</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <Cards title="Blue Eyes" desp="Yo Yo Honey Singh" image={hs} cat="Party"/>
    <Cards title="Kya Tum Naaraz Ho?" desp="Tanmaya Bhatnagar" image={tb} cat="Melancholy"/>
    <Cards title="Dil Mere" desp="The Local Train" image={tlt} cat="Romantic"/>
    <Cards title="Kasoor" desp="Prateek Kuhad" image={pk} cat="Romantic"/>
    <Cards title="DJ Waley Babu" desp="BadShah" image={b} cat="Party"/>
    <Cards title="TRAP PRAA" desp="Raftaar" image={r} cat="Party"/>
    <Cards title="Dope Shope" desp="Yo Yo Honey Singh" image={hs} cat="Party"/>
    <Cards title="Wishes" desp="Hasan Raheem" image={hr} cat="Melancholy"/>
    
  </div>
   </section>

        <Footer></Footer>
        </>
    );
}
export default Singles