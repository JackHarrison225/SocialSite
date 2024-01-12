'use client';
import {useState, useEffect} from 'react'
import Link from 'next/link'

const UserCreateBox = () => {
const [userObject, setuserObject] = useState({name:"", password:"", password2:"" , posts:[], PFP: "", status: ""})
const [isSuccess, setIsSuccess] = useState(false)
const [isError, setIsError] = useState(false)
const [user, setUser] = useState([])

const handleInputChange = (event) => {
     console.log(event.target.name)
	setuserObject({
		...userObject,
		[event.target.name]: event.target.value
	})
}
const setCurrentUser = () => {
	let currentUser = {name : userObject.name , password : userObject.password};
	localStorage.setItem('currentUser', JSON.stringify(currentUser));
	return console.log(currentUser);
};
const resetInputs = () =>  {
     const inputs = document.getElementById("my-form").elements;

     for (let i = 0; i < inputs.length; i++) {
          inputs[i].setAttribute("disabled", "");
     }
}

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (!user) return;
		setUser(user);
	}, [])
	const handleSubmit = (event) => {
		event.preventDefault();
		let userCreated = false
		if (!userObject.name || !userObject.password) {
			console.log("there is an error no input");
			setIsError(true);
			setTimeout(() => {
				setIsError(false);
			}, 3000);
			return;
		}
		for(let i in user){
			if(user[i].name == userObject.name){return console.log("user exists")}
		}
		if(userObject.password == userObject.password2 && /^(?=.*[a-zA-Z0-9])(?=.*[\W_]).{8,20}$/g.test(userObject.password) == true ){
			setCurrentUser()
			setUser((prevUser) => {
				const updatedUser = [...prevUser, userObject];
				localStorage.setItem('user', JSON.stringify(updatedUser));
				return updatedUser;
			});
			console.log("user Create")
			userCreated = true
			console.log(userCreated)
			setIsSuccess(true);
			setuserObject({});
			setTimeout(() => {
				resetInputs();
				setIsSuccess(false);
			}, 3000); 
			
		}
		console.log(userCreated)

		if (userCreated == true){return( document.location.href=("./profilePage"))}
	};
  	return (
		<div>
			<h3 className='text-center text-3xl'>Sign Up For Dino Book</h3>
			<form className='bg-[#71df99] w-96 h-56 rounded-xl flex flex-col px-5 py-5'
			id="my-form" onSubmit={handleSubmit}>
				<label htmlFor="name" className='ml-[2%]'>Email or Username:</label>
				<input name='name' className='bg-[#b9d9f8] rounded-full text-center placeholder-[#808080]' 
				placeholder='JohnDoe@email.com' onChange={handleInputChange} value={userObject.name}/>
				
				<label htmlFor="password" className='ml-[2%]'>Password:</label>
				<input  name='password' type='password' 
				className='bg-[#b9d9f8] rounded-full text-center placeholder-[#808080]' 
				placeholder='********' onChange={handleInputChange} value={userObject.password}/>

				<label htmlFor="password2" className='ml-[2%]'>Repeat Password:</label>
				<input  name='password2' type='password' 
				className='bg-[#b9d9f8] rounded-full text-center placeholder-[#808080]' 
				placeholder='********' onChange={handleInputChange} value={userObject.password2}/>
				<div className='flex gap-5 justify-center pt-[10px]'>
					<button className='bg-[#4CAF50] py-1 px-2 rounded-full' 
					type='submit' >Sign Up</button>
					<Link href={"./"} className='bg-[#4CAF50] py-1 px-2 rounded-full'>Sign In</Link>
				</div>     
			</form>
		</div>

  	)
}

export default UserCreateBox