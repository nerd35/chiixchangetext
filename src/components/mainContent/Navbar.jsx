import React from 'react'
import { NavbarContainer, NavbarLeft, NavbarRight, SearchInput, NavbarLeftInput, NavbarIcon, NavIcon } from './main.element';
import BellIcon from '../../assets/bellicon.png';
import MessageIcon from '../../assets/messageicon.png';
import SettingIcon from '../../assets/settingIcon.png';
import ProfileIcon from '../../assets/profileicon.png';
import Logo from '../../assets/logo.svg';

const Navbar = ({ toggle }) => {
    return (
        <NavbarContainer className="px-4 py-4 border-bottom ">
            <NavbarLeft className="d-block d-lg-none">
            <NavIcon onClick={toggle}>
            <i className="mt-3 fas fa-bars fa-lg text-secondary"></i>
          </NavIcon>
                <NavbarIcon src={Logo} alt="" className="ms-5"/>
            </NavbarLeft>
            <NavbarLeftInput className="d-none d-md-block w-50">
                <i className="fas fa-search me-2 ms-2" style={{ marginTop:"12px",color: "#514C5D"}}></i>
                <SearchInput className="ms-3" placeholder="Search"/>
            </NavbarLeftInput>
            <NavbarRight>
                <NavbarIcon src={BellIcon} alt="" className="me-3"/>
                <NavbarIcon src={MessageIcon} alt="" className="me-3"/>
                <NavbarIcon src={SettingIcon} alt="" className="me-3"/>
                <NavbarIcon src={ProfileIcon} alt="" className=""/>
            </NavbarRight>
        </NavbarContainer>
    )
}

export default Navbar
