import Fullscreen from "@/components/section/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Copy from "@/components/custom/Copy";
import { SymbolIcon } from "@radix-ui/react-icons";
type propsType = {
  className?: string;
};

interface gradientType {
  id: string;
  color: string;
}

const Gradientgenerator = ({ className }: propsType) => {
  const makeHexaColor = () => {
    const hexadecimalCode = "0123456789abcdef".split("");
    let hexacode = "#";
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * hexadecimalCode.length);
      hexacode += hexadecimalCode[random];
    }
    return hexacode;
  };

  const [color, setColor] = useState<string>(makeHexaColor());
  const [gradient, setGradient] = useState<gradientType[]>([
    {
      id: "0b8546c5-2f77-4c13-be59-1ce7717605a8",
      color: makeHexaColor(),
    },
    {
      id: "e1156cfa-42c6-40b9-a185-a3248ddd8006",
      color: makeHexaColor(),
    },
    {
      id: "3eb2c4bb-6a02-432d-b51f-5b92780eaded",
      color: makeHexaColor(),
    },
  ]);
  const [background, setBackground] = useState<string>("");
  const [rotation, setRotation] = useState<number>(
    Math.floor(Math.random() * 360),
  );
  const [negativeRotation, setNegativeRotation] = useState(false);
  const [repeating, setRepeating] = useState(false);
  const [repeatingLength, setRepeatingLength] = useState(
    Math.floor(Math.random() * 36),
  );
  const [unit, setUnit] = useState("px");

  const handleColor = (e: any) => {
    setColor(e.target.value.toString());
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
  const handleDice = () => {
    const randomColor = makeHexaColor();
    setColor(randomColor);
  };
  const handleNegativeRotation = (e: any) => {
    setNegativeRotation(e);
  };
  const handleRepeating = (e: any) => {
    setRepeating(e);
  };
  const handleUnit = (e: any) => {
    setUnit(e);
  };

  const generateGradient = () => {
    setRotation(() => Math.floor(Math.random() * 360));
    setRepeatingLength(Math.floor(Math.random() * 60));
    setGradient([
      {
        id: "0b8546c5-2f77-8876-be59-1ce7717605a8",
        color: makeHexaColor(),
      },
      {
        id: "e1156cfa-42c6-1243-a185-a3248ddd8006",
        color: makeHexaColor(),
      },
      {
        id: "3eb2c4bb-6a02-9173-b51f-5b92780eaded",
        color: makeHexaColor(),
      },
    ]);
  };

  useEffect(() => {
    const rotate = negativeRotation ? -Math.abs(rotation) : rotation;
    let code = repeating
      ? "-webkit-repeating-linear-gradient(" + rotate + "deg"
      : "-webkit-linear-gradient(" + rotate + "deg";
    for (let i = 0; i < gradient.length; i++) {
      code += gradient[i].color.replace("#", `, #`);
    }
    const final =
      code +
      (repeating
        ? unit === "px"
          ? ` ${Math.abs(repeatingLength)}px)`
          : ` ${Math.abs(repeatingLength)}%)`
        : ")");
    setBackground(final);
  }, [
    color,
    repeatingLength,
    unit,
    gradient,
    rotation,
    negativeRotation,
    repeating,
  ]);

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
        className="w-4/5 h-28 rounded relative shadow-md"
      >
        <Button
          onClick={generateGradient}
          className=" top-[-40px] absolute px-2 right-0 gap-x-1"
        >
          <SymbolIcon />{" "}
          <Gradienttext className=" bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-[#f46b45] via-[#ffa849] to-[#f46b45]">
            {" "}
            Random
          </Gradienttext>{" "}
        </Button>
      </div>
      <div className="w-4/5 bg-slate-300 rounded shadow-md flex justify-between gap-x-1 items-center overflow-y-scroll p-2 text-xs my-2">
        {/*background.split(",").map((d, id) => {
          return <Gradienttext key={id}>{d.replace("#", ",#")}</Gradienttext>;
        })*/}
        <div> {background}</div>
        <Copy text={background} className="font-bold" />
      </div>

      <div className="w-4/5 my-2 gap-y-2 p-2 bg-slate-300 rounded flex flex-col shadow-md">
        <div className="flex gap-x-2">
          <Checkbox
            id="terms"
            checked={negativeRotation}
            onCheckedChange={handleNegativeRotation}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Negative rotation (-)
          </label>
        </div>

        <div className="flex gap-x-2">
          <Checkbox
            id="repeating"
            checked={repeating}
            onCheckedChange={handleRepeating}
          />
          <label
            htmlFor="repeating"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Repeating
          </label>
        </div>
      </div>
      {repeating ? (
        <div className="w-4/5 rounded bg-slate-300 flex justify-center items-center flex-col unded p-2 my-2 shadow-md">
          <div className="w-full gap-x-2 my-2 grid grid-cols-5 justify-around items-center relative">
            <Button onClick={() => setRepeatingLength(repeatingLength - 5)}>
              <Gradienttext className="text-2xl font-bold bg-gradient-to-tl from-pink-300 via-red-300 to-yellow-300">
                -5
              </Gradienttext>
            </Button>
            <Button onClick={() => setRepeatingLength(repeatingLength - 1)}>
              <Gradienttext className="text-2xl font-bold bg-gradient-to-tl from-pink-300 via-red-300 to-yellow-300">
                -1
              </Gradienttext>
            </Button>
            <div className="text-center">
              {repeatingLength}
              {unit === "px" ? "px" : "%"}
            </div>
            <Button onClick={() => setRepeatingLength(repeatingLength + 1)}>
              <Gradienttext className="text-2xl font-bold bg-gradient-to-tl from-pink-300 via-red-300 to-yellow-300">
                +1
              </Gradienttext>
            </Button>
            <Button onClick={() => setRepeatingLength(repeatingLength + 5)}>
              <Gradienttext className="text-2xl font-bold bg-gradient-to-tl from-pink-300 via-red-300 to-yellow-300">
                +5
              </Gradienttext>
            </Button>
          </div>
          <div className="w-full my-2 flex flex-col relative">
            <RadioGroup defaultValue="px" onValueChange={handleUnit}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="px" id="r1" />
                <Label htmlFor="r1">Pixel</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="percentage" id="r2" />
                <Label htmlFor="r2">Percentage</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="w-4/5 max-h-[100px] overflow-y-scroll flex justify-center items-center flex-wrap gap-2 shadow-md p-2 bg-slate-300 p-2 rounded my-2">
        {gradient.map((d, id) => {
          return (
            <div
              key={id}
              className="bg-slate-400 pl-2 overflow-hidden hover:shadow-md rounded-full flex justify-center items-center"
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
        <div className="bg-slate-300 p-2 grid grid-cols-2 justify-center gap-2 items-center rounded md:flex">
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
            className="w-4/5 px-2 rounded ring-none m-auto border-none text-center text-xl text-slate-600"
          />

          <Button
            onClick={handleDice}
            className="w-full bg-slate-700 rounded py-2 shadow-md active:shadow-none text-xl "
            type="button"
          >
            <Gradienttext className="bg-gradient-to-r from-yellow-500 via-pink-500 to-yellow-500">
              Random
            </Gradienttext>
          </Button>

          <Button
            onClick={handleAdd}
            className="w-full bg-slate-700 rounded py-2 shadow-md active:shadow-none text-xl "
            type="button"
          >
            <Gradienttext className="bg-gradient-to-r from-yellow-500 via-pink-500 to-yellow-500">
              Add
            </Gradienttext>
          </Button>
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
