import React from "react";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from "../../firebase.init";



const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword,user, error,] = useCreateUserWithEmailAndPassword(auth);
    // const [createUserWithEmailAndPassword,user,loading, error,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updateError] = useUpdateProfile(auth);
    // const navigate=useNavigate()
    // let location = useLocation();
    // let from = location.state?.from?.pathname || "/";
   
  let userError;

  if(error || googleError ||updateError){
    userError=<p className="text-sm text-red-500 mb-2">{error?.message || googleError?.message ||updateError?.message}</p>
      console.log(error)
  }
  console.log(user,googleUser)
    const onSubmit = async (data) => {

        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({ displayName : data.name });
        // navigate('/')
    
    };
  
    return (
        <div  className="flex justify-center h-screen items-center">
        <div className="card shadow-2xl shadow-blue-500 w-4/12 ">
  <div className="card-body ">
   <h1 className="text-3xl font-bold text-center uppercase text-[#002341]">Register </h1>
  <form onSubmit={handleSubmit(onSubmit)}>
  <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
         data-aos="fade-right"
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full  max-w-lg"
          {...register("name", {
              required: {
                value: true,
                message: 'Name is required'
              },
              minLength: {
              value: 3,
              message: 'Your name must be 3 charecter .' 
            }
          })}
          
        />
        <label className="label">
           
        {errors?.name?.type==='required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}
        {errors?.name?.type==='minLength' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}
        </label>


        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
         data-aos="fade-left"
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full  max-w-lg"
          {...register("email", {
              required: {
                value: true,
                message: 'Email address is required'
              },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: 'Your email is valid .'
            }
          })}
          
        />
        <label className="label">
           
        {errors?.email?.type==='required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
        {errors?.email?.type==='pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
        </label>


        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
         data-aos="fade-right"
          type="password"
          placeholder="Your Password"
          className="input input-bordered w-full max-w-lg "
          {...register("password", {
              required: {
                value: true,
                message: 'Password address is required'
              },
              minLength: {
              value: 6,
              message: 'Your password must be 6 charecter .' 
            }
          })}
          
        />
        <label className="label">
           
        {errors?.password?.type==='required' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
        {errors?.password?.type==='minLength' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
        </label>
{userError}
    
        <input data-aos="fade-left" className="btn  bg-[#002341] text-center w-full" type="submit" value="Register" />
      </form>

      <div className="divider">OR</div>
      <div className="flex justify-between mb-1">
          <p className="text-sm">Already have an account? <Link to='/login' className="text-red-500 hover:underline">Login </Link></p>
          <button className="text-sm text-red-500 hover:underline">Reset Password</button>
      </div>
      <p></p>
      <button  onClick={() =>signInWithGoogle()} className='w-full btn btn-outline btn-accent'>Continue with google</button>
  </div>
</div>

    </div>
    );
};

export default Register;