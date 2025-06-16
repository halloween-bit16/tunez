import Footer from "./Footer";
import NavBar from "./NavBar";
import Card from "../components/Card";
import a2 from '../assets/aashiqui2.jpg';
import adhm from '../assets/adhm.jpg';
import barfi from '../assets/barfi.jpg';
import rockstar from '../assets/rockstar.jpg';
import soty from '../assets/soty.jpg';
import yjhd from '../assets/yjhd.jpg';

function Albumns(){
    return(
        <>
        <section className="bg-gradient-to-b from-purple-950 to-black pb-6">
        <NavBar></NavBar>
      </section>

      <section className="bg-black min-h-screen px-10 py-6 text-white">
  <h1 className="text-3xl font-bold mb-4">Albums</h1>
  <p className="text-gray-300 mb-8">Explore latest and most loved albums.</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <Card title="Aashiqui 2" desp="Jeet Gannguli, Mithoon, Ankit Tiwari" image={a2} />
    <Card title="Barfi" desp="Pritam" image={barfi} />
    <Card title="RockStar" desp="A.R. Rahman" image={rockstar} />
    <Card title="Yeh Jawaani Hai Deewani" desp="Pritam" image={yjhd} />
    <Card title="Student of the Year" desp="Vishal-Shekhar" image={soty} />
    <Card title="Ae Dil Hai Mushkil" desp="Pritam" image={adhm} />
  </div>
</section>

        <Footer></Footer>
        </>
    );
}
export default Albumns