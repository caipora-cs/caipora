import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";
type Props = {
  currentUser: string;
};

const TermInfo: React.FC<Props> = ({ currentUser }) => {
  return (
    <Wrapper>
      <User>{currentUser}</User>@<WebsiteName>terminal.caipora.dev</WebsiteName>
      :~$
    </Wrapper>
  );
};

export default TermInfo;
