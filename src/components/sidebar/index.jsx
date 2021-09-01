import React from "react";
import {
  LinkContainer,
  LinkIcon,
  LinkSection,
  LinkText,
  LinkTextActive,
  SidebarContainer,
  SidebardLogo,
} from "./sidebar.Element";
import Logo from "../../assets/logo.svg";
import HomeIcon from "../../assets/homeIcon.png";
import GigsIcon from "../../assets/gigsicon.png";
import CompanyIcon from "../../assets/company icon.png";
import AccountIcon from "../../assets/account icon.png";

const Sidebar = () => {
  return (
    <SidebarContainer className=" d-none d-lg-block sidebar-container">
      <SidebardLogo src={Logo} alt="" />
      <LinkSection>
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
      </LinkSection>
    </SidebarContainer>
  );
};

export default Sidebar;
