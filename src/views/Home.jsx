"use client";

//Components
import FooterCpt from "../components/FooterCpt";
import NavbarCpt from "../components/NavbarCpt";
import "flowbite/dist/flowbite.min.css";

//Components Flowbite
import { Carousel } from "flowbite-react";
import CardCpt from "../components/CardCpt";

//Data
import products from "../constants/productsData";

function Home() {
  return (
    <div>
      <NavbarCpt />
      <h1 className="font-bold text-xl">Bienvenido, es un gusto verte de nuevo.</h1>
      <p>¡Aprovecha las grandes ofertas que tenemos para ti en este 2023!</p>

      <Carousel className="h-32 mt-4 sm:my-7 sm:h-96">
        <img
          alt="..."
          src="https://img.ltwebstatic.com/images3_ccc/2023/09/26/ed/16957044207142a5e79265890b6f4d0f4171974ebe.webp"
        />
        <img
          alt="..."
          src="https://img.ltwebstatic.com/images3_ccc/2023/09/11/28/16944176303dd1f06c18cb4a57aae8990f0fee2458_thumbnail_2000x.webp"
        />
        <img
          alt="..."
          src="https://img.ltwebstatic.com/images3_ccc/2023/09/05/35/1693880157d041ef7cb9fd131a985eec724819fff1.webp"
        />
        <img
          alt="..."
          src="https://img.ltwebstatic.com/images3_ccc/2023/08/31/e6/16934489085f416f81a9a01dc50ef6fd44047cd490_thumbnail_2000x.webp"
        />
        <img
          alt="..."
          src="https://img.ltwebstatic.com/images3_ccc/2023/08/31/b0/1693467289a87813ebd7f65ecb8381f1944388e262.webp"
        />
      </Carousel>

      <div className="flex flex-wrap text-center justify-center align-center gap-5 my-5">
        {
            products.map((product) => {
                return <CardCpt data={product} key={product.id} />
            })
        }
      </div>

      <FooterCpt />
    </div>
  );
}

export default Home;
