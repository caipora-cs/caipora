import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Caipora World&Terminal App (Typescritpt)",
    desc: "A Full-Stack Portifolio 3d app with a terminal-style front-end made for recruiters",
    url: "https://github.com/caipora-cs/caipora",
  },
  {
    id: 2,
    title: "School Desk Back-End(C#)",
    desc: "WinForm, Entity Framework and SQL Server Back End support for a School Desk utility.",
    url: "https://github.com/caipora-cs/fullstack-school-backend",
  },
  {
    id: 3,
    title: "Attenborough's Cosmic Chronicles",
    desc: "A Text to Speech model analysis and research paper based on Sir David Attenborough's voice",
    url: "",
  },
  {
    id: 4,
    title: "Security and Performance Acessment",
    desc: "A Authentication Lab made to test common attack vectors and hardening of API and Authentication Module",
    url: "",
  },
];

export default Projects;
