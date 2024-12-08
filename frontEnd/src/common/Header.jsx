import { Container, Nav, NavDropdown } from "react-bootstrap";
import Textfield from "../common-ui/Textfield";
import { Avatar, Icon, styled } from "@mui/material";

const HeadCons = styled(Icon)((theme) => ({
    background: '#f90',
    fontFamily: 'inherit',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: "50%",
    color: '#fff',
    fontSize: "12px",
    cursor: "pointer",
    marginLeft: "6px",
    marginRight: '20px'
}))

function Header() {
    return (
        <div>
            <Nav>
                <Container fluid style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Avatar />
                    <Avatar />
                    <Avatar />
                    <Avatar />
                    <Textfield style={{ width: "250px" }} />
                    <NavDropdown title={<HeadCons>{"IND"}</HeadCons>} >
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                        <NavDropdown.Item>ClockOut</NavDropdown.Item>
                        <NavDropdown.Item>LOGOUT</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Nav>
        </div>
    )
}

export default Header;