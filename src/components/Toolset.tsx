const Toolset = () => {
  const tools = [
    [
      "Typescript",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
    ],
    [
      "React",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    ],
    [
      "Tailwind",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042",
    ],
    [
      "Figma",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
    ],
  ];

  return (
    <div className=" border-[2px] rounded-lg shadow-md p-5">
      <p className="text-3xl font-extrabold text-center">My Toolset</p>
      <div className="pt-3 flex flex-wrap flex-1 flex-row gap-5 justify-between place-content-center m-5">
        {tools.map((item, index) => {
          return (
            <div
              key={index}
              className="transition-all text-gray-600 hover:text-black saturate-0 hover:saturate-100 flex flex-1 flex-col gap-5 text-center"
            >
              <img className="h-[70px]  m-auto" src={item[1]} alt="" />
              <p className="  font-extrabold">{item[0]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toolset;
