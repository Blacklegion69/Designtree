import Listitem from "@/components/custom/Listitem";
import React from "react";

type DataType = {
  name: string;
  show: string;
  date: string;
  path: string;
};
const List = () => {
  const Data: DataType[] = [
    {
      name: "Loading Animation",
      show: "Loaders",
      date: "15/11/2023, 10:58:07",
      path: "Loadinganimation",
    },
    {
      name: "Loading Animation",
      show: "Loaders",
      date: "15/11/2023, 10:58:07",
      path: "Loadinganimation",
    },
    {
      name: "Loading Animation",
      show: "Loaders",
      date: "15/11/2023, 10:58:07",
      path: "Loadinganimation",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col relative p-2">
      {Data.map((d, id) => {
        return (
          <React.Fragment key={id}>
            <Listitem
              show={d.show}
              path={d.path}
              title={d.name}
              date={d.date}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default List;
