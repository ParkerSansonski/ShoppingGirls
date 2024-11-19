"use client";

//Components Flowbite
import { Footer } from "flowbite-react";

//Img
import logo from "../assets/img/clothes_logo.png";

export default function FooterCpt() {
  return (
    <Footer container className="border border-pink-100 mt-10">
      <div className="w-full text-center">
        <div className="w-full justify-between items-center sm:flex sm:items-center sm:justify-between">
          <Footer.Brand alt="Shein x Shoppink Logo" href="/" src={logo} />
          <Footer.LinkGroup className="flex gap-2">
              <Footer.Link href="/">Inicio</Footer.Link>
              <Footer.Link href="/client">Outfits</Footer.Link>
              <Footer.Link href="/">Política de privacidad</Footer.Link>
              <Footer.Link href="/contact">Contacto</Footer.Link>
            </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright by="Shoppings x Girls" href="#" year={2023} />
      </div>
    </Footer>
  );
}
