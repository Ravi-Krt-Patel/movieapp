/* eslint-disable jsx-a11y/alt-text */

import { useState,useEffect } from "react"
import "./series.css";
export const SeriesHome = ()=> {
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
	{item.map((e)=>(
		
		<div className="series-container" >
			<h3>{e.title}</h3>
			<img className="series-img" src={e.images["Poster Art"].url}/>
		</div>
	))}
	</>)
}