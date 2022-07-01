import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
`;

export const NavBar = styled.div`
  width: 90%;
  max-width: 900px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
`;

export const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MenuBar = styled.div`
  background-color: #f5f5f5;
  height: 100%;
  width: 70%;
  border-radius: 0 0 0 60px;
  display: flex;
  align-items: center;
  position: relative;
  &::before {
    background-color: #3c4657;
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 0 0 0 60px;
    box-shadow: -2px 2px 0.3rem #404040;
    position: absolute;
    right: 10px;
    z-index: -1;
  }
`;

export const Link = styled.a`
  margin-left: 30px;
  font-weight: bold;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &::after {
    content: "";
    height: 90%;
    width: 2px;
    background-color: #1c1c1c;
    position: absolute;
    right: -20px;
  }
`;

export const Header = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #d9d9d9;
`;

export const Footer = styled.div``;
