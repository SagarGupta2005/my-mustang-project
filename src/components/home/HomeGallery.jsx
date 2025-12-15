import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDarkMode } from "../Dark/DarkModeContext";

gsap.registerPlugin(ScrollTrigger);

// Tailwind inline animation helper
const fadeZoomAnimation = `
@keyframes fadeZoom {
  from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeZoom {
  animation: fadeZoom 0.35s ease-out forwards;
}
`;

const HomeGallery = () => {
  const { darkMode } = useDarkMode();
  const galleryRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&auto=format&fit=crop&q=80",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1661771761352-bd446050d5fe?w=800&auto=format&fit=crop&q=80",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1599387737838-660b75526801?w=800&auto=format&fit=crop&q=80",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1682343712218-150d9a074e5e?w=800&auto=format&fit=crop&q=80",
      alt: "Image 4",
    },
  ];

  useEffect(() => {
    const cards = galleryRef.current.querySelectorAll(".gallery-card");

    gsap.from(cards, {
      opacity: 1,
      y: 60,
      duration: 1,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 85%",
      },
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeys = (e) => {
      if (openIndex === null) return;

      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [openIndex]);

  const nextImg = () => setOpenIndex((prev) => (prev + 1) % images.length);
  const prevImg = () => setOpenIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      <style>{fadeZoomAnimation}</style>

      <div className={`overflow-hidden ${darkMode ? "bg-gray-900" : "bg-neutral-900"} transition-colors`}>

        {/* Heading */}
        <div className="text-center py-6 sm:py-16">
          <h2 className="text-4xl sm:text-4xl font-bold text-yellow-100">Gallery</h2>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">Check out our salon work</p>
        </div>

        {/* Image Grid */}
        <div
          ref={galleryRef}
          className="
            grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-2 
    lg:grid-cols-4 
    gap-3 sm:gap-5 
    p-6 
    max-w-6xl 
    mx-auto 
    px-4 sm:px-6
          "
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setOpenIndex(index)}
              className="border-2 border-yellow-400 shadow-md cursor-pointer transform transition-transform hover:scale-105 rounded-2xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-100 object-cover transform transition-transform hover:scale-105 duration-1000"
              />
            </div>
          ))}
        </div>

        {/* Scroll Button */}
        <div className="flex justify-center p-16 ">
          <a href="/Gallery">
            <button
              onClick={handleScrollDown}
              className="bg-yellow-100 text-black font-semibold px-6 py-5 text-xl rounded-xl shadow-lg hover:bg-yellow-400 transition-colors"
            >
              See More
            </button>
          </a>
        </div>

        {/* MODAL */}
        {openIndex !== null && (
        <div
  className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeZoom p-4 sm:p-8"
>
  {/* CLOSE BUTTON */}
  <button
    onClick={() => setOpenIndex(null)}
    className="absolute top-30 right-3 sm:bottom-80 sm:right-6 text-white text-2xl sm:text-3xl font-bold hover:text-gray-300 transition"
    aria-label="Close modal"
  >
    ✕
  </button>

  {/* LEFT BUTTON */}
  <button
    onClick={prevImg}
    className="absolute top-1/2 left-2 sm:left-6 transform -translate-y-1/2 text-white text-3xl sm:text-4xl px-2 py-1 bg-black/40 rounded-full hover:bg-black/70 transition"
    aria-label="Previous image"
  >
    ❮
  </button>

  {/* MODAL CONTAINER */}
  <div className="max-w-[90vw] max-h-[80vh] select-none flex items-center justify-center p-2 sm:p-4 rounded-xl shadow-2xl border border-white bg-black/70">
    <img
      src={images[openIndex].src}
      alt="Opened"
      className="max-w-full max-h-[75vh] object-contain rounded-lg"
    />
  </div>

  {/* RIGHT BUTTON */}
  <button
    onClick={nextImg}
    className="absolute top-1/2 right-2 sm:right-6 transform -translate-y-1/2 text-white text-3xl sm:text-4xl px-2 py-1 bg-black/40 rounded-full hover:bg-black/70 transition"
    aria-label="Next image"
  >
    ❯
  </button>
</div>


        )}

      </div>
    </>
  );
};

export default HomeGallery;
