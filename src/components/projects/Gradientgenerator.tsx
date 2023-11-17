import Fullscreen from "@/components/section/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

type propsType = {
  className?: string;
};

interface gradientType {
  id: string;
  color: string;
}

const Gradientgenerator = ({ className }: propsType) => {
  const [color, setColor] = useState("#ffffff");
  const [gradient, setGradient] = useState<gradientType[]>([
    {
      id: "0b8546c5-2f77-4c13-be59-1ce7717605a8",
      color: "#ff00f2",
    },
    {
      id: "e1156cfa-42c6-40b9-a185-a3248ddd8006",
      color: "#ff0000",
    },
    {
      id: "3eb2c4bb-6a02-432d-b51f-5b92780eaded",
      color: "#f6ff00",
    },
  ]);
  const [background, setBackground] = useState(
    "-webkit-linear-gradient(45deg, #ff00f2,#ff0000,#f6ff00)",
  );
  const [rotation, setRotation] = useState<number>(45);

  const handleColor = (e: any) => {
    setColor(e.target.value);
  };

  const handleColorvalue = (e: any) => {
    setColor(e.target.value);
  };

  const handleAdd = () => {
    setGradient([...gradient, { id: crypto.randomUUID(), color }]);
  };

  const handleColorDelete = (colorid: string) => {
    const filtered = gradient.filter((color) => {
      return color.id !== colorid;
    });
    setGradient(filtered);
  };

  const handleRotation = (e: any) => {
    setRotation(e);
  };

  useEffect(() => {
    let code = "-webkit-linear-gradient(" + rotation + "deg";
    for (let i = 0; i < gradient.length; i++) {
      code += gradient[i].color.replace("#", ",#");
    }
    const final = code + ")";
    setBackground(final);
  }, [color, gradient, rotation]);

  return (
    <Fullscreen
      className={cn(
        "flex-col absolute overflow-hidden top-0 bg-gradient-to-tl from-pink-300 via-red-300 to-yellow-300",
        className,
      )}
    >
      <div
        style={{
          background,
        }}
        className="w-4/5 h-16 rounded shadow-md"
      ></div>
      <Gradienttext className="w-4/5 flex justify-center items-center flex-wrap overflow-y-scroll p-2 text-xs my-2">
        {/* background.split(",").map((d, id) => {
          return <div key={id}>{d},</div>;
        })*/}
        {background}
      </Gradienttext>
      <div className="w-4/5 max-h-[150px] overflow-y-scroll flex justify-center items-center flex-wrap gap-2 shadow-md p-2 bg-slate-300 p-2 rounded my-2">
        {gradient.map((d, id) => {
          return (
            <div
              key={id}
              className="bg-slate-400 pl-2 overflow-hidden hover:shadow-md rounded-full flex justify-between items-center "
            >
              <Gradienttext className="mx-2">{d.color}</Gradienttext>
              <div
                onClick={() => handleColorDelete(d.id)}
                className="text-2xl kenia px-2 text-center bg-gradient-to-tl from-yellow-500 to-red-600 "
              >
                ×
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-4/5 shadow-md bg-slate-300 p-2 flex justify-center flex-col gap-2 items-center rounded">
        <div className="bg-slate-300 p-2 flex justify-center gap-2 items-center rounded">
          <input
            className="w-full h-10 p-0 m-0 rounded  shadow-md bg-gradient-to-tl from-yellow-300 via-red-300 to-pink-300"
            type="color"
            value={color}
            onChange={handleColor}
          />
          <input
            type="text"
            onChange={handleColorvalue}
            value={color}
            className="w-4/5 px-2 rounded ring-none border-none text-center text-xl text-slate-600"
          />
          <button
            onClick={handleAdd}
            className="w-full bg-slate-400 rounded py-2 shadow-md active:shadow-none text-2xl "
            type="button"
          >
            <Gradienttext>Add</Gradienttext>
          </button>
        </div>
        <Slider
          className="my-2"
          onValueChange={handleRotation}
          defaultValue={[rotation]}
          max={360}
          step={1}
        />
      </div>
    </Fullscreen>
  );
};

export default Gradientgenerator;
