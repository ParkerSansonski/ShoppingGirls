import { useContext } from "react";
import UserContext from "../context/User/UserContext";
import { useNavigate } from "react-router-dom";

//Constants
import tiktoks from "../constants/tiktoksData";

//Components
import NavbarCpt from "../components/NavbarCpt";
import FooterCpt from "../components/FooterCpt";

//Components Flowbite
import { Button } from "flowbite-react";

const Videos = () => {

  //Navigate
  const navigate = useNavigate();

  //Context
  const { email } = useContext(UserContext);

  const handleContinue = () => {
    alert("Checkout en proceso...");

    navigate("/checkout");
  };

  return (
    <div>
      <NavbarCpt />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">
          ¿Necesitas ideas de maquillaje? ¡Mira estos TikToks!
        </h1>
        <p>Sesión iniciada con: {email}</p>
        <div className="flex flex-wrap mt-8">
          {tiktoks.map((tiktok) => (
            <iframe
              key={tiktok.id}
              className="w-full h-screen mb-10 rounded-2xl overflow-hidden z-0"
              src={tiktok.url}
              scrolling="no"
              allow="encrypted-media;"
            ></iframe>
          ))}
        </div>
        <Button
          type="submit"
          gradientDuoTone="purpleToPink"
          onClick={handleContinue}
        >
          Continuar al checkout
        </Button>
      </div>
      <FooterCpt />
    </div>
  );
};

export default Videos;
