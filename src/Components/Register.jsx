import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const { signup, googleSignIn } = useAuth();
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
         return setError('Passwords do not match');
      }

      try {
         setError('');
         setLoading(true);
         await signup(email, password);
         toast.success("Account Created Successfully");
         navigate('/login');
      } catch {
         setError('Failed to create an account');
         toast.error("Failed to create an account");
      }

      setLoading(false);
   };

   const handleGoogleSignIn = async () => {
      try {
         setError('');
         setLoading(true);
         await googleSignIn();
         toast.success("Account Created Successfully with Google");
         navigate('/dashboard');
      } catch {
         setError('Failed to sign up with Google');
         toast.error('Failed to sign up with Google');
      }

      setLoading(false);
   };

   return (
      <section className="bg-gray-50 dark:bg-gray-900">
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                     Create an account
                  </h1>
                  {error && <div className="text-red-500">{error}</div>}
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                     <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                           type="email"
                           name="email"
                           id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@company.com"
                           required
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>
                     <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input
                           type="password"
                           name="password"
                           id="password"
                           placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>
                     <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input
                           type="password"
                           name="confirm-password"
                           id="confirm-password"
                           placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required
                           onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                     </div>
                     <div className="flex items-start">
                        <div className="flex items-center h-5">
                           <input
                              id="terms"
                              aria-describedby="terms"
                              type="checkbox"
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                              required
                           />
                        </div>
                        <div className="ml-3 text-sm">
                           <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                              I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a>
                           </label>
                        </div>
                     </div>
                     <button
                        type="submit"
                        className="w-full bg-slate-900 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        disabled={loading}
                     >
                        Create an account
                     </button>
                     <button
                        type="button"
                        className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                     >
                        Sign up with Google
                     </button>
                     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Register;
