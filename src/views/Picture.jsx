import { useContext } from "react";
import UserContext from "../context/User/UserContext";
import { useNavigate } from "react-router-dom";

//Components Flowbite
import { Button } from "flowbite-react";

//Components
import NavbarCpt from "../components/NavbarCpt";
import FooterCpt from "../components/FooterCpt";

//Images
import image from "../assets/img/result_1.png";
import image_2 from "../assets/img/result_2.png";

const Picture = () => {
  //Navigate
  const navigate = useNavigate();

  //Context
  const { email } = useContext(UserContext);

  //Funcion para guardar la imagen en el estado global.
  const handleRestart = () => {
    alert("¡Gracias por usar Shoppink! ¡Vuelve pronto!");

    navigate("/");
  };

  return (
    <div>
      <NavbarCpt />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">¡Este es tu mejor estilo!</h1>
        <p>Sesión iniciada con: {email}</p>

        <div className="my-10 flex flex-wrap gap-12 items-center justify-center">
          <img
            src={image}
            alt="Imagen"
            className="w-80 border rounded-xl"
          />

          <img
            src={image_2}
            alt="Imagen 2"
            className="w-56 border rounded-xl"
          />
        </div>

        <Button
          type="submit"
          gradientDuoTone="purpleToPink"
          onClick={handleRestart}
        >
          Ir a inicio
        </Button>
      </div>
      <FooterCpt />
    </div>
  );
};

export default Picture;
