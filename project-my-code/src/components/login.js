import React ,{useContext,useState} from 'react'
import '../style.css'
import {FoodContext} from './context'
import { Link , Redirect } from 'react-router-dom';
import Home from './home';
import Register from './register';
import axios from 'axios';

const Login = () => {
	const [user,setUser]=useState({username:"",passworld:""})
	const context = useContext(FoodContext)
	const {login,isLogin,loginData,ModifData}=context;
	
	const HandleSubmit=e=>{
        e.preventDefault();
        axios.post("http://localhost:5000/auth/login",{
            username:user.username,
            passworld:user.passworld
        })
        .then((res)=>{
			ModifData(res.data)
			isLogin()
			setUser({username:"",passworld:""});
        })
        .catch((err)=>console.log(err))
    }
	if (context.login===true)
	{
		
		return <Redirect to='/home'/>;

	}
	else
	{
		
		return (
     
			<div class="container">
		<div className="d-flex justify-content-center h-100">
			<div className="card">
				<div className="card-header">
					<h3>Sign In</h3>
					<div className="d-flex justify-content-end social_icon">
						<span><i className="fab fa-facebook-square"></i></span>
						<span><i className="fab fa-google-plus-square"></i></span>
						<span><i className="fab fa-twitter-square"></i></span>
					</div>
				</div>
				<div className="card-body">
					<form>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" className="form-control" value={user.username} onChange={e=>setUser({...user,username:e.target.value})} placeholder="username" />
							
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" className="form-control" value={user.passworld} onChange={e=>setUser({...user,passworld:e.target.value})} placeholder="password" />
						</div>
						<div className="row align-items-center remember">
							<input type="checkbox" />Remember Me
						</div>
						<div className="form-group">
							<button className="btn float-right login_btn" type="submit" onClick={HandleSubmit}  ><a href="/register">Login</a></button>
						</div>
					</form>
				</div>
				<div className="card-footer">
					<div className="d-flex justify-content-center links">
						Don't have an account?<a href="/register">Sign Up</a>
					</div>
					<div className="d-flex justify-content-center">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
		
		)	

	}
	
		
    
}

export default Login;
