import React from "react";
import {
  Container,
  NavBar,
  LogoWrapper,
  Logo,
  MenuBar,
  Link,
  Header,
  HeaderContent,
  BannerWrapper,
  Services,
  Footer,
} from "./styles";

import ServiceModel from "../../components/ServiceModel";

import Lg from "../../assets/logo.png";

import { FaBriefcaseMedical } from "react-icons/fa";

export default function Home() {
  let servicesList = [
    {
      icon: FaBriefcaseMedical,
      description:
        "Dolore et aliquip pariatur fugiat ex ex nisi sunt eiusmod duis consequat. ",
    },
    {
      icon: FaBriefcaseMedical,
      description:
        "Dolore et aliquip pariatur fugiat ex ex nisi sunt eiusmod duis consequat. ",
    },
    {
      icon: FaBriefcaseMedical,
      description:
        "Dolore et aliquip pariatur fugiat ex ex nisi sunt eiusmod duis consequat. ",
    },
    {
      icon: FaBriefcaseMedical,
      description:
        "Dolore et aliquip pariatur fugiat ex ex nisi sunt eiusmod duis consequat. ",
    },
  ];

  let itensMap = servicesList.map((item) => {
    return (
      <ServiceModel description={item.description}>
        <item.icon />
      </ServiceModel>
    );
  });
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
      <Header>
        <HeaderContent>
          <BannerWrapper>
            <h2>Lorem ipsum sldkfjf</h2>
            <text>
              Dolore et aliquip pariatur fugiat ex ex nisi sunt eiusmod duis
              consequat. Tempor enim sint consectetur quis cillum nostrud
              consequat quis ex consequat.
            </text>
          </BannerWrapper>
          <img
            style={{ width: "300px" }}
            src={require("../../assets/doctor.png")}
          />
        </HeaderContent>
        <Services>{itensMap}</Services>
      </Header>

      <Footer></Footer>
    </Container>
  );
}
