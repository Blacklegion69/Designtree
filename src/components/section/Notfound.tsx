import Gradienttext from "@/components/custom/Gradienttext";
import { cn } from "@/lib/utils";

type propsType = {
  className?: string;
};

const Notfound = ({ className }: propsType) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center flex-col relative",
        className,
      )}
    >
      <Gradienttext className="text-8xl bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 kenia">
        404
      </Gradienttext>
      <Gradienttext className="bg-gradient-to-r from-green-200 via-green-400 to-green-500">
        ××××××××××××××××
      </Gradienttext>
      <div className="underline text-center decoration-orange-500 decoration-wavy decoration-1 text-2xl text-yellow-200">
        Page not found
      </div>
    </div>
  );
};

export default Notfound;
