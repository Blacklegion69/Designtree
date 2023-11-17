import Loadinganimation, {
  Loaders,
} from "@/components/projects/Loadinganimation";
import { useParams } from "react-router-dom";
import Welcomescreen, { Preloader } from "@/components/projects/Welcomescreen";
import Gradientgenerator from "@/components/projects/Gradientgenerator";

import Notfound from "@/components/section/Notfound";
import Errors from "@/pages/Error";

type propsType = {
  title?: string;
  className?: string;
};

const Componentswitch = ({ className, title }: propsType) => {
  const { id } = useParams();
  const project = title
    ? title.toLowerCase()
    : id
    ? id.toLowerCase()
    : "undefined";

  switch (project) {
    case "loadinganimation":
      return <Loadinganimation />;
    case "loaders":
      return <Loaders className={className} />;
    case "welcomescreen":
      return <Welcomescreen />;
    case "preloader":
      return <Preloader className={className} />;
    case "gradientgenerator":
      return <Gradientgenerator className={className + "w-full"} />;
    default:
      if (title) {
        return (
          <Notfound className="bg-slate-800 p-2 rounded scale-x-[0.6] scale-y-[0.5]" />
        );
      } else {
        return <Errors />;
      }
  }
};

export default Componentswitch;
