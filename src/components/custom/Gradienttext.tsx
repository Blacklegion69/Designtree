import React from "react";
import { cn } from "@/lib/utils";

type propsType = {
  children?: React.ReactNode;
  className?: string;
};

const Gradienttext = ({ children, className }: propsType) => {
  return (
    <div
      className={cn(
        "grad bg-gradient-to-r from-gray-500 via-gray-900 to-black",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Gradienttext;
