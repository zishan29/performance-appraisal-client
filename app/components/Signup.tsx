'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

interface Errors {
  firstName: string[];
  lastName: string[];
  password: string[];
  confirmPassword: string[];
  email: string[];
}

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState(
    'Electronics and Computer Science',
  );
  const [position, setPosition] = useState('Assistant professor');
  const [errors, setErrors] = useState<Errors | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('token')) {
        (async () => {
          try {
            let res = await fetch(
              'https://performance-appraisal-api.adaptable.app/verifyToken',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem('token') }),
              },
            );
            if (res.status === 200) {
              router.push('/');
            }
          } catch (err) {
            console.log(err);
          }
        })();
      }
    }
  });

  async function signupUser(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      userType: 'user',
      department: department,
      position: position,
    };

    try {
      let res = await fetch(
        'https://performance-appraisal-api.adaptable.app/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      if (res.ok) {
        let resData = await res.json();
        console.log(resData);
        localStorage.setItem('token', resData.token);
        localStorage.setItem('id', resData.user._id);
        router.push('/');
      }
      if (res.status === 400) {
        const resData = await res.json();
        setErrors(resData.errors);
        console.log(resData.errors);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="relative flex max-w-md flex-col rounded-md bg-white p-4 text-black lg:w-96">
        <div className="mb-2 text-center text-2xl font-bold text-[#1e0e4b]">
          Welcome
        </div>
        <div className="mb-4 text-center text-sm font-normal text-[#1e0e4b]">
          Sign Up to create a account
        </div>
        <form className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"
              ></input>
              <div className="text-sm text-gray-600">
                {errors ? (errors.firstName ? errors.firstName[0] : '') : ''}
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
                className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"
              ></input>
              <div className="text-sm text-gray-600">
                {errors ? (errors.lastName ? errors.lastName[0] : '') : ''}
              </div>
            </div>
          </div>
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
            <div className="text-sm text-gray-600">
              {errors ? (errors.email ? errors.email[0] : '') : ''}
            </div>
          </div>
          <div className="flex gap-2">
            <div>
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
              <div className="text-sm text-gray-600">
                {errors ? (errors.password ? errors.password[0] : '') : ''}
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600"
              >
                confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"
              ></input>
              <div className="text-sm text-gray-600">
                {errors
                  ? errors.confirmPassword
                    ? errors.confirmPassword[0]
                    : ''
                  : ''}
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="department"
              className="mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600"
            >
              Department
            </label>
            <select
              name=""
              id="department"
              className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 bg-transparent p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="Electronics and Computer Science">
                Electronics and Computer Science
              </option>
              <option value="Electronics and Telecommunication">
                Electronics and Telecommunication
              </option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information and Technology">
                Information and Technology
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="position"
              className="mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600"
            >
              Position
            </label>
            <select
              name=""
              id="position"
              className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 bg-transparent p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="Assistant professor">Assistant professor</option>
              <option value="Associate professor">Associate professor</option>
              <option value="Professor">Professor</option>
            </select>
          </div>
          <button
            onClick={signupUser}
            className="m-auto w-max rounded bg-stone-900 px-6 py-2 text-sm font-normal text-white hover:bg-stone-700 active:bg-stone-800"
          >
            Submit
          </button>
        </form>
        <div className="mt-[1.6rem] text-center text-sm">
          Already have an account?{' '}
          <a className="text-sm text-stone-900 underline" href="/login">
            Login
          </a>
        </div>
      </div>
    </>
  );
}
