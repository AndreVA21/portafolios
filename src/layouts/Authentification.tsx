import { Outlet } from "react-router-dom";

function Authentification() {
  return (
    <div className="flex">
      <div className="bg-blue-600 w-screen">Authentification</div>
      <div className="bg-green-500 w-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default Authentification;
