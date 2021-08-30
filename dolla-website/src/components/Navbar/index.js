import React from 'react';
import { Nav, NavContainer, Logo, Menu, DropdownIcon, NavMenu, NavItem, NavLink, NavButton, Button} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <Logo to="/">dolla</Logo>
                    <Menu>
                        <DropdownIcon>
                            +
                        </DropdownIcon>

                        <NavMenu>
                            <NavItem>
                                <NavLink to="about">About</NavLink>
                                <NavLink to="about">About</NavLink>
                                <NavLink to="about">About</NavLink>
                                <NavLink to="about">About</NavLink>
                            </NavItem>
                            <NavButton>
                                <Button>Sign Up</Button>
                            </NavButton>
                        </NavMenu>
                    </Menu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;
