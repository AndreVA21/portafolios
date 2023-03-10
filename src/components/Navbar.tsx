import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import LinkTo from "./LinksTo";
import { motion } from "framer-motion";

interface IProps {
  children: JSX.Element;
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function Navbar({ children }: IProps): JSX.Element {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className=" w-screen bg-black fixed z-50">
          <div>
            <ul className="flex justify-around">
              <li className="sm:inline-block">
                <Link to="/" relative="path">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className=" grid content-center hover:cursor-pointer"
                  >
                    <img
                      className="rounded-3xl w-12 pt-4 border-2"
                      src="./public/logo.png"
                      alt="A color cyan (imagen de inicio)"
                    />
                  </motion.div>
                </Link>
              </li>
              <li>
                {isAboveLarge ? (
                  <motion.div>
                    <div className="sm:inline-block block justify-around text-slate-200">
                      <LinkTo to="/about" message="About" />
                      <LinkTo to="/skills" message="Skills" />
                      <LinkTo to="/certifications" message="Certifications" />
                    </div>
                    <div className="sm:inline-block">
                      <div className="p-2">
                        <Link to="/contact" relative="path">
                          <motion.button
                            whileHover={{
                              scale: 1.1,
                              background: "#0088c5",
                              transition: { duration: 0.5 },
                            }}
                            initial={{ background: "#2cb7b9" }}
                            className="bg-#2cb7b9 rounded-2xl p-2 px-4 text-white"
                          >
                            Contact
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <svg
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                )}
                {!isAboveLarge && isOpen && (
                  <motion.div
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                  >
                    <div className=" text-slate-200 h-screen inline-block align-middle">
                      <LinkTo to="/about" message="About" />
                      <LinkTo to="/skills" message="Skills" />
                      <LinkTo to="/certifications" message="Certifications" />
                    </div>
                    <div className="sm:inline-block">
                      <div className="p-2">
                        <Link to="/contact" relative="path">
                          <motion.button
                            whileHover={{
                              scale: 1.1,
                              background: "#0088c5",
                              transition: { duration: 0.5 },
                            }}
                            initial={{ background: "#2cb7b9" }}
                            className="bg-#2cb7b9 rounded-2xl p-2 px-4 text-white"
                          >
                            Contact
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default Navbar;
