import { Link } from "react-router-dom";

import Gradienttext from "@/components/custom/Gradienttext";
import Componentswitch from "@/hooks/Componentswitch";

type propsType = {
  title?: string;
  date?: string;
  path?: string;
  show?: string;
};

const Listitem = ({
  show = "error",
  date,
  path = "error",
  title = "nan",
}: propsType) => {
  return (
    <Link
      to={"/" + path}
      className="w-full shadow-inner hover:shadow-md flex justify-around items-center rounded my-1 p-1 bg-slate-200"
    >
      <div className="overflow-hidden w-[100px] relative z-[2] shadow-inner h-[100px] bg-gradient-to-tl from-gray-200 via-gray-400 to-gray-600 rounded flex relative justify-center items-center">
        <Componentswitch
          className="p-2 rounded scale-[0.15]"
          title={show.toUpperCase()}
        />
      </div>
      <div className="w-[60%] font-bold flex justify-center flex-col gap-y-2">
        <div className="bg-slate-700 px-2 rounded">
          <Gradienttext className="text-2xl lexend py-1 font-bold bg-gradient-to-r from-[#ffc500] via-[#fff0f0] to-[#ffc500]">
            {title || "Reactjs project"}
          </Gradienttext>
        </div>
        <Gradienttext className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
          {date || "04/11/2023, 01:39:07"}
        </Gradienttext>
      </div>
    </Link>
  );
};

export default Listitem;
