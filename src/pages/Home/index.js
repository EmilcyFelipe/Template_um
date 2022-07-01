import React from "react";
import {
  Container,
  NavBar,
  LogoWrapper,
  Logo,
  MenuBar,
  Link,
  Header,
  Footer,
} from "./styles";

import Lg from "../../assets/logo.png";

export default function Home() {
  return (
    <Container>
      <NavBar>
        <LogoWrapper>
          <Logo alt="logo" src={Lg} />
        </LogoWrapper>
        <MenuBar>
          <Link>Home</Link>
          <Link>Home</Link>
          <Link>Home</Link>
          <Link>Home</Link>
        </MenuBar>
      </NavBar>
      <Header></Header>
      <Footer></Footer>
    </Container>
  );
}
