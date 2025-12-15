import React from "react";
import { FaInstagram, FaFacebookF, FaSkype, FaTumblr } from "react-icons/fa";
import { useDarkMode } from "../Dark/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={`w-full py-12 select-none overflow-hidden transition-all duration-300 border-t-2 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ----- ABOUT SECTION FOR SALON ----- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#d5b97b]">
            About Our Salon
          </h3>
          <p className="text-sm leading-6 opacity-80">
            We bring out the natural beauty in every client with premium
            products and professional stylists. Relax, refresh, and let our
            experts pamper you.
          </p>
        </div>

        {/* ----- SERVICES ----- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#d5b97b]">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>✦ Hair Styling & Cutting</li>
            <li>✦ Spa & Skin Treatments</li>
            <li>✦ Nail Art & Manicure</li>
            <li>✦ Bridal Makeup</li>
            <li>✦ Hair Coloring</li>
          </ul>
        </div>

        {/* ----- OPENING HOURS ----- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#d5b97b]">
            Opening Hours
          </h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Mon – Fri: 9:00 AM – 8:00 PM</li>
            <li>Saturday: 9:00 AM – 6:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* ----- BOOKING CTA + CONTACT ----- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#d5b97b]">
            Book Your Visit
          </h3>
          <p className="text-sm opacity-80 mb-4">
            Experience luxury and care. Book an appointment now.
          </p>

          <a
            href="/booking"
            className="inline-block px-5 py-2 rounded-full bg-[#d5b97b] text-white hover:bg-[#c7a96a] transition duration-300 text-sm font-semibold"
          >
            Book Appointment
          </a>

          <div className="mt-4 text-sm opacity-90">
            <p>Email: beauty@salon.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>

      {/* ----- SOCIAL + COPYRIGHT BAR ----- */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT TEXT */}
        <p className="text-sm opacity-70">
          © 2025 <span className="font-semibold text-[#d5b97b]">Salon All Rights Reserved</span>
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-5">
          {[
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaTumblr />, link: "#" },
            { icon: <FaFacebookF />, link: "#" },
            { icon: <FaSkype />, link: "#" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-xl transition-all duration-300 ${
                darkMode
                  ? "bg-[#d5b97b] text-white hover:bg-[#c7a96a]"
                  : "bg-[#d5b97b] text-white hover:bg-[#c7a96a]"
              }`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* RIGHT TEXT */}
        <p className="text-sm opacity-70">
          Crafted by <span className="font-bold text-[#d5b97b]">Tfp</span> Beauty Tech
        </p>
      </div>
    </footer>
  );
};

export default Footer;
