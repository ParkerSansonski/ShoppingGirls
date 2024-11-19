import { useContext, useState } from "react";
import UserContext from "../context/User/UserContext";
import { useNavigate } from "react-router-dom";

//Components Flowbite
import { Button, ToggleSwitch } from "flowbite-react";

//Components
import NavbarCpt from "../components/NavbarCpt";
import FooterCpt from "../components/FooterCpt";

//Constants
import pieces from "../constants/piecesData";

const Pieces = () => {

  //Navigate
  const navigate = useNavigate();

  const [piecesSelected, setPiecesSelected] = useState([]);

  //Context
  const { email, pass, img, colors, setData } = useContext(UserContext);

  //Funcion para guardar las piezas en el estado global.
  const handleSavePieces = () => {
    if (piecesSelected.length > 0) {
      const data = {
        email: email,
        pass: pass,
        img: img,
        colors: colors,
        pieces: piecesSelected,
        clothes: "",
        accesories: "",
        price: 0,
      };

      setData(data);

      alert("Conjunto guardado.");

      navigate("/clothes");
    } else {
      alert("Debes seleccionar al menos 1 conjunto.");
    }
  };

  //Funcion para actualizar el estado de las piezas colores seleccionados.
  const handleColorSelect = (color) => {
    const actuallyPieces = [...piecesSelected];
    if (actuallyPieces.includes(color)) {
      actuallyPieces.splice(actuallyPieces.indexOf(color), 1);
    } else if (actuallyPieces.length < 1) {
      actuallyPieces.push(color);
    } else {
      alert("Solo puedes seleccionar 1 conjunto.");
    }
    setPiecesSelected(actuallyPieces);
  };

  return (
    <div>
      <NavbarCpt />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">
          ¡Elige tus conjuntos favoritos para vestir a la moda!
        </h1>
        <p>Sesión iniciada con: {email}</p>

        <div className="flex flex-wrap text-center justify-center align-center gap-5 my-5">
          {pieces.map((pieces) => {
            return (
              <div key={pieces.id} className="border rounded-xl overflow-hidden">
                <div
                  className="w-full h-42 sm:w-80"
                >
                  <img src={pieces.img} alt={pieces.name} />
                </div>
                <div className="p-5">
                  <h5 className="text-xl font-bold tracking-tight text-gray-500">
                    {pieces.name}
                  </h5>
                  <div
                    className="flex justify-center align-center pt-1"
                    id="toggle"
                  >
                    <ToggleSwitch
                      checked={piecesSelected.includes(pieces)}
                      label="Quiero este conjunto"
                      onChange={() => {
                        handleColorSelect(pieces);
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
          onClick={handleSavePieces}
          className="mt-5"
        >
          Guardar conjunto
        </Button>
      </div>
      <FooterCpt />
    </div>
  );
};

export default Pieces;
