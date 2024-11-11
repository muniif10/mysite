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
    [
      "Flutter",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/1920px-Google-flutter-logo.svg.png"
    ],
    [
      "bloc",
      "https://raw.githubusercontent.com/felangel/bloc/master/assets/logos/bloc.png"
    ],
    [
      "TensorFlow",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/1920px-TensorFlow_logo.svg.png"
    ],
    [
      "Python",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
    ],


  ];

  return (
    <div className="m-auto border-[2px] rounded-lg shadow-md p-5">
      <p className="text-3xl font-extrabold text-center">My Toolset</p>
      <div className="pt-3 flex flex-wrap flex-1 flex-row gap-5  place-content-center m-5">
        {tools.map((tool_used, index) => {
          return (
            <div
              key={index}
              className="min-w-[8em] max-w-[10em] transition-all text-gray-400 hover:text-gray-900 saturate-0 hover:saturate-100 flex flex-1 flex-col gap-5 text-center"
            >
              <img className="sm:h-[3em] h-[5em] m-auto object-contain w-[5em]" src={tool_used[1]} alt="" />
              <p className="  font-extrabold">{tool_used[0]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toolset;
