'use client';

import Nav from '../components/Nav';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import userServices from '@/app/services/user';
import { useEffect, useState } from 'react';
import { Progress } from 'antd';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  position: string;
  userType: string;
  department: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    userServices
      .getUserDetails()
      .then((responseData) => {
        console.log(responseData);
        setUser(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="mx-auto mt-4 flex w-full max-w-5xl flex-col px-6">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Profile Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and information.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                First name
              </dt>
              <dd className="relative mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user && user.firstName}
                <button className="absolute right-0 top-0 -translate-y-2 translate-x-2 transform rounded px-2 py-1 font-semibold text-stone-800 hover:underline focus:outline-none">
                  Edit
                </button>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Last name
              </dt>
              <dd className="relative mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user && user.lastName}
                <button className="absolute right-0 top-0 -translate-y-2 translate-x-2 transform rounded px-2 py-1 font-semibold text-stone-800 hover:underline focus:outline-none">
                  Edit
                </button>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email address
              </dt>
              <dd className="relative mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user && user.email}
                <button className="absolute right-0 top-0 -translate-y-2 translate-x-2 transform rounded px-2 py-1 font-semibold text-stone-800 hover:underline focus:outline-none">
                  Edit
                </button>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Department
              </dt>
              <dd className="relative mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user && user.department}
                <button className="absolute right-0 top-0 -translate-y-2 translate-x-2 transform rounded px-2 py-1 font-semibold text-stone-800 hover:underline focus:outline-none">
                  Edit
                </button>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Position
              </dt>
              <dd className="relative mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user && user.position}
                <button className="absolute right-0 top-0 -translate-y-2 translate-x-2 transform rounded px-2 py-1 font-semibold text-stone-800 hover:underline focus:outline-none">
                  Edit
                </button>
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-4">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Personal progress
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            progress and remarks.
          </p>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Academic Involvement
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <Progress
                    percent={14.9}
                    strokeColor={{ from: '#ff6384', to: '#87d068' }}
                  />
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Student Development
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <Progress
                    percent={20.29}
                    strokeColor={{ from: '#ff6384', to: '#87d068' }}
                  />
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Administrative Bucket
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <Progress
                    percent={90.93}
                    strokeColor={{ from: '#ff6384', to: '#87d068' }}
                  />
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Research Bucket
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <Progress
                    percent={50.55}
                    strokeColor={{ from: '#ff6384', to: '#87d068' }}
                  />
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Consultancy Bucket
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <Progress
                    percent={75.2}
                    strokeColor={{ from: '#ff6384', to: '#87d068' }}
                  />
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Product Dev. Bucket
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <Progress
                    percent={80}
                    strokeColor={{ from: '#ff6384', to: '#87d068' }}
                  />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
