import Authentification from "../layouts/Authentification";
import Login from "../pages/Home";

const AuthentificationRouter = {
  path: "/login",
  //element: <Authentification/>,
  children: [
    {
      path: "",
      element: <Login />,
    },
  ],
};

export default AuthentificationRouter;
