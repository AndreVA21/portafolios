import { FC, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

import EmailSender from "./components/email";

function Home() {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [openEmail, setopenEmail] = useState(false);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className=" w-screen h-screen bg-slate-200">
      <div className=" bg-black pt-40">
        {isAboveLarge ? (
          <div className="container my-auto px-40 py-12 flex content-around">
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-white w-2/3 space-y-8"
            >
              <motion.li
                variants={item}
                className="sm:inline-block bg-main-purple rounded p-2 border-2 font-bold"
              >
                <p>Welcome to my Portfolio</p>
              </motion.li>
              <motion.li variants={item} className=" text-4xl font-bold">
                <p>Hi! I'm Andre</p>
              </motion.li>
              <motion.li variants={item}>
                <p>
                  I'm eager to showcase my skills and projects that I've worked
                  on. I'm a recent graduate from a coding bootcamp and have been
                  honing my skills in web development ever since. My passion
                  lies in creating user-friendly and responsive web applications
                  that improve people's lives.
                </p>
              </motion.li>
              <motion.li
                variants={item}
                className="font-bold text-xl flex justify-start"
              >
                <div className=" flex justify-center space-x-3">
                  <p className="pt-5">Lets Connect</p>

                  <div
                    className=" bg-gray-700"
                    onClick={() => setopenEmail(!openEmail)}
                  ></div>
                </div>
              </motion.li>
            </motion.ul>
            <div className=" bg-black w-4/5 flex justify-center">
              <img
                className="content-center w-96"
                src="./public/logo.png"
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className="container my-auto px-16 py-12 text-center">
            <div className=" bg-black w-4/5 flex justify-center">
              <img
                className="content-center w-96"
                src="./public/logo.png"
                alt=""
              />
            </div>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-white w-2/3 space-y-8"
            >
              <motion.li
                variants={item}
                className="sm:inline-block bg-main-purple rounded p-2 border-2 font-bold"
              >
                <p>Welcome to my Portfolio</p>
              </motion.li>
              <motion.li variants={item} className=" text-4xl font-bold">
                <p>Hi! I'm Andre</p>
              </motion.li>
              <motion.li variants={item}>
                <p>
                  I'm eager to showcase my skills and projects that I've worked
                  on. I'm a recent graduate from a coding bootcamp and have been
                  honing my skills in web development ever since. My passion
                  lies in creating user-friendly and responsive web applications
                  that improve people's lives.
                </p>
              </motion.li>
              <motion.li
                variants={item}
                className="font-bold text-xl flex justify-start"
              >
                <div className=" flex justify-center space-x-3">
                  <p className="pt-5">Lets Connect</p>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        )}
      </div>
      <div className="flex justify-center pt-10">
        <div className="sm:inline-block px-5 font-extrabold">
          © 2023 Copyright
        </div>
      </div>
    </div>
  );
}

export default Home;
