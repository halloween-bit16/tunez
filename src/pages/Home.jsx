import NavBar from "./NavBar";
import Footer from "./Footer";
import Card from "../components/Card";
import img1 from '../assets/898ac0966581ad055d794ec0701a1bab.jpg'
import img2 from '../assets/953f41731ccf5c84bf4e28a844b8ae78.jpg'
import img3 from '../assets/eded77bb9363a7d374c01ed96adb7f8b.jpg'

function Home() {
  return (
    <>
      <section className="bg-gradient-to-bl from-purple-900 via-blue-800 via-indigo-800 to-black min-h-screen">
        <NavBar />

        <div className="flex flex-col justify-center items-center text-center h-[70vh]">
          <h1 className="text-white text-4xl font-bold mb-2">Music. Magic.</h1>
          <h3 className="text-white text-xl my-4">
            Find tunes that match your vibe.
          </h3>
        </div>
      </section>

      <section className="bg-gray-950 py-10">
        <div className="px-10">
          <h1 className="text-white font-bold text-3xl mb-7">
            Top Categories
          </h1>
        </div>

        <div className="bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10">
          <Card
            title="Romance in the Air"
            desp="Uske liye yeh jhumke sahi rahenge?"
            image={img1}
          />
          <Card
            title="Party All Night"
            desp="2010 Bollywood House party? Count me in!"
            image={img2}
          />
          <Card
            title="Melancholy"
            desp="Arjit Singh baja do yaar..."
            image={img3}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
