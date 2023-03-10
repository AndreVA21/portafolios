import LineGradient from "../../components/LineGradient";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

function MySkills() {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="md:h-screen pt-1 pb-18 bg-black text-white">
      <div className="md:flex md:justify-between md:gap-16 mt-32 p-11 bg-slate-600">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl">
            MY <span className=" text-main-cyan">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I have knowledge in different technologies and languages ​of
            programming, my greatest knowledge goes between Typescript, React,
            java, python
          </p>
        </motion.div>

        <div className="mt-16">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="object-cover h-36 w-80 z-10"
                src="./public/skills.jpg"
              />
            </div>
          ) : (
            <img
              alt="skills"
              className="object-cover h-36 w-80 z-10"
              src="./public/skills.jpg"
            />
          )}
        </div>
      </div>
      <div className="md:flex md:justify-around mt-16 gap-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-28">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <div className="w-1/2 md:w-3/4 h-32 bg-main-typescript absolute right-0 top-0" />
              <p className="font-playfair font-semibold text-3xl mt-3 absolute">
                TypeScript
              </p>
            </div>
          </div>
          <p className="mt-5">
            TypeScript is an object-oriented programming language, and it's
            essential to understand concepts like classes, objects, inheritance,
            and interfaces.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-28">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <div className="w-1/2 md:w-3/4 h-32 bg-main-red absolute right-0 top-0" />
              <p className="font-playfair font-semibold text-3xl mt-3 absolute">
                java
              </p>
            </div>
          </div>
          <p className="mt-5">
            concepts, control structures, arrays, loops, and methods. You should
            also be familiar with object-oriented programming (OOP) concepts,
            such as inheritance, polymorphism, encapsulation, and abstraction.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-28">
            <div className="z-20">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <div className="w-1/2 md:w-3/4 h-32 bg-gradient-to-t from-main-yellow to-main-blue   absolute right-0 top-0 " />
              <p className="font-playfair font-semibold text-3xl mt-3 absolute">
                Python
              </p>
            </div>
          </div>
          <p className="mt-5">
            As a medium-level Python developer, i know have some experience with
            data analysis and manipulation using libraries such as NumPy,
            Pandas, and Matplotlib.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MySkills;
