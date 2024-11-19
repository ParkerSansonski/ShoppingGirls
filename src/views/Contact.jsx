"use client";

//Components Flowbite
import { Button, Label, TextInput, Textarea, Checkbox } from "flowbite-react";

//Components
import NavbarCpt from "../components/NavbarCpt";
import FooterCpt from "../components/FooterCpt";

export default function Contact() {
  const handleContact = () => {
    alert("Correo enviado...");
  };

  return (
    <div>
      <NavbarCpt />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">¡Estamos a tus ordenes, para lo que necesites!</h1>

        <div className="m-10">
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Correo electrónico" />
              </div>
              <TextInput
                id="email2"
                placeholder="Ingresa tu correo electrónico"
                required
                shadow
                type="email"
              />
            </div>
            <div className="max-w-md" id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Tu mensaje" />
              </div>
              <Textarea
                id="comment"
                placeholder="Deja un comentario..."
                required
                rows={4}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label className="flex" htmlFor="agree">
                <p>Acepto recibir publicidad y que me contacten por correo.</p>
              </Label>
            </div>
            <Button type="submit" onClick={handleContact} gradientDuoTone="purpleToPink">Enviar correo</Button>
          </form>
        </div>
      </div>
      <FooterCpt />
    </div>
  );
}
