import { useLocation } from "react-router-dom";
import navList from '@/navbar_routes'
const SideNav = () => {

  const side_links = navList;

  const variable = useLocation();
  let active = -1;
  side_links.map((item, index) => {
    if (item[1] == variable.pathname) {
      active = index;
    }
  });
  return (
    <>
      <div className="  font-bold text-xl flex flex-col w-[200px]">
        <ul className="text-right ">
          {side_links.map((row, index) => {
            let data = "false";
            if (active === index) {
              data = "true";
            }
            return (
              <li
                onClick={() => {
                  // @ts-ignore: No problem, surely will haunt me later
                  window.location = row[1];
                }}
                className="delay-75 transition-all  cursor-pointer pr-5 py-2  transform data-[active=true]:-skew-y-3 data-[active=true]:bg-gradient-to-br hover:data-[active=true]:skew-y-3"
                data-active={data}
                key={index}
              >
                <a
                  data-active={data}
                  className="delay-75 data-[active=false]:underline data-[active=false]:underline-offset-8 transition-all data-[active=true]:text-white data-[active=true]:p-2 data-[active=true]:bg-gradient-to-br from-emerald-800 to-emerald-300 hover:from-orange-800 hover:to-orange-300 "
                  href={row[1]}
                >
                  {row[0]}
                </a>
              </li>
            );
          })}
          
        </ul>
      </div>
    </>
  );
};

export default SideNav;
