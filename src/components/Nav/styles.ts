import { secondaryColor } from './../UI/variables';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { primaryColor, tertiaryColor } from "../UI/variables";
import MenuIcon from "../../assets/icons/menu-icon.png";

export const NavContainer = styled.nav`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 15px;

@media (max-width: 860px) {
    display: none;
  }
`;

export const MenuItem = styled(Link)`
    color: ${primaryColor};
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s;

    &:hover {
      color: ${tertiaryColor};
      }
`;

export const MenuButton = styled.button`
  background-color: ${primaryColor};
  border: 2px solid ${tertiaryColor};
  border-radius: 20%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 24px;
  margin: 34px 0 0 8px;
  padding: 0;
  background-image: url(${MenuIcon});
  background-size: cover;
  background-position: center;
  display: none;

  &:focus {
    outline: none;
  }

  span {
    display: block;
    height: 2px;
    background-color: ${tertiaryColor};
    transition: transform 0.2s;
    transform-origin: center;
  }

  &.active span:first-of-type {
    transform: translateY(8px) rotate(45deg);
  }

  &.active span:last-of-type {
    transform: translateY(-8px) rotate(-45deg);
  }

  &.active span:nth-of-type(2) {
    opacity: 0;
  }

  @media (max-width: 860px) {
    display: flex;
  }

`;

interface MenuProps {
  open?: boolean;
}

export const Menu = styled.div<MenuProps>`
  display: none;

  @media (max-width: 1023px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    padding: 20px;
    background-color: ${secondaryColor};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;

    ${MenuItem} {
      display: block;
      margin-bottom: 10px;
    }
  }
`;
