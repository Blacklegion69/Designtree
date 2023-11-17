import { cn } from "@/lib/utils";
import Gradienttext from "@/components/custom/Gradienttext";
import Fullscreen from "@/components/section/Fullscreen";

type propsType = {
  className?: string;
};

const Loaders = ({ className }: propsType) => {
  return (
    <div
      className={cn(
        "w-full min-h-screen md:grid md:grid-cols-2 gap-y-6 relative flex justify-center items-center flex-col",
        className,
      )}
    >
      <Fullscreen>
        <div className="animate-spin p-32 border-t-slate-900 border-b-slate-900 rounded border-8 border-transparent rounded-full"></div>
        <Gradienttext className="absolute font-bold text-3xl">
          Animation-1
        </Gradienttext>
      </Fullscreen>

      <Fullscreen>
        <div className="animate-spin p-28 border-[50px] border-b-slate-900 rounded-full"></div>
        <Gradienttext className="absolute font-bold text-2xl">
          Animation-2
        </Gradienttext>
      </Fullscreen>

      <Fullscreen className="h-[350px] flex-col">
        <div className="animate-ping delay-200 absolute border-8 border-cyan-500 bg-cyan-600 p-20 rounded-full"></div>
        <div className="animate-ping delay-150 absolute border-8 border-cyan-500 bg-cyan-600 p-16 rounded-full"></div>
        <div className="animate-ping delay-100 absolute border-8 border-cyan-500 bg-cyan-600 p-12 rounded-full"></div>
        <div className="animate-ping delay-75 absolute border-8 border-cyan-500 bg-cyan-600 p-8 rounded-full"></div>
        <div className="animate-ping delay-0 absolute border-8 border-cyan-500 bg-cyan-600 p-4 rounded-full"></div>
        <Gradienttext className="font-bold z-30 text-2xl">
          Animation-3
        </Gradienttext>
      </Fullscreen>

      <Fullscreen className="flex-col">
        <div className="flex gap-x-2 justify-center items-center">
          <div className="animate-bounce delay-0 p-2 rounded-full bg-slate-900"></div>
          <div className="animate-bounce delay-75 p-2 rounded-full bg-slate-900"></div>
          <div className="animate-bounce delay-100 p-2 rounded-full bg-slate-900"></div>
          <div className="animate-bounce delay-150 p-2 rounded-full bg-slate-900"></div>
          <div className="animate-bounce delay-200 p-2 rounded-full bg-slate-900"></div>
          <div className="animate-bounce delay-300 p-2 rounded-full bg-slate-900"></div>
        </div>
        <Gradienttext>Animation-4</Gradienttext>
      </Fullscreen>
    </div>
  );
};

const Loadinganimation = () => {
  return (
    <div className="w-full py-16 overflow-hidden absolute top-0 min-h-screen bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 flex flex-col justify-center items-center ">
      <Loaders />
    </div>
  );
};

export default Loadinganimation;
export { Loaders };
