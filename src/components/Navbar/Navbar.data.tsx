import { RiHome4Line, RiAccountPinCircleLine, RiServerLine, RiBriefcase2Line, RiChatPollLine,RiGraduationCapLine } from "react-icons/ri";

export const dataNavbar = [
  {
    name: "home",
    path: "/",
    icon: <RiHome4Line size="30" />,
  },
  {
    name: "Formación",
    path: "/training",
    icon: <RiGraduationCapLine size="30" />,
  },
  {
    name: "Trabajo",
    path: "/works",
    icon: <RiBriefcase2Line size="30" />,
  },
  // {
  //   name: "Sobre mi",
  //   path: "/about",
  //   icon: <RiAccountPinCircleLine size="30" />,
  // }  
  // {
  //   name: "testimonials",
  //   path: "/testimonials",
  //   icon: <RiChatPollLine size="30" />,
  // },
];
