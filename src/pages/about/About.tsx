import about_achievements from "./about_achievement";
import Status from "./enums";
const About: React.FC = () => {
  const title_style = "font-bold text-black inline";
  const text_style = "shadow-lg p-3 rounded-lg text-gray-800";
  const status_ongoing =
    "-skew-y-3 place-self-center font-bold text-sm mx-1 rounded-lg py-1 px-2 bg-gradient-to-br text-white from-amber-500 to-green-400";
  const status_finished =
    "-skew-y-3 place-self-center font-bold text-sm mx-1 rounded-lg py-1 px-2 bg-gradient-to-br text-white from-green-500 to-blue-400";
  return (
    <>
      <h1 className="mt-4 text-center font-extrabold text-3xl capitalize my-2 py-2 text-transparent bg-clip-text bg-gradient-to-br from-orange-200 to-orange-500 ">
        About
      </h1>
      <p className="text-center text-xl font-bold">
        My life events.
      </p>

      <div className="  text-lg gap-5 flex flex-col  p-2">
        {about_achievements.map((achievement, index) => (
          <div key={index} className={`border-gray-200 border-2 ` + text_style}>
            <div className="flex flex-row pb-1 justify-between">
              <div className="flex flex-row">
                <p className={title_style}>
                  {achievement.title && achievement.title.length > 1
                    ? achievement.title
                    : "Forgot about the title?"}

                </p>
                {achievement.image != null ? (<img className="rounded-sm pl-1 max-w-[5vw] max-h-[5vh] object-contain" src={achievement.image} />) : (<></>)}

              </div>

              {achievement.status != null ? (
                <>
                  {achievement.status.valueOf() === Status.ONGOING.valueOf() ? (
                    <span className={status_ongoing}>ONGOING</span>
                  ) : (
                    <span className={status_finished}>FINISHED</span>
                  )}
                </>
              ) : (
                <span className={status_finished}>FINISHED</span>
              )}
            </div>
            <p>
              {achievement.text && achievement.text.length > 1
                ? achievement.text
                : "Forgout about the text?"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
