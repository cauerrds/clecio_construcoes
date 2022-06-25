import { Container, MenuContainer } from "./styles";
import { FiMenu } from "react-icons/fi";
const Header = () => {
  return (
    <Container>
      <MenuContainer>
        <FiMenu />
      </MenuContainer>
      <h1>Clecio</h1>
    </Container>
  );
};

export { Header };
