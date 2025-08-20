import "@/App.css";
import dayjs from "dayjs";
import me from "@/assets/me.jpg";
import amogus from "@/assets/amogus.mp3";
import Typewriter from 'typewriter-effect';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Toolset from "./components/Toolset";
import { useState } from "react";

enum Greeting {
  Ketidaktetapan = "Kiamat?",
  AwalPagi = "Awal Pagi!",
  Pagi = "Pagi!",
  Tengahari = "Tengahari!",
  Petang = "Petang.",
}

function Home() {
  let currentAudio: HTMLAudioElement;
  // const clickRef = useRef(0);
  const [oooMagic, setMagic] = useState([""]);
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
    if (jam < 5) {
      // awal naw
      greeting_used = Greeting.AwalPagi;
    } else {
      // Kes pagi
      greeting_used = Greeting.Pagi;
    }
  }

  const full_greeting = "Selamat " + greeting_used;


  return (
    <>
      <div className="text-center">
        <h1 id="typewriter" className="mt-4 text-center font-extrabold text-3xl capitalize my-2 py-2 text-transparent bg-clip-text bg-gradient-to-br from-orange-200 to-orange-500 ">
          <Typewriter options={{
            strings: ["Hi!", full_greeting, "Greetings!"],
            autoStart: true,
            loop: true,
          }} />
        </h1>

        <img
          onContextMenu={() => {
            // if (clickRef.current < 5) {
            //   clickRef.current = clickRef.current + 1;
            //   console.log("Clue?: " + clickRef.current);
            // } else {
            // This is broken, malas nak try useState walau mudah.
            if (!currentAudio || currentAudio.paused || currentAudio.ended) {
              currentAudio = new Audio(amogus);
              currentAudio.preservesPitch = true;
              currentAudio.playbackRate = Math.random() * 2;
              currentAudio.play();
            } else { /* empty */ }

            setMagic([
              " w-[50vh] rounded-none",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Medjed_%28Deity%29.png/800px-Medjed_%28Deity%29.png",
            ]);
            // }
          }}
          className={
            " shadow-sm rounded-full w-[20vh] sm:w-[15vh] m-auto mb-5 transform-gpu transition-all" +
            oooMagic[0]
          }
          src={oooMagic[0].length > 1 ? oooMagic[1] : me}
          alt=""
        />
        <span className="text-xl font-bold">
          I am Muniif, a Computer Science undergrad attending
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
