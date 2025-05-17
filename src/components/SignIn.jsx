import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const SignIn = () => {
    const {signInUser}= use(AuthContext);
    const handleSignIn=(e)=>{
        e.preventDefault();
        const form =e.target;
        const formData = new FormData(form);
        const email = formData.get("email");
        const password= formData.get("password");

        console.log({email,password});

        signInUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);

            const signInInfo ={
                email,
                lastSignInTime:user.metadata.lastSignInTime
            }

            fetch(`http://localhost:5000/users`,{
                method:"PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(signInInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        })
        .catch(error=>{
            const errorCode =error.code;
            const errorMessage =error.message;
            alert(errorCode,errorMessage)
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In now!</h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
    );
};

export default SignIn;