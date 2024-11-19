import { useContext, useState } from "react";
import UserContext from "../context/User/UserContext";

//Components Flowbite
import { Button, ToggleSwitch } from "flowbite-react";
import { useNavigate } from "react-router-dom";

//Components
import NavbarCpt from "../components/NavbarCpt";
import FooterCpt from "../components/FooterCpt";

//Constants
import accessories from "../constants/accessoriesData";

const Accessories = () => {

  //Navigate
  const navigate = useNavigate();

  const [accesoriosSelected, setAccesoriosSelected] = useState([]);

  //Context
  const { email, pass, img, colors, pieces,clothes, setData } = useContext(UserContext);

  //Funcion para guardar los colores en el estado global.
  const handleSaveAccessories = () => {
    if (accesoriosSelected.length > 0) {
      const data = {
        email: email,
        pass: pass,
        img: img,
        colors: colors,
        pieces: pieces,
        clothes: clothes,
        accesories: accesoriosSelected,
        price: 0,
      };

      setData(data);

      alert("Accesorios guardados.");

      navigate("/videos");
    } else {
      alert("Debes seleccionar al menos 1 conjunto con accesorios.");
    }
  };

  //Funcion para actualizar el estado de los colores seleccionados.
  const handleAccesoriesSelect = (accessories) => {
    const actuallyAccesories = [...accesoriosSelected];
    if (actuallyAccesories.includes(accessories)) {
        actuallyAccesories.splice(actuallyAccesories.indexOf(accessories), 1);
    } else if (actuallyAccesories.length < 1) {
        actuallyAccesories.push(accessories);
    } else {
      alert("Solo puedes seleccionar un kit de accesorios.");
    }
    setAccesoriosSelected(actuallyAccesories);
  };

  return (
    <div>
      <NavbarCpt />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">
          ¡Elige tus accesorios para combinar con el mejor outfit!
        </h1>
        <p>Sesión iniciada con: {email}</p>

        <div className="flex flex-wrap text-center justify-center align-center gap-5 my-5 sm:gap-10">
          {accessories.map((accessories) => {
            return (
              <div key={accessories.id} className="border rounded-xl overflow-hidden sm:mx-9 ">
                <div
                  className="w-full sm:w-80 bg-gray-100"
                >
                  <img
                    className="object-cover sm:w-full"
                    src={new Image().src = accessories.img}
                    alt={accessories.name}
                  />
                </div>
                <div className="p-5">
                  <h5 className="text-xl font-bold tracking-tight text-gray-500">
                    {accessories.name}
                  </h5>
                  <div
                    className="flex justify-center align-center pt-1"
                    id="toggle"
                  >
                    <ToggleSwitch
                      checked={accesoriosSelected.includes(accessories)}
                      label="Quiero estos accesorios"
                      onChange={() => {
                        handleAccesoriesSelect(accessories);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Button
          type="submit"
          gradientDuoTone="purpleToPink"
          onClick={handleSaveAccessories}
          className="mt-5"
        >
          Guardar accesorios
        </Button>
      </div>
      <FooterCpt />
    </div>
  );
};

export default Accessories;
