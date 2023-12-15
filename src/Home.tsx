import "@/App.css";
import dayjs from "dayjs";
import me from "@/assets/me.jpg"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Toolset from "./components/Toolset";

enum Greeting {
  Ketidaktetapan = "Kiamat?",
  Pagi = "Pagi!",
  Tengahari = "Tengahari!",
  Petang = "Petang.",
}

function Home() {
  const jam = dayjs().hour();
  let greeting_used = Greeting.Ketidaktetapan;
  if (jam > 12) {
    if (jam < 14) {
      // Jika bukan pagi, mungkin tengahari

      greeting_used = Greeting.Tengahari;
    } else {
      // Jika bukan pagi dan tengahari, petang terus lah
      greeting_used = Greeting.Petang;
    }
  } else {
    // Kes pagi
    greeting_used = Greeting.Pagi;
  }

  return (
    <>
      <div className="text-center">
        <h1 className="my-2 py-2 text-transparent bg-clip-text bg-gradient-to-br   from-orange-200 to-orange-500 font-extrabold text-5xl ">
          Selamat {greeting_used}
        </h1>
        <img
          className=" shadow-sm rounded-full w-[15vh] m-auto mb-5"
          src={me}
          alt=""
        />
        <span className="text-xl font-bold">
          Greetings, I am Muniif, a Computer Science undergrad attending
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-red-800 to-red-600">
            {" "}
            <HoverCard>
              <HoverCardTrigger>UPM</HoverCardTrigger>
              <HoverCardContent>
                <span className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage
                      className="w-20 pointer-events-none"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-v1t0MjuiCTYqIXJKcbOe_wuayXFLYv6D5ixpdqhFg&s"
                    />
                    <AvatarFallback>UPM</AvatarFallback>
                  </Avatar>
                  <span className="space-y-1">
                    <span className="text-sm">Universiti Putra Malaysia</span>
                  </span>
                </span>
              </HoverCardContent>
            </HoverCard>
          </span>
          .
        </span>
      </div>
      <div>
        <Toolset />
      </div>
    </>
  );
}

export default Home;
