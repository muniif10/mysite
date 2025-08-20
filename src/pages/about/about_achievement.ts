import { Status, ImageType } from "./enums";

type Achievement = {
  title: string;
  image: string | null;
  text: string;
  status: Status | null;
  imageType?: ImageType;
};

const about_achievements: Achievement[] = [
  {
    title: "Internship at Texas Instruments Malaysia",
    status: Status.FINISHED,
    text: "Reduced NVA task of Planning dept., implemented the reporting for quality to improve their visibility on unaddressed action plan, involved in Lights Out roadmap project with Building Destination System, involved with Foundation/ESH week event on media committee and handling the booth.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/TexasInstruments-Logo.svg",
    imageType: ImageType.LINK,
  },
  {
    title: "Curtin Malaysia CTF 2024",
    image: null,
    text: "Challenging myself to see how fun CTF can be, joined with friends. I gained a lot of experience in term of OSINT and Linux-based challenges.",
    status: Status.FINISHED,
  },
  {
    title: "Final Year Project",
    text: "Calorie Tracker with Image Recognition under supervision of Dr. Nurulain. Exposed to mobile application development with AI model running on the edge.",
    status: Status.FINISHED,
    image: null,
  },
  {
    title: "2023 APAC HPC-AI Competition - Merit Award",
    status: Status.FINISHED,
    image: null,
    text: "This is where I learned the most about Linux in general including compiling and dealing with a supercomputer (GADI of NCI Australia).",
  },
  {
    title: "ASEAN Student Contest on Information Security (ASCIS)",
    text: "My first time joining a CTF, it was not that great in term of my performance but it is my first exposure to one. I had learned a few things on general computer security skills.",
    image: null,
    status: null,
  },
  {
    title: "SULAM Program Director for Computer Security",
    text: "I directed a service program at a primary school in Puchong, collaborating with the school to highlight the importance of digital safety to the school children.",
    image: null,
    status: Status.FINISHED,
  },
  {
    title: "AWS Cloud Practioner Certificate (2023-2027)",
    text: "I took a free programme held by Trainocate Malaysia and organized Malaysian Ministry of Higher Education. The online exam was nerve-wracking but I now know the basics of cloud computing.",
    image: null,
    status: Status.FINISHED,
  },
];

export default about_achievements;
