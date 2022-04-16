/* eslint-disable jsx-a11y/alt-text */
import { useState,useEffect,useContext } from "react";
import {CartContext} from "../CardContext";
import {Link} from "react-router-dom";
import "./series.css";
export const SeriesHome = ()=> {
	const {provider} = useContext(CartContext);
	const [item,setItem] = useState([])
	useEffect(()=>{
		getAlldata();
	},[]);
	async function getAlldata(){
		let res = await fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json");
		let data = await res.json();
		let f_data= data.entries.filter((e)=>{
			if(e.programType === "series"){
				return true;
			}
		});
		setItem(f_data);
		console.log(f_data);
	}
	return (<>
	<h1>all data for series</h1>
	<div id="series-container" >
	{item.map((e)=>(
		<Link to = "/detail" >
		 <div onClick={()=>{
			 provider(e);
		 }} className="series-container" >
			
			<img className="series-img" src={e.images["Poster Art"].url}/>
			<h3>{e.title}</h3>
		 </div>
		</Link>
		

	))}
	</div>
	
	</>)
}