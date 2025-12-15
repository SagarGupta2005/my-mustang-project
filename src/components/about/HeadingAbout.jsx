import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HeadingAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="bg-black "
    >
      <div
        className="relative flex justify-center items-center py-42 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/tlSGcVswBE0Wf43Vnby9RsVMBGg.png?width=1536&height=1024')",
        }}
      >
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-black/92"></div>

        <h1 className="relative text-4xl md:text-5xl font-extrabold text-yellow-100 drop-shadow-lg">
          ABOUT US
        </h1>
      </div>
    </motion.div>
  );
};

export default HeadingAbout;
