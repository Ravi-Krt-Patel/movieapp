

import {createContext,useState} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{

	const [item,setItem] = useState({});
	const provider = (p)=>{
		setItem(p);
	}
	return (
		<CartContext.Provider value={{item,provider}} >
			{children}
		</CartContext.Provider>
	)
}
