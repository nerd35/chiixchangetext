import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const SidebarContainer = styled.div`
width: 20%;
height: 100vh;
`;

export const SidebardLogo = styled.img`
width: 101px;
height: 41px;
background: transparent  0% 0% no-repeat padding-box;
`;

export const LinkSection = styled.div`
    margin-top: 65px;
`;

export const LinkContainer = styled(Link)`
display: flex;
flex-direction: row;
align-item: center;
justify-content: flex-start;
    text-decoration: none;
    margin-top: 25px;
`

export const LinkIcon = styled.img`
width: 24px;
height: 24px;
margin-right: 22px;
`
export const LinkIconActive = styled.img`
width: 24px;
height: 24px;
margin-right: 22px;

color: #FBB30B;
`

export const LinkText = styled.span`
text-align: left;
font: normal normal normal 18px/22px Karla;
letter-spacing: -0.36px;
color: #514C5D;
opacity: 0.5;
`
export const LinkTextActive = styled.span`
text-align: left;
font: normal normal normal 18px/22px Karla;
letter-spacing: -0.36px;
color: #FBB30B;
opacity: 1;
`