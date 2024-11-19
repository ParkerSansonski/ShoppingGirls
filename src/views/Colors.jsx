import { useContext, useState } from "react";
import UserContext from "../context/User/UserContext";

//Components Flowbite
import { Button, ToggleSwitch } from "flowbite-react";

//Components
import NavbarCpt from "../components/NavbarCpt";
import FooterCpt from "../components/FooterCpt";

//Constants
import colors from "../constants/colorsData";
import { useNavigate } from "react-router-dom";

const Colors = () => {
  //Navigate
  const navigate = useNavigate();

  const [coloresSelected, setColoresSelected] = useState([]);

  //Context
  const { email, pass, img, setData } = useContext(UserContext);

  //Funcion para guardar los colores en el estado global.
  const handleSaveColors = () => {
    if (coloresSelected.length > 0) {
      const data = {
        email: email,
        pass: pass,
        img: img,
        colors: coloresSelected,
        pieces: [],
        clothes: "",
        accesories: "",
        price: 0,
      };

      setData(data);

      alert("Colores guardados.");

      navigate("/pieces");
    } else {
      alert("Debes seleccionar al menos 1 color.");
      console.log(coloresSelected);
    }
  };

  //Funcion para actualizar el estado de los colores seleccionados.
  const handleColorSelect = (color) => {
    const actuallyColors = [...coloresSelected];
    if (actuallyColors.includes(color)) {
      actuallyColors.splice(actuallyColors.indexOf(color), 1);
    } else if (actuallyColors.length < 3) {
      actuallyColors.push(color);
    } else {
      alert("Solo puedes seleccionar 3 colores");
    }
    setColoresSelected(actuallyColors);
  };

  return (
    <div>
      <NavbarCpt />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">
          ¡Elige tus colores favoritos para crear el mejor outfit!
        </h1>
        <p>Sesión iniciada con: {email}</p>

        <div className="flex flex-wrap text-center justify-center align-center gap-8 my-5">
          {colors.map((color) => {
            return (
              <div key={color.id} className="border rounded-xl overflow-hidden">
                <div
                  style={{ backgroundColor: color.class }}
                  className="w-96 h-48 sm:w-80"
                ></div>
                <div className="p-5">
                  <h5 className="text-xl font-bold tracking-tight text-gray-500">
                    {color.name}
                  </h5>
                  <div
                    className="flex justify-center align-center pt-1"
                    id="toggle"
                  >
                    <ToggleSwitch
                      checked={coloresSelected.includes(color)}
                      label="Quiero este color"
                      onChange={() => {
                        handleColorSelect(color);
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
          onClick={handleSaveColors}
          className="mt-5"
        >
          Guardar colores
        </Button>
      </div>
      <FooterCpt />
    </div>
  );
};

export default Colors;
