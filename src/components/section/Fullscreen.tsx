import React from "react";
import { cn } from "@/lib/utils";

type propsType = {
  className?: string;
  children: React.ReactNode;
};

const Fullscreen = ({ children, className }: propsType) => {
  return (
    <div
      className={cn(
        "w-full min-h-screen flex justify-center items-center relative",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Fullscreen;
