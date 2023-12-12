import "@/App.css";
import dayjs from "dayjs";

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
          className="rounded-[400px] w-20 m-auto"
          src="https://avatars.githubusercontent.com/u/19950498?v=4"
          alt=""
        />
        <p className="text-xl font-bold">
          Greetings, I am Muniif, a computer science undergrad attending
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-red-800 to-red-600">
            {" "}
            UPM
          </span>
          .
        </p>
      </div>
    </>
  );
}

export default Home;
