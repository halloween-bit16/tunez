import Footer from "./Footer";
import NavBar from "./NavBar";
import { Instagram, Twitter, Spotify } from 'lucide-react';

function Contact() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-800 to-black min-h-screen">
        <NavBar />

        <div className="text-center text-white py-10">
          <h1 className="text-4xl md:text-3xl font-bold mb-2">Get in Touch</h1>
          <p className="text-lg md:text-base text-gray-300">Have a query, request or feedback? We’d love to hear from you.</p>
        </div>

        <form className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg space-y-4 text-white">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500" placeholder="Your Name" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea rows="4" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500" placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded font-semibold">Send</button>
        </form>

        <div className="text-center text-gray-300 mt-6">
          <p>Email: support@tunez.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Based in: Bengaluru, India</p>
        </div>

        <div className="text-center text-white mt-8 flex justify-center space-x-8">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
          <a href="https://spotify.com" target="_blank" rel="noreferrer">
            <Spotify />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;