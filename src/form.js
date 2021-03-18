import React,{useState} from 'react';

export default function Appp(){
	const[state,setState]=useState({
		name:"",
		email:"",
		password:""		
});
const handleInputChange=(event)=>{
	setState((reprops)=>({
		// ...prevprops,
		[event.target.name]:event.target.value,
}));
}
const handleSumbit=(event)=>{
	event.preventDefault();
	console.log(state);
};

	return(
		<div>
			<form onSumbit={handleSumbit}>
			<div>
				<label>Name</label>
				<input 	type="text"
					name="name"
					value={state.name}
					onChange={handleInputChange}/>
			</div>

			<div>
				<label>Email</label>
				<input 	type="text"
					name="email"
					value={state.email}
					onChange={handleInputChange}/>
			</div>
			<div>
				<label>Password</label>
				<input 	type="password"
					name="password"
					value={state.password}
					onChange={handleInputChange}/>
			</div>
			<div>
				<label></label>
				<button type="submit" >Login</button>
			</div>
			</form>
		</div>
			
		
);
} 