import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import MySkills from "../pages/Skills";
import Certifications from "../pages/Certifications";
import Contact from "../pages/Contact";

const GenericRoutes = {
  children: [
    {
      path: "",
      element: (
        <Navbar>
          <Home />
        </Navbar>
      ),
    },
    {
      path: "/about",
      element: (
        <Navbar>
          <About />
        </Navbar>
      ),
    },
    {
      path: "/skills",
      element: (
        <Navbar>
          <MySkills />
        </Navbar>
      ),
    },

    {
      path: "/certifications",
      element: (
        <Navbar>
          <Certifications />
        </Navbar>
      ),
    },
    {
      path: "/contact",
      element: (
        <Navbar>
          <Contact />
        </Navbar>
      ),
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ],
};

export default GenericRoutes;
