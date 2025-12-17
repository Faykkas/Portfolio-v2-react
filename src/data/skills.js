import {
  SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGit, SiGithub,
  SiFigma
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Front-end",
    items: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Outils",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
    ],
  },
];
