import { useContext, useEffect, useState, useRef } from "react";
import UserContext from "../context/User/UserContext";
import { useNavigate } from "react-router-dom";

//Components
import NavbarCpt from "../components/NavbarCpt";
import FooterCpt from "../components/FooterCpt";

//Components Flowbite
import { Button, Table, Label, TextInput } from "flowbite-react";

const Checkout = () => {
  //navigate
  const navigate = useNavigate();

  const coupon = Math.floor(Math.random() * 200) + 100;
  const points = Math.floor(Math.random() * 100) + 50;

  //State
  const [price, setprice] = useState(0);

  //Logica de negocio
  const generateRandomPrice = () => {
    // Genera un número aleatorio entre 100 y 500
    const randomPrice = Math.floor(Math.random() * 400) + 500;

    setprice(randomPrice);
  };

  //Context
  const { email } = useContext(UserContext);

  //Refs
  const addressRef = useRef();

  const handleDoCheckout = () => {
    if (!addressRef.current.value == "") {
      alert("Productos pagados...");

      navigate("/picture");
    } else {
      alert("Debes ingresar una dirección de envío.");
    }
  };

  useEffect(() => {
    generateRandomPrice();
  }, []);

  return (
    <div>
      <NavbarCpt />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">
          ¡No esperes más! Tu outfit perfecto te esta esperando
        </h1>
        <p>Sesión iniciada con: {email}</p>
        <div className="w-full my-8">
          <div className="border-t pt-5">
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Dirección de envío:" />
            </div>
            <TextInput
              id="address"
              placeholder="Ingresa tu dirección"
              required
              shadow
              type="text"
              ref={addressRef}
            />
          </div>
          <div className="border-t mt-10 py-5">
            <h3 className="font-bold text-xl">Detalles de compra</h3>
          </div>
          <Table hoverable>
            <Table.Head className="text-center">
              <Table.HeadCell>Elemento</Table.HeadCell>
              <Table.HeadCell>Detalle</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              <Table.Row className="bg-white">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  Forma de pago
                </Table.Cell>
                <Table.Cell>Tarjeta de débito/crédito</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  Precio al por menor
                </Table.Cell>
                <Table.Cell className="line-through	">$ MXN {price}</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  Subtotal
                </Table.Cell>
                <Table.Cell className="font-bold">
                  $ MXN {price - 89}
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  Precio de envío
                </Table.Cell>
                <Table.Cell>Gratuito</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  Garantía de envío
                </Table.Cell>
                <Table.Cell className="font-bold">$ MXN 19</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  Código de descuento
                  <p className="text-xs text-gray-400">
                    (Código de cupón: xJ12MES)
                  </p>
                </Table.Cell>
                <Table.Cell className="text-orange-600">
                  - $ MXN {coupon}
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  Puntos Shein
                  <p className="text-xs text-gray-400">(Puntos: {points})</p>
                </Table.Cell>
                <Table.Cell className="text-orange-600">
                  - $ MXN {points}
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white border-t-4 border-solid border-gray-400">
                <Table.Cell className="whitespace-nowrap text-gray-900">
                  <p className="font-bold text-xl">Total</p>
                </Table.Cell>
                <Table.Cell className="font-bold text-sm">
                  $ MXN {price - 89 - coupon - points + 19}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>

        <Button
          type="submit"
          gradientDuoTone="purpleToPink"
          onClick={handleDoCheckout}
        >
          Pagar productos
        </Button>
      </div>
      <FooterCpt />
    </div>
  );
};

export default Checkout;
