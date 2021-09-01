import React from "react";
import {
  LinkContainer,
  LinkIcon,
  LinkText,
  LinkTextActive,
} from "../sidebar/sidebar.Element";
import { CloseIcon, Icon, SidenavContainer, SidenavLogo, SidenavSection  } from "./main.element";
import Logo from "../../assets/logo.svg";
import HomeIcon from "../../assets/homeIcon.png";
import GigsIcon from "../../assets/gigsicon.png";
import CompanyIcon from "../../assets/company icon.png";
import AccountIcon from "../../assets/account icon.png";

const Sidenav = ({ isOpen, toggle }) => {
  return (
    <SidenavContainer isOpen={isOpen} onClick={toggle}>
      <Icon className="me-3">
        <CloseIcon></CloseIcon>
      </Icon>
        <SidenavSection>
        <SidenavLogo src={Logo} alt="" />
          <LinkContainer>
            <LinkIcon src={HomeIcon} alt="" />
            <LinkText>Dashboard</LinkText>
          </LinkContainer>
          <LinkContainer>
            <LinkIcon src={GigsIcon} alt="" />
            <LinkTextActive>Gigs</LinkTextActive>
          </LinkContainer>
          <LinkContainer>
            <LinkIcon src={CompanyIcon} alt="" />
            <LinkText>Company</LinkText>
          </LinkContainer>
          <LinkContainer>
            <LinkIcon src={AccountIcon} alt="" />
            <LinkText>Account</LinkText>
          </LinkContainer>
        </SidenavSection>
    </SidenavContainer>
  );
};

export default Sidenav;
