import React, { ReactNode } from "react";
import SideNav from "./components/sidenav";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
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
      </div>
      <div className="text-center bg-zinc-100 pb-5">Built with Vite + ❤ by Muniif</div>
    </>
  );
};

export default Layout;
