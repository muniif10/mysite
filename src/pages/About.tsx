const About: React.FC = () => {
  const title_style = "font-bold mb-1 text-black";
  const text_style = "shadow-lg p-3 rounded-lg text-gray-800";
  return (
    <>
      <h1 className="mt-4 text-center font-extrabold text-3xl capitalize my-2 py-2 text-transparent bg-clip-text bg-gradient-to-br   from-orange-200 to-orange-500 ">
        About
      </h1>

      <p className="text-center text-xl font-bold">
        I am Muniif and this is about what I did.
      </p>
      <div className="  text-lg gap-5 flex flex-col m-5 p-2">
        <div className={text_style}>
          <p className={title_style}>
            2023 APAC HPC-AI Cometition - Merit Award
          </p>
          <p>
            This is where I learned the most about Linux in general including
            compiling and dealing with a supercomputer (GADI of NCI Australia).
          </p>
        </div>
        <div className={text_style}>
          <p className={title_style}>
            ASEAN Student Contest on Information Security (ASCIS)
          </p>
          <p>
            My first time joining a CTF, it was not that great in term of my
            performance but it is my first exposure to one. I had learned a few
            things on general computer security skills.
          </p>
        </div>
        <div className={text_style}>
          <p className={title_style}>
            SULAM Program Director for Computer Security
          </p>
          <p>
            I directed a service program at a primary school in Puchong,
            collaborating with the school to highlight the digital safety to the
            school children.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
