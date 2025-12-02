"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGamepad,
  FaTwitch,
  FaDesktop,
  FaUsers,
  FaYoutube,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

// ===========================
// Data
// ===========================
const features = [
  {
    title: "Epic Game Highlights",
    desc: "Thrilling moments from Aria Keoxer's gameplay.",
    icon: <FaGamepad size={40} />,
  },
  {
    title: "Live Streams",
    desc: "Catch live action on Twitch and YouTube.",
    icon: <FaTwitch size={40} />,
  },
  {
    title: "Community Hub",
    desc: "Join Discord and connect with gamers.",
    icon: <FaUsers size={40} />,
  },
];

const stats = [
  { label: "Games Played", value: "120+" },
  { label: "Live Streams", value: "85+" },
  { label: "Awards Won", value: "15" },
  { label: "Community Members", value: "10k+" },
];

const setups = [
  {
    type: "PC",
    specs: ["Intel i9-13900K", "RTX 4090", "64GB RAM", "2TB SSD"],
    icon: <FaDesktop size={40} />,
  },
  {
    type: "Consoles",
    specs: ["PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    icon: <FaGamepad size={40} />,
  },
];

const sponsors = [
  {
    name: "Razer",
    logo: "https://www.pngplay.com/wp-content/uploads/13/Razer-Logo-Transparent-PNG.png",
  },
  {
    name: "Logitech",
    logo: "https://logodownload.org/wp-content/uploads/2018/03/logitech-logo.png",
  },
  {
    name: "Coca-Cola",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png",
  },
  {
    name: "PlayStation",
    logo: "https://www.pngall.com/wp-content/uploads/13/PlayStation-Logo-1.png",
  },
];

// ===========================
// Main Component
// ===========================
export default function AriaKeoxerPlatform() {
  return (
    <div className="relative bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
      {/* =========================== */}
      {/* Hero Section */}
      {/* =========================== */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            width={1000}
            height={1000}
            src="https://yourimageshare.com/ib/kuSpLDEk45.jpg"
            alt="Aria Keoxer Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Radial Pulse Animations */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,#ff00ff66,transparent)] animate-[pulse_6s_linear_infinite]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle,#00ffff66,transparent)] animate-[pulse_8s_linear_infinite]"></div>
        </div>

        {/* Glitch Title */}
        <motion.h1
          className="relative text-6xl md:text-8xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-blue-400 glitch z-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Aria Keoxer
        </motion.h1>

        {/* Neon Subtitle */}
        <motion.p
          className="relative text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl neon-text z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Full-fledged gaming platform with epic highlights, live streams, and a
          vibrant community.
        </motion.p>

        {/* Hero Promo Image */}

        {/* Call to Action */}
        <motion.a
          href="#features"
          className="mt-8 px-8 py-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500 font-bold text-black hover:scale-105 transition-transform z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Explore Features
        </motion.a>
      </section>

      {/* =========================== */}
      {/* Features Section */}
      {/* =========================== */}
      <section
        id="features"
        className="relative z-10 py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12"
      >
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-xl border border-purple-600 bg-[#111126] hover:shadow-[0_0_30px_rgba(128,0,255,0.7)] transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* =========================== */}
      {/* Stats Section */}
      {/* =========================== */}
      <section className="relative z-10 py-24 px-6 bg-[#111126] text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Achievements</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl border border-purple-600 hover:shadow-[0_0_30px_rgba(255,0,255,0.7)] transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">{s.value}</div>
              <div className="text-gray-300">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================== */}
      {/* Pro Gaming Setup Section */}
      {/* =========================== */}
      <section className="relative z-10 py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Pro Gaming Setup
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {setups.map((setup, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl border border-purple-600 bg-[#111126] hover:shadow-[0_0_30px_rgba(255,0,255,0.7)] transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="mb-4">{setup.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{setup.type}</h3>
              <ul className="text-gray-300 list-disc list-inside">
                {setup.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================== */}
      {/* Sponsors Section */}
      {/* =========================== */}
      <section className="relative z-10 py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Partners & Sponsors
        </h2>
        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto items-center">
          {sponsors.map((s, idx) => (
            <motion.div
              key={idx}
              className="p-4 bg-[#111126] rounded-xl border border-purple-600 hover:shadow-[0_0_25px_rgba(128,0,255,0.7)] transition-shadow flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="h-20 w-40 flex justify-center items-center">
                <Image
                width={1000}
                height={1000}
                  src={s.logo}
                  alt={s.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================== */}
      {/* Community Section */}
      {/* =========================== */}
      <section className="relative z-10 py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Join the Aria Keoxer Community
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
          Connect with fans, share highlights, and subscribe to the newsletter
          for latest updates.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://discord.com/invite/keoxer"
            className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors font-bold"
          >
            Join Discord
          </a>
          <a
            href="https://www.youtube.com/@AriaKeoXer"
            className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors font-bold"
          >
            Subscribe
          </a>
        </div>
      </section>

      {/* =========================== */}
      {/* Footer */}
      {/* =========================== */}
      <footer className="relative z-10 py-12 text-center text-gray-400 border-t border-gray-700">
        <div className="mb-4 font-bold text-xl text-white">Aria Keoxer</div>
        <div className="flex justify-center gap-6 mb-4 text-2xl">
          <a href="https://www.youtube.com/@AriaKeoXer" target="blank" className="hover:text-red-600 transition-colors">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/keoxer/" target="blank" className="hover:text-pink-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://discord.com/invite/keoxer" target="blank" className="hover:text-blue-400 transition-colors">
            <FaDiscord />
          </a>
        </div>
        &copy; {new Date().getFullYear()} Aria Keoxer Gaming Hub. All rights
        reserved.
      </footer>

      {/* =========================== */}
      {/* Styles */}
      {/* =========================== */}
      <style jsx>{`
        .glitch {
          position: relative;
          color: white;
        }
        .glitch::before,
        .glitch::after {
          content: "Aria Keoxer";
          position: absolute;
          left: 0;
          width: 100%;
          opacity: 0.8;
        }
        .glitch::before {
          animation: glitchTop 1s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
          color: #00ffff;
        }
        .glitch::after {
          animation: glitchBottom 1s infinite linear alternate-reverse;
          clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
          color: #ff00ff;
        }
        @keyframes glitchTop {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, -2px);
          }
          40% {
            transform: translate(-2px, 2px);
          }
          60% {
            transform: translate(2px, -2px);
          }
          80% {
            transform: translate(2px, 2px);
          }
          100% {
            transform: translate(0);
          }
        }
        @keyframes glitchBottom {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(2px, 2px);
          }
          40% {
            transform: translate(2px, -2px);
          }
          60% {
            transform: translate(-2px, 2px);
          }
          80% {
            transform: translate(-2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
        .neon-text {
          color: #fff;
          text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff,
            0 0 40px #ff00ff;
        }
      `}</style>
    </div>
  );
}
