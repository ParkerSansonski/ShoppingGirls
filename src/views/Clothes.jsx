import { useContext, useEffect, useState } from "react";
import UserContext from "../context/User/UserContext";
import { useNavigate } from "react-router-dom";

//Components Flowbite
import { Button, ToggleSwitch } from "flowbite-react";

//Components
import NavbarCpt from "../components/NavbarCpt";
import FooterCpt from "../components/FooterCpt";

//Constants
import { vestidos, camisas, tops, shorts, pantalones, faldas  } from "../constants/clothesData";

const Clothes = () => {

  //Navigate
  const navigate = useNavigate();

  const [clothes, setClothes] = useState([]);

  const [clothesSelected, setClothesSelected] = useState([]);

  //Context
  const { email, pass, img, colors, pieces, setData } = useContext(UserContext);

  //Funcion para controlar los items de la vestimenta.
  const chargeClothes = () => {

    //Si no hay piezas seleccionadas, se ponen por default los vestidos.
    const expression = pieces.length > 0 ? pieces[0].name : "Vestido";

    switch (expression) {
      case "Vestido": {
        setClothes(vestidos);
        break;
      }
      case "Camisa": {
        setClothes(camisas);
        break;
      }
      case "Top": {
        setClothes(tops);
        break;
      }
      case "Short": {
        setClothes(shorts);
        break;
      }
      case "Pantalon": {
        setClothes(pantalones);
        break;
      }
      case "Falda": {
        setClothes(faldas);
        break;
      }
      default: {
        console.log("No se ha seleccionado ninguna pieza.");
        break;
      }
    }
  }

  useEffect(() => {
    chargeClothes();
  }, []);

  //Funcion para guardar la vestimenta en el estado global.
  const handleSaveClothes = () => {
    console.log(clothesSelected);
    if (clothesSelected.length > 0) {
      const data = {
        email: email,
        pass: pass,
        img: img,
        colors: colors,
        pieces: pieces,
        clothes: clothesSelected,
        price: 0,
      };

      setData(data);
      alert("Vestimenta guardada.");

      navigate("/accessories");
    } else {
      alert("Debes seleccionar al menos 1 vestimenta.");
    }
  };

  //Funcion para actualizar el estado de la vestimenta seleccionada.
  const handleClothesSelect = (clt) => {
    const actuallyClothes = [...clothesSelected];
    if (actuallyClothes.includes(clt)) {
        actuallyClothes.splice(actuallyClothes.indexOf(clt), 1);
    } else if (actuallyClothes.length < 1) {
        actuallyClothes.push(clt);
    } else {
      alert("Solo puedes seleccionar 1 vestimenta");
    }
    setClothesSelected(actuallyClothes);
  };

  return (
    <div>
      <NavbarCpt />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">
          ¡Elige la vestimenta que más te guste!
        </h1>
        <p>Sesión iniciada con: {email}</p>

        <div className="flex flex-wrap text-center justify-center align-center gap-5 my-5">
          {clothes.map((clt) => {
            return (
              <div key={clt.id} className="border rounded-xl overflow-hidden">
                <div
                  className="w-full h-42 sm:w-80"
                >
                  <img src={clt.img} alt={clt.name} />
                </div>
                <div className="p-5">
                  <h5 className="text-xl font-bold tracking-tight text-gray-500">
                    {clt.name}
                  </h5>
                  <div
                    className="flex justify-center align-center pt-1"
                    id="toggle"
                  >
                    <ToggleSwitch
                      checked={clothesSelected.includes(clt)}
                      label="Quiero esta vestimenta"
                      onChange={() => {
                        handleClothesSelect(clt);
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
          onClick={handleSaveClothes}
          className="mt-5"
        >
          Guardar vestimenta
        </Button>
      </div>
      <FooterCpt />
    </div>
  );
};

export default Clothes;
