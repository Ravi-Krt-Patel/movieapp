import {useState,useEffect} from "react";

export const MovieHome= ()=>{
	const [item,setItem] = useState([])
	useEffect(()=>{
		getAlldata();
	},[])

	async function getAlldata(){
		let res = await fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json");
		let data = await res.json();
		let f_data= data.entries.filter((e)=>{
			if(e.programType === "movie"){
				return true;
			}
		});
		setItem(f_data);
		console.log(f_data);
	}
	return (<>
	<h1>All data for movie</h1>
	{item.map((e)=>(
		<div className="series-container" >
			<h3>{e.title}</h3>
			<img className="series-img" src={e.images["Poster Art"].url}/>
		</div>
	))}
	</>)
}