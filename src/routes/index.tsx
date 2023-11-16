import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Errors from "@/pages/Error";
import Navbar from "@/components/custom/Navbar";
import Cs from "@/hooks/Componentswitch";

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/Loadinganimation"
          element={<Cs title="Loadinganimation" />}
        />
        <Route path="*" element={<Errors className="fixed top-0" />} />
      </Routes>
    </>
  );
};

export default Router;
