/* eslint-disable jsx-a11y/alt-text */

import {useContext} from "react";
import { CartContext } from "../CardContext";

export const Detail = ()=>{

	const {item} = useContext(CartContext);

	return (<>
	<h1>{item.title}</h1>
	<img className="detail" src={item.images["Poster Art"].url} />
	<p>description : {item.description}</p>
	<p>releaseYear : {item.releaseYear}</p>
	</>)
}