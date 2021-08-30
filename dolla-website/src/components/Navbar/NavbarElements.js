import styled from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';
// import { Link as LinkTo} from 'react-scroll';

export const Nav = styled.header `
    background-color: black;
    min-height: 0rem;
    max-width: 100%;
    padding: 0.5rem;
    z-index: 1000;
`

export const NavContainer = styled.div `
    /* background-color: black; */
    min-height: 4rem;
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    align-items: center;

    /* & > * {
        flex: 1;
    } */
`
export const Logo = styled(LinkRoute) `
    /* background-color: yellow; */
    flex: 1;
    color: red;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
`

export const Menu = styled.nav `
    flex: 2;
    font-weight: bold;
    display: flex;
    /* background-color: pink; */
    /* justify-content: flex-end; */

    & > * {
        flex: 1;
    }
`

export const DropdownIcon = styled.button `
    display: none;
    color: white;
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;

    @media screen and (max-width: 700px) {
        display: block;
    }
`

export const NavMenu = styled.div `
    background-color: red;
    display: flex;

    & > * {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding: 0rem 1rem;
    }

    @media screen and (max-width: 700px) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        margin-top: 4rem;
        padding: 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
`
export const NavItem = styled.div `
    /* background-color: yellow; */
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

export const NavLink = styled(LinkRoute) `
    min-height: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: 500;
    padding: 0rem 1rem;

    &:hover {
        transition: 0.5s ease-in-out;
        color: red;
    }
    
`

export const NavButton = styled.div `
    display: flex;
    align-items: center;
`

export const Button = styled(LinkRoute) `
    background-color: green;
    color: white;
    padding: 0.7rem 1.5rem; 
    border-radius: 2rem;
    text-decoration: none;
`