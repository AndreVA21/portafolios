import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface IProps {
  to: string;
  message: string;
}

const LinkTo = ({ to, message }: IProps) => {
  return (
    <Link to={to} relative="path">
      <motion.div
        whileHover={{ scale: 1.07, color: "#2cb7b9" }}
        className="sm:inline-block p-4 hover:cursor-pointer"
      >
        {message}
      </motion.div>
    </Link>
  );
};

export default LinkTo;
