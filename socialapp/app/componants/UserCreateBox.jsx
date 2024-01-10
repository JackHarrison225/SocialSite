'use client';
import {useState, useEffect} from 'react'
const UserCreateBox = () => {
const [userObject, setuserObject] = useState({})
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
		if (!userObject.name || !userObject.password) {
			console.log("there is an error no input");
			setIsError(true);
			setTimeout(() => {
				setIsError(false);
			}, 3000);
			return;
		}
		if(userObject.password == userObject.password2){
			setUser((prevUser) => {
				const updatedUser = [...prevUser, userObject];
				localStorage.setItem('user', JSON.stringify(updatedUser));
				return updatedUser;
			});
			setIsSuccess(true);
			setuserObject({});
			setTimeout(() => {
				resetInputs();
				setIsSuccess(false);
			}, 3000);
		}
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
				</div>     
			</form>
		</div>

  	)
}

export default UserCreateBox