import { cn } from "@/lib/utils";
import Fullscreen from "@/components/section/Fullscreen";
import { useState, useEffect } from "react";
import Gradienttext from "@/components/custom/Gradienttext";

type propsType = {
  className?: string;
};

const timeLimit = 40;

const Preloader = ({ className }: propsType) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth < 100) {
          return prevWidth + 1;
        } else {
          clearInterval(intervalId);
          return prevWidth;
        }
      });
    }, timeLimit);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div
      className={cn(
        "w-full relative flex justify-center items-center relative",
        className,
      )}
    >
      <div className="w-4/5 h-5 px-1 bg-slate-200 shadow-inner rounded-full flex items-center relative">
        <div
          style={{
            width: width + "%",
          }}
          className="h-4 relative rounded-full bg-slate-400 bg-gradient-to-r from-orange-400 to-rose-400 shadow-inner"
        >
          <div className="w-8 h-8 rounded-tl-full rounded-tr-full rounded-bl-full shadow-inner shadow-md top-[-30px] right-[-14px] rotate-45 flex justify-center items-center bg-slate-200 absolute">
            <Gradienttext className="rotate-[-45deg] bg-gradient-to-r from-orange-400 to-rose-400">
              {width}
            </Gradienttext>
          </div>
        </div>
      </div>
    </div>
  );
};

const Welcomemessage = () => {
  return (
    <Gradienttext className="font-bold text-6xl kenia bg-gradient-to-r from-green-200 to-green-500">
      welcome
    </Gradienttext>
  );
};

const Welcomescreen = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, timeLimit * 150);
  }, []);

  return (
    <Fullscreen className="absolute top-0 bg-gradient-to-tl from-red-500 to-red-600">
      {loaded ? <Welcomemessage /> : <Preloader />}
    </Fullscreen>
  );
};

export default Welcomescreen;
export { Preloader };
