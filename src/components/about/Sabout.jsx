import React from "react";
import { useDarkMode } from "../Dark/DarkModeContext";

const services = [
  {
    title: "Hair Cutting & Styling",
    description:
      "Hair styling and hair cutting for both men and women. Get hair cut done from our hair director, creative consultant or regular haircut.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/boy",
  },
  {
    title: "Hair Coloring & Treatment",
    description:
      "Different types of hair coloring for men and women. Keratin treatment, hair rebonding, oil treatment, hair refilling, hair fall treatment and more.",
    image:
      "https://images.unsplash.com/photo-1617391654484-2894196c2cc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/women",
  },
  {
    title: "Face Treatment",
    description:
      "Different types of facials and bleaching for both men and women. Luxury facials and cleansups to enhance your face’s natural glow.",
    image:
      "https://plus.unsplash.com/premium_photo-1661255395799-a300794397fb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/boy",
  },
  {
    title: "Body Massages & Treatment",
    description:
      "Head, face, neck, shoulder, leg, foot and full body massages for both men and women. Swedish massage, Thai massage and more.",
    image:
      "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/women",
  },
  {
    title: "Waxing & Threading",
    description:
      "All kinds of waxing including arms, underarms, legs, full body, bikini, and more. Eyebrow, upper lip, lower lip, chin, nostrils, and full face.",
    image:
      "https://plus.unsplash.com/premium_photo-1661431392914-e3fc8ff0e51a?q=80&w=1308&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/women",
  },
  {
    title: "Bridal Make Up",
    description:
      "Bridal HD makeover, Airbrush makeover, full coverage, half coverage, saree drape – simple, silk or heavy, single line and Batik eyelash and more.",
    image:
      "https://images.unsplash.com/photo-1550005869-5fca7db35ddb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/women",
  },
  {
    title: "Feet Care",
    description:
      "Different types of pedicure including Taffi Coffee, Crystal, Derma infusion, Snow White, Pedicure Rose, Mandarin Mango and more.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/women",
  },
  {
    title: "Nail Care",
    description:
      "Nail paint and polish, nail cutting and filing, gel paint application and removal, 3D nail art, bridal nail art, nail extensions, glitter extensions, etc.",
    image:
      "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/women",
  },
];

const Sabout = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      className="h-full w-full bg-cover bg-center bg-no-repeat select-none transition-colors duration-500"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664048713305-cccf42f0b5b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,

      }}
    >
      {/* Overlay for better readability */}
      <div className="h-full w-full py-16 max-w-7xl mx-auto rounded-xl transition-colors duration-500">
        <h2
          className={`text-center text-3xl font-semibold mb-2 pb-20 hover:underline decoration-yellow-100 transition-colors duration-500 ${
            darkMode ? "text-yellow-900" : "text-yellow-900"
          }`}
        >
          Top Services
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          {services.map(({ title, description, image, link }, i) => (
            <a
              key={i}
              href={link}
              className="flex flex-col border-2 border-green-400 items-center gap-5 p-6 bg-green-900/20 rounded-3xl transition hover:scale-105 duration-300"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-90 shrink object-cover rounded-2xl"
              />
              <div
                className={`text-xs sm:text-sm text-center transition-colors duration-500 ${
                  darkMode ? "text-gray-300" : "text-white"
                }`}
              >
                <h3 className="font-extrabold mb-2 text-lg sm:text-2xl">{title}</h3>
                <p>{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sabout;
