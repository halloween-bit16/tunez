import NavBar from "./NavBar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-bl from-purple-900 via-blue-800 via-indigo-800 to-black min-h-screen overflow-hidden">

        {/* Floating Music Notes */}
        <div className="fixed inset-0 overflow-hidden -z-10">
          <div className="w-full h-full relative">
            {[...Array(30)].map((_, i) => {
              const top = `${Math.random() * 100}vh`;
              const left = `${Math.random() * 100}vw`;
              const rotate = `rotate(${Math.random() * 360}deg)`;
              return (
                <span
                  key={i}
                  className="text-blue-300 opacity-20 text-5xl absolute animate-floatSlow"
                  style={{ top, left, transform: rotate }}
                >
                  🎵
                </span>
              );
            })}
          </div>
        </div>

        <NavBar />

        <div className="flex flex-col justify-center items-center text-center min-h-screen">
          <h1 className="text-white text-6xl font-bold mb-3">Music. Magic.</h1>
          <h3 className="text-white text-2xl my-4">Find tunes that match your vibe.</h3>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
