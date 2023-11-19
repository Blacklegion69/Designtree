import { Button } from "@/components/ui/button";
import Gradienttext from "@/components/custom/Gradienttext";
import { cn } from "@/lib/utils";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { useRef, useState, useEffect } from "react";

type propsType = {
  text?: string;
  className?: string;
  label?: string;
};
const Copy = ({ text, className, label }: propsType) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      console.log(textAreaRef.current);
      document.execCommand("copy");
      setIsCopied(true);
      // Optionally, you can show a notification or perform any other action after copying.
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  }, [isCopied]);

  return (
    <>
      <textarea
        ref={textAreaRef}
        value={text}
        readOnly
        style={{ position: "absolute", left: "-9999px" }}
      />
      <Button onClick={handleCopyClick} className={cn("", className)}>
        <Gradienttext
          className={cn(
            "flex justify-center gap-1 items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-500 via-neutral-400 to-orange-500",
            label,
          )}
        >
          {isCopied ? (
            "Copied"
          ) : (
            <>
              {" "}
              <ClipboardCopyIcon style={{ color: "#c1c1c1" }} />
              Copy{" "}
            </>
          )}
        </Gradienttext>
      </Button>
    </>
  );
};

export default Copy;
