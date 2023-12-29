"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/ph-logistics-lg-logo.png";
import Image from "next/image";
const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="fixed-top navbar-bg">
      <Container>
        <Link
          className="navbar-brand fs-5 fw-bold text-light text-uppercase"
          href="/"
        >
          <Image
            src={logo}
            alt="PH Logistics logo"
            className="img-fluid"
            priority
            width={130}
            height={130}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className="nav-link text-uppercase text-primary fw-bold mx-2"
              href="/"
            >
              Home
            </Link>
            <Link
              className="nav-link text-uppercase text-primary fw-bold mx-2"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="nav-link text-uppercase text-primary fw-bold mx-2"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="nav-link text-uppercase text-primary fw-bold mx-2"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="btn btn-primary text-light text-uppercase mx-2"
              href="tel:+233549485984"
            >
              <FaPhoneAlt /> Call Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
