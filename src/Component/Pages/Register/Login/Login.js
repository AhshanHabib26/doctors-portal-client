import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import Loading from "../../../Loading/Loading";

const Login = () => {

  const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
  const [ signInWithEmailAndPassword, user, loading, error, ] = useSignInWithEmailAndPassword(auth);
  const { register, handleSubmit} = useForm();
  const location = useLocation()
  const navigate = useNavigate()

  let from = location.state?.from?.pathname || "/";

  useEffect( () =>{
    if (user || gUser) {
      navigate(from, { replace: true });
      toast.success('Welcome! My Doctors Portal Hub')
    }
  },[user, gUser, location, navigate, from])

  useEffect( () =>{
    if(error){
      toast.error('User Not Found')
    }
  },[error])


  if(loading || gLoading){
    return <Loading/>
  }



  
  const onSubmit = (data) => {
    signInWithEmailAndPassword( data.Email, data.Password)
    
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className=" text-center text-xl font-bold text-accent">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("Email", {
                    required: true,
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("Password", { required: true, maxLength: 8 })}
                />
              </div>

              <button className="btn w-full mt-3 capitalize text-white" type="submit">
                Login
              </button>
            </form>

            <small className="text-accent text-center">
              New To Doctors Portal?{" "}
              <Link className=" text-secondary font-semibold" to="/signup">
                Create An Account
              </Link>
            </small>
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent  capitalize w-full">
               Continue With Google
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
