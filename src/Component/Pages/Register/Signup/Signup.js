import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
    const {
        register,
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => console.log(data);
      return (
        <div className="flex h-screen justify-center items-center">
          <div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 className=" text-center text-xl font-bold text-accent">Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      class="input input-bordered w-full max-w-xs"
                      {...register("Name")}
                    />
                  </div>
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      class="input input-bordered w-full max-w-xs"
                      {...register("Email", {
                        required: true,
                      })}
                    />
                  </div>
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      class="input input-bordered w-full max-w-xs"
                      {...register("Password", { required: true, maxLength: 8 })}
                    />
                  </div>
    
                  <button class="btn w-full mt-3 capitalize text-white" type="submit">
                    Signup
                  </button>
                </form>
    
                <small className="text-accent text-center">
                  Already Have An Account ?{" "}
                  <Link className=" text-secondary font-semibold" to="/login">
                    Login
                  </Link>
                </small>
                <div class="divider">OR</div>
                <button className="btn btn-outline btn-accent  capitalize w-full">
                   Continue With Google
                  </button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Signup;
