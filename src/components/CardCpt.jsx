"use client";

//Components Flowbite
import { Card } from "flowbite-react";

export default function CardCpt({ data }) {
  return (
    <Card
      imgAlt="Product"
      imgSrc={data.imgUrl}
      className="w-36 sm:w-52"
    >
      <h5 className="text-sm sm:text-2xl font-bold tracking-tight text-pink-400">
        <p>
            $ {data.precio} MXN
        </p>
      </h5>
    </Card>
  );
}
