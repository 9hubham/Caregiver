import { motion } from "framer-motion";

function TargetPage() {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h1>Target Page</h1>
    </motion.div>
  );
}
export default TargetPage;
