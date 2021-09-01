import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
export const MainContentContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-decoration: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
`;
export const NavbarLeftInput = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-item: center;
  border: 1px solid #ececec;
  border-radius: 16px;
  opacity: 1;
`;
export const NavbarRight = styled.div``;

export const SearchInput = styled.input`
  color: #7e7e7e;
  outline: none;
  box-shadow: none !important;
  border: none;
`;

export const NavbarIconContainer = styled.span``;

export const NavbarIcon = styled.img``;

export const SidenavContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  padding: 0 40px;
  z-index: 1000;
  transition: 0.3s ease-in-out;
  border-right: 1px solid #eee;
  left: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
  font-weight: 200;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  cursor: pointer;
`;

export const SidenavLogo = styled.img``;
export const SidenavSection = styled.div`
  margin-top: -305px;
`;

export const TopTitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TopTiTleColumn = styled.div``;

export const Title = styled.h1`
  font: normal normal normal 45px/63px Circular Std Bold;
  letter-spacing: 0px;
  color: #2c263d;
  opacity: 0.8;
`;

export const NewGig = styled.span`
  width: 153px;
  height: 60px;
  background: #2f417e 0% 0% no-repeat padding-box;
  border: 1px solid #f6f6f6;
  border-radius: 15px;
  font: normal normal normal 18px/26px Circular Std Book;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
`;
export const TopTabSection = styled.div`
  border-bottom: 1px solid #ececec;
`;

export const TopTabRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 0em;
    height: 0em
}
::-webkit-scrollbar-button {
    background: #fff
}
::-webkit-scrollbar-track-piece {
    background: #fff
}
::-webkit-scrollbar-thumb {
    background: #fff
}​
`;

export const TopTabActiveLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify_content: flex-start;
  border-bottom: 3px solid #fbb30b;
`;

export const TopTabActiveSpan = styled.span`
  text-align: left;
  font: normal normal normal 20px/28px Circular Std Medium;
  width: 80px;
  letter-spacing: 0px;
  color: #585461;
  opacity: 1;
`;

export const TopTabActiveBgSpan = styled.span`
  background: #fbb30b 0% 0% no-repeat padding-box;
  border-radius: 8px;
  font: normal normal bold 14px/17px Graphie;
  letter-spacing: 0px;
  color: #ffffff;
`;

export const TopTabLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify_content: flex-start;
`;

export const TopTabSpan = styled.span`
  font: normal normal normal 20px/28px Circular Std Book;
  letter-spacing: 0px;
  text-align: left;
  width: 120px;
  color: #585461;
  opacity: 0.6;
`;

export const TopTabBgSpan = styled.span`
  background: #fdf2e9 0% 0% no-repeat padding-box;
  border-radius: 8px;
  font: normal normal bold 14px/17px Graphie;
  letter-spacing: 0px;
  color: #fbb30b;
  opacity: 1;
`;

export const GigsCategoryContainer = styled.div`
   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 0em;
    height: 0em
}
::-webkit-scrollbar-button {
    background: #fff
}
::-webkit-scrollbar-track-piece {
    background: #fff
}
::-webkit-scrollbar-thumb {
    background: #fff
}​
`;

export const GigsCategoryColumn = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 15px;
`;
export const GigsCategoryActiveColumn = styled.div`
  border: 2px solid #e18700;
  border-radius: 17px;
`;

export const GigsText = styled.p`
  font: normal normal normal 16px/19px ;
  letter-spacing: -0.32px;
  color: #bcbcbc;
`;

export const GigsActiveText = styled.p`
  font: normal normal normal 16px/19px ;
  letter-spacing: -0.32px;
  color: #e18700;
`;

export const GigTableContainer = styled.div`
overflow-x: auto;
::-webkit-scrollbar {
  width: 0em;
  height: 0em
}
::-webkit-scrollbar-button {
  background: #fff
}
::-webkit-scrollbar-track-piece {
  background: #fff
}
::-webkit-scrollbar-thumb {
  background: #fff
}​
`;

export const AddGigTitle = styled.h1`
  font: normal normal normal 45px/63px Circular Std Bold;
  letter-spacing: 0px;
  color: #2c263d;
`;

export const AddGigFormSection = styled.div``;
