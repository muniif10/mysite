import React, { ReactNode, useState } from "react";
import SideNav from "./components/sidenav";
import navLinks from "@/navbar_routes";
import { useLocation } from "react-router-dom";
interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [navAppear, setNavAppear] = useState(false);
  return (
    <>
      <div className="bg-zinc-100 min-h-screen flex flex-col items-center">
        <div className="flex flex-1 flex-row justify-end sm:m-20 m-0 ">
          <div className="hidden sm:block">
            <SideNav />
          </div>
          <div className="lg:w-[40vw] m-2 flex-1 gap-5 px-6 flex flex-col">
            {children}
          </div>
        </div>
        <div
          onClick={() => {
            navAppear ? setNavAppear(false) : setNavAppear(true);
          }}
          className=" z-10 backdrop-blur-sm cursor-pointer rounded-full p-4 bottom-3 right-3 fixed sm:hidden text-white focus:outline-none bg-gradient-to-br from-blue-100/80 to-blue-200/80 shadow-md"
        >
          <svg
            className=" fill-slate-800 "
            viewBox="0 0 100 80"
            width="2em"
            height="2em"
          >
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
        <Mobile_Nav setNavState={setNavAppear} appearState={navAppear} />
      </div>
      <div className="text-center bg-zinc-100 pb-5">
        Built with Vite + ❤ by Muniif
      </div>
    </>
  );
};

const Mobile_Nav = ({
  appearState,
  setNavState,
}: {
  appearState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const side_links = navLinks;
  const variable = useLocation();
  let active = -1;
  side_links.map((item, index) => {
    if (item[1] == variable.pathname) {
      active = index;
    }
  });
  return (
    <>
      <div
        onClick={(e) => {
          setNavState(false);
          e.stopPropagation();
        }}
        data-appear={appearState}
        className=" transition-all data-[appear=true]:translate-x-[0em] data-[appear=false]:translate-x-[40em] sm:hidden fixed h-screen w-full bg-white backdrop-blur-sm"
      >
        <div className=" translate-y-[50vh] font-bold text-3xl flex flex-col">
          <ul className="text-center flex-col flex">
            {side_links.map((row, index) => {
              let data = "false";
              if (active === index) {
                data = "true";
              }
              return (
                <li
                  onClick={(e) => {
                    // @ts-ignore: No problem, surely will haunt me later
                    window.location = row[1];
                    e.stopPropagation();
                  }}
                  className="delay-75 transition-all  cursor-pointer py-2  transform data-[active=true]:-skew-y-3 data-[active=true]:bg-gradient-to-br hover:data-[active=true]:skew-y-3"
                  data-active={data}
                  key={index}
                >
                  <a
                    data-active={data}
                    className="delay-75 transition-all data-[active=true]:text-white data-[active=true]:p-2 data-[active=true]:bg-gradient-to-br from-emerald-800 to-emerald-300 hover:from-orange-800 hover:to-orange-300 "
                    href={row[1]}
                  >
                    {row[0]}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Layout;
