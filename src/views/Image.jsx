import { useContext, useState } from "react";
import UserContext from "../context/User/UserContext";
import { useNavigate } from "react-router-dom";

//Components Flowbite
import { FileInput, Label, Button } from "flowbite-react";

//Components
import NavbarCpt from "../components/NavbarCpt";
import FooterCpt from "../components/FooterCpt";

const Colors = () => {

  //Navigate
  const navigate = useNavigate();

  //Context
  const { email, pass, setData } = useContext(UserContext);

  //State
  const [imageURL, setImageURL] = useState(null);

  //Función para subir imagen temporalmente.
  const handleUploadImg = (e) => {
    const file = e.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  //Funcion para guardar la imagen en el estado global.
  const handleSaveImg = () => {
    const data = {
      email: email,
      pass: pass,
      img: imageURL,
      colors: [],
      pieces: [],
      clothes: "",
      accesories: "",
      price: 0
    }

    //Seteamos la informacion con su respectiva imagen.
    setData(data);
    console.log(data);
    //Redirigimos a la vista de colores.
    navigate("/colors");
  }

  return (
    <div>
      <NavbarCpt />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">
          Sube tu mejor fotografía, ¡al estilo de Shoppink!
        </h1>
        <p>Sesión iniciada con: {email}</p>

        <div className="m-10">
          <div className="max-w-md" id="fileUpload">
            <div className="mb-2 block">
              <Label htmlFor="file" value="Subir fotografía" />
            </div>
            <FileInput
              helperText="¡Elige una imagen en donde ilumines tu mejor outfit!"
              id="file"
              type="file"
              accept="image/*"
              onChange={handleUploadImg}
            />
          </div>
        </div>

        {
            //Si existe la imagen, la muestra.
            imageURL && (
            <div className="mb-10">
                <img src={imageURL} alt="Imagen subida" className="w-80 border rounded-xl"/>
            </div>    
            )
        }

        <Button
          type="submit"
          gradientDuoTone="purpleToPink"
          onClick={handleSaveImg}
        >
          Subir imagen
        </Button>
      </div>
      <FooterCpt />
    </div>
  );
};

export default Colors;
