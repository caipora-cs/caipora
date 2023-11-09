import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Bachelor in Information Technology",
    desc: "Instituto Politecnico de Tomar | 2021 ~ 2024",
  },
  {
    title: "Relevant Coursework",
    desc: "Networking, Systems Administration, Linear Algebra, Data Structures and Algorithms, Machine Learning, Information Retrieval, Database Architecture and Management, Project Management, Security",
  },
  {
    title: "Programing Languages",
    desc: "C, C#, Python, PHP, Javascript, Typescript, SQL, Flutter",
  },
  {
    title: "Developer Tools",
    desc: "Azure, Wireshark. Nmap, TCPDump, Docker, Active Directory, CentOS, VMWare, Virtual Box, Burp Suite, Node.js, React, Three.js",
  },
  {
    title: "Languages",
    desc: "English (C2), German (A2), Portuguese (Native)",
  },
];

export default Education;
