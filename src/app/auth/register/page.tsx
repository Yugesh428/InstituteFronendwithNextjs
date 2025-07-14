import { ChangeEvent, FormEvent, useState } from "react";
import { IRegisterData } from "./registertype";
import { registerUser } from "@/lib/store/auth/authSlice";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import { Status } from "@/lib/types/type";

function Register() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((store) => store.auth);

  const [data, setData] = useState<IRegisterData>({
    username: "",
    email: "",
    password: "",
  });

  const handleRegisterDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    dispatch(registerUser(data));
  };

  return (
    <>
      <h1>This is register page, will be great soon..</h1>
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <img
              className="mx-auto h-12 w-auto"
              src="https://www.svgrepo.com/show/499664/user-happy.svg"
              alt="User Icon"
            />
            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up for an account
            </h2>
            <form
              onSubmit={handleRegisterSubmission}
              className="space-y-6"
              method="POST"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={data.username}
                    onChange={handleRegisterDataChange}
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={handleRegisterDataChange}
                    autoComplete="email"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={handleRegisterDataChange}
                    autoComplete="current-password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  {status === Status.LOADING
                    ? "Registering..."
                    : "Register Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
