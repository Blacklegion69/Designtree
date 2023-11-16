import Loadinganimation, {
  Loaders,
} from "@/components/projects/Loadinganimation";
import Notfound from "@/components/section/Notfound";
// import { cn } from "@/lib/utils";

type propsType = {
  title?: string;
  className?: string;
};

const Componentswitch = ({ className, title = "error" }: propsType) => {
  const project = title.toUpperCase();
  switch (project) {
    case "LOADINGANIMATION":
      return <Loadinganimation />;
    case "LOADERS":
      return <Loaders className={className} />;
    default:
      return (
        <Notfound className="bg-slate-800 p-2 rounded scale-x-[0.6] scale-y-[0.5]" />
      );
  }
};

export default Componentswitch;
