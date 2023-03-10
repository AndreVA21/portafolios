import LineGradient from "../../components/LineGradient";
import { motion } from "framer-motion";

function Certifications() {
  return (
    <div className="pt-32 pb-16 bg-black text-white px-10">
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-main-red">
          Certifications
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          I am proud to hold several certifications that demonstrate my
          expertise in web development and programming with JavaScript. I have
          completed the "Introducción a la Programación con JavaScript" course,
          which provided me with a strong foundation in the language and its
          syntax. Additionally, I have completed the "Introduction to Web
          Development Course: HTML y CSS" series, which has equipped me with the
          necessary skills to create dynamic and visually appealing web pages.
        </p>
      </motion.div>
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-main-purple max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex place-content-center">
            <img className="object-fill h-22 w-40" src="/udemy.png" alt="" />
          </div>
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Introducción a la Programación con JavaScript.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-main-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex place-content-center">
            <img
              className="object-fill h-28 w-40 pb-5"
              src="/udemy.png"
              alt=""
            />
          </div>
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Angular University - From Zero to Expert in Angular!
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-main-slate max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex place-content-center">
            <img className="object-fill h-20 w-20" src="/google.png" alt="" />
          </div>
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Introduction to Web Development Course: HTML y CSS (1/2)-(2/2)
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Certifications;
