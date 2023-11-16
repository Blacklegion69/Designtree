import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Notfound from "@/components/section/Notfound";
import Gradienttext from "@/components/custom/Gradienttext";

type propsType = {
  className?: string;
};
const Error = ({ className }: propsType) => {
  return (
    <div
      className={cn(
        "w-full flex-col min-h-screen bg-gradient-to-b from-gray-700 via-gray-800 via-gray-900 to-black flex justify-center items-center",
        className,
      )}
    >
      <Notfound />
      <Link
        className="fixed active:bg-gray-100 bottom-10 border border-slate-100 px-2 rounded"
        to="/"
      >
        <Gradienttext className="text-2xl bg-gradient-to-r from-rose-400 via-rose-400 via-gray-900 via-orange-300 to-orange-300">
          Go back to home
        </Gradienttext>
      </Link>
    </div>
  );
};

export default Error;
