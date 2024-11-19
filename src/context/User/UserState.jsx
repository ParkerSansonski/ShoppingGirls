//Definicion del estado y funciones que alteran ese estado.
import { useState } from 'react';
import UserContext from './UserContext';

const UserState = ({ children }) => {

    const initialState = {
        email: "example@gmail.com",
        pass: null,
        img: null,
        colors: [],
        pieces: [],
        clothes: "",
        accesories: "",
        price: 0
    }

    const [state, setState] = useState(initialState)

    const setData = (data) => {
        setState(data);
    }

    return (
        <UserContext.Provider value={{ 
            email: state.email,
            pass: state.pass,
            img: state.img,
            colors: state.colors,
            pieces: state.pieces,
            clothes: state.clothes,
            price: state.price,
            accesories: state.accesories,
            setData
         }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserState;