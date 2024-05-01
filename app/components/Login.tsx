'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import userServices from '../services/user';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('token')) {
        userServices
          .verifyToken({ token: localStorage.getItem('token') })
          .then(() => {
            router.push('/');
          })
          .catch((err) => {
            if (err.response.status === 401) {
              router.push('/login');
            }
          });
      }
    }
  }, []);

  async function loginUser(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    let data = {
      email: email,
      password: password,
    };

    userServices
      .login(data)
      .then((responseData) => {
        console.log(responseData);
        localStorage.setItem('token', responseData.token);
        localStorage.setItem('id', responseData.userData._id);
        router.push('/');
      })
      .catch((err) => {
        if (err.response.status === 403) {
          setErrorMessage(err.response.data.info.message);
        }
      });
  }

  return (
    <>
      <div className="relative flex max-w-md flex-col rounded-md bg-white p-4 text-black lg:w-80">
        <div className="mb-2 text-center text-2xl font-bold text-[#1e0e4b]">
          Welcome back
        </div>
        <div className="mb-4 text-center text-sm font-normal text-[#1e0e4b]">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3">
          <div className="relative block">
            <label
              htmlFor="email"
              className="mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"
            ></input>
          </div>
          <div className="relative block">
            <label
              htmlFor="password"
              className="mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"
            ></input>
          </div>
          <div className="text-center text-sm text-gray-500">
            {errorMessage ? errorMessage : ''}
          </div>
          <button
            onClick={loginUser}
            className="m-auto w-max rounded bg-fuchsia-600 px-6 py-2 text-sm font-normal text-white hover:bg-fuchsia-500 active:bg-fuchsia-700"
          >
            Submit
          </button>
        </form>
        <div className="mt-[1.6rem] text-center text-sm">
          Don’t have an account yet?{' '}
          <a className="text-sm text-fuchsia-600" href="/signup">
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}
