import { blogList } from "./components/blog-list.js";
import { motion, Variants } from "framer-motion";

interface IProps {
  image: string;
  h2: string;
  p: string;
  id?: string;
}

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

function Card({ image, h2, p, id }: IProps) {
  return (
    <motion.div
      className=" pt-44 md:text-2xl  text-lg space-y-9 text-center p-10 md:p-64 text-white bg-black"
      id={id}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div
        className=" flex place-content-center"
        variants={imageAnimate}
      >
        <img className="object-cover h-48 w-96" src={image} alt="" />
      </motion.div>
      <motion.h2 className="md:text-4xl text-2xl" variants={textAnimate}>
        {h2}
      </motion.h2>
      <motion.p variants={textAnimate}>{p}</motion.p>
    </motion.div>
  );
}

function About() {
  return blogList.map((item, index) => (
    <div className="card-wrapper" key={index}>
      <Card image={item.image} h2={item.h2} p={item.p} />
    </div>
  ));
}

export default About;
