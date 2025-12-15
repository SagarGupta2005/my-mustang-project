import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      drag
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-20
        right-6
        z-40
        flex
        items-center
        justify-center
      "
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
    >
      <div
        className="
          bg-neutral-700
          text-white
          px-5
          py-3
          rounded-2xl
          shadow-lg
          flex
          items-center
          justify-center
          text-lg
          font-semibold
          cursor-pointer
          select-none
          whitespace-nowrap
        "
      >
        Appointments
      </div>
    </motion.a>
  );
}
