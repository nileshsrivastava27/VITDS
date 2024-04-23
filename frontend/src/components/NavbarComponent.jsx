// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const NavbarComponent = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg"  variant="light" className='bg-warning'>
//       <Container>
//         <Navbar.Brand href="/">Vehicle Threat Detection System</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/track" className='bg-light btn'>Driver Page</Nav.Link>
//             <Nav.Link href="/location" className='bg-light btn'>Track</Nav.Link>
//             {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
//             {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           </Nav>
//           <Nav>
//             <Nav.Link href="tel:112" className='bg-danger btn'>Emergency SOS</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarComponent

// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';

// const NavbarComponent = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg" variant="light" className="bg-warning">
//       <Container>
//         <Navbar.Brand href="/" aria-label="Home">Vehicle Threat Detection System</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/track" className="text-dark btn bg-light" aria-label="Driver Page">Driver Page</Nav.Link>
//             <Nav.Link href="/location" className="text-dark btn bg-light" aria-label="Track Location">Track</Nav.Link>
//           </Nav>
//           <Nav>
//             <Nav.Link href="tel:112" className="btn bg-danger" aria-label="Emergency SOS">Emergency SOS</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComponent;

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="bg-warning">
      <Container>
        <Navbar.Brand href="/" aria-label="Home">Vehicle Threat Detection System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* Add `mr-2` or `me-2` (for Bootstrap 5) to add margin to the right of the "Driver Page" button */}
            <Nav.Link href="/surveillance" className="text-dark btn bg-light me-2" aria-label="Driver Page">Driver Page</Nav.Link>
            <Nav.Link href="/location" className="text-dark btn bg-light" aria-label="Track Location">Track</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="tel:112" className="btn bg-danger" aria-label="Emergency SOS">Emergency SOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

