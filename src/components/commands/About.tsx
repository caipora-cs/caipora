import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Caipora</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Developer and Cybersecurity Analyst</HighlightAlt> based in Lisbon,
        Portugal.
      </p>
      <p>
        I am passionate about writing code and <br />
        a passionate cybersecurity student with a keen interest in securing digital environments and protecting sensitive information. with a strong foundation in computer science and a curiosity for hacking, i am dedicated to honing my skills and contributing to a safer cyber landscape.Some of the languages that am fluent in include typescript, python, and c#. 
      </p>
    </AboutWrapper>
  );
};

export default About;
