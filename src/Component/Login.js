import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../index";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
    console.log(isAuthenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${server}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <section className="bg-white p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-400"
          />
        </div>
        <div>
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-400"
          />
        </div>
        <div>
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
        <div className="text-center">
          <h4>Or</h4>
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </section>
  </div>
  
  );
};

export default Login;
