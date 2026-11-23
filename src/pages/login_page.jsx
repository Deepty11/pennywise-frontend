import { Button, TextField } from "@mui/material";

const LoginPage = () => {
    return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
        
        {/* Left Side: Image container */}
        <div className="w-full md:w-1/2 h-72 md:h-96 flex items-center justify-center bg-[#FDF8F0] overflow-hidden p-4">
          <img
            src="/coin_jar.jpeg"
            alt="Coin Jar"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-6 text-orange-800 text-center italic">
            Welcome to Pennywise
          </h1>
          
          <div className="flex flex-row items-center justify-center">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              size="small"
            />
          </div>

          <div className="flex flex-col gap-1 items-center mt-4">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              size="small"
            />
            <label className="text-sm text-blue-500 hover:text-blue-700 hover:underline cursor-pointer items-start">
              Forget Password?
            </label>
          </div>

          <div className="flex flex-row gap-2 items-center mt-4 justify-center">
            <Button variant="contained" color="primary" size="small">
                Login
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-center mt-4 justify-center">
           <label className="text-gray-500">or</label>
           <label className="font-bold text-blue-500 hover:text-blue-700 hover:underline cursor-pointer">
             Sign Up
           </label>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;