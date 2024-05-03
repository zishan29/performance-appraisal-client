'use client';

import Nav from '../components/Nav';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import userServices from '@/app/services/user';
import { useEffect, useState } from 'react';
import { Progress } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

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

interface Progress {
  name: string;
  percentage: number;
  color: string;
}

interface Response {
  'Academic Involvement': number;
  'Student Development': number;
  'Administrative Bucket': number;
  'Research Bucket': number;
  'Consultancy and Corporate': number;
  'Product Dev. Bucket': number;
}

const Profile = () => {
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [department, setDepartment] = useState<string | null>(null);
  const [position, setPosition] = useState<string | null>(null);
  const [isEditingFirstName, setIsEditingFirstName] = useState<boolean>(false);
  const [isEditingLastName, setIsEditingLastName] = useState<boolean>(false);
  const [isEditingEmail, setIsEditingEmail] = useState<boolean>(false);
  const [isEditingDepartment, setIsEditingDepartment] =
    useState<boolean>(false);
  const [isEditingPosition, setIsEditingPosition] = useState<boolean>(false);
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    userServices
      .getUserDetails()
      .then((responseData) => {
        console.log(responseData);
        setFirstName(responseData.firstName);
        setLastName(responseData.lastName);
        setEmail(responseData.email);
        setDepartment(responseData.department);
        setPosition(responseData.position);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    userServices
      .getUserProgress()
      .then((responseData) => {
        console.log(responseData);
        const copy: Progress[] = [
          {
            name: 'Academic Involvement',
            percentage: Number(responseData.progress['Academic Involvement']),
            color: '#ff6384',
          },
          {
            name: 'Student Development',
            percentage: 80.82,
            color: '#ff9f40',
          },
          {
            name: 'Administrative Bucket',
            percentage: 50.22,
            color: '#ffcd56',
          },
          {
            name: 'Research Bucket',
            percentage: 46.32,
            color: '#4bc0c0',
          },
          {
            name: 'Consultancy and Corporate',
            percentage: 60,
            color: '#36a2eb',
          },
          {
            name: 'Product Dev. Bucket',
            percentage: 30.33,
            color: '#9966ff',
          },
        ];
        setProgress(copy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateUser = () => {
    setIsEditingFirstName(false);
    setIsEditingLastName(false);
    setIsEditingEmail(false);
    setIsEditingDepartment(false);
    setIsEditingPosition(false);
    const updatedData = {
      firstName,
      lastName,
      email,
      department,
      position,
    };
    userServices
      .updateUserDetails(updatedData)
      .then((responseData) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-white">
        <Nav />
        <div className="mx-auto mt-4 flex w-full max-w-5xl flex-col px-6">
          <div className="px-4 sm:px-0">
            <h3 className="flex items-center gap-3 text-base font-semibold leading-7 text-gray-900">
              Profile Information{' '}
              {loading ? (
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{ fontSize: 15, color: 'black' }}
                      spin
                    />
                  }
                />
              ) : (
                ''
              )}
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
                  {isEditingFirstName ? (
                    <input
                      type="text"
                      value={firstName as string}
                      className="border border-x-0 border-t-0 border-b-black bg-transparent focus:outline-none"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  ) : (
                    firstName
                  )}
                  <button
                    className="absolute right-0 top-0 -translate-y-2 translate-x-2 transform rounded px-2 py-1 font-semibold text-stone-800 hover:underline focus:outline-none"
                    onClick={() => setIsEditingFirstName(true)}
                  >
                    Edit
                  </button>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Last name
                </dt>
                <dd className="relative mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {isEditingLastName ? (
                    <input
                      type="text"
                      value={lastName as string}
                      className="border border-x-0 border-t-0 border-b-black bg-transparent focus:outline-none"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  ) : (
                    lastName
                  )}
                  <button
                    className="absolute right-0 top-0 -translate-y-2 translate-x-2 transform rounded px-2 py-1 font-semibold text-stone-800 hover:underline focus:outline-none"
                    onClick={() => setIsEditingLastName(true)}
                  >
                    Edit
                  </button>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="relative mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {isEditingEmail ? (
                    <input
                      type="text"
                      value={email as string}
                      className="border border-x-0 border-t-0 border-b-black bg-transparent focus:outline-none"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    email
                  )}
                  <button
                    className="absolute right-0 top-0 -translate-y-2 translate-x-2 transform rounded px-2 py-1 font-semibold text-stone-800 hover:underline focus:outline-none"
                    onClick={() => setIsEditingEmail(true)}
                  >
                    Edit
                  </button>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Department
                </dt>
                <dd className="relative mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {isEditingDepartment ? (
                    <input
                      type="text"
                      value={department as string}
                      className="border border-x-0 border-t-0 border-b-black bg-transparent focus:outline-none"
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  ) : (
                    department
                  )}
                  <button
                    className="absolute right-0 top-0 -translate-y-2 translate-x-2 transform rounded px-2 py-1 font-semibold text-stone-800 hover:underline focus:outline-none"
                    onClick={() => setIsEditingDepartment(true)}
                  >
                    Edit
                  </button>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Position
                </dt>
                <dd className="relative mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {isEditingPosition ? (
                    <input
                      type="text"
                      value={position as string}
                      className="border border-x-0 border-t-0 border-b-black bg-transparent focus:outline-none"
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  ) : (
                    position
                  )}
                  <button
                    className="absolute right-0 top-0 -translate-y-2 translate-x-2 transform rounded px-2 py-1 font-semibold text-stone-800 hover:underline focus:outline-none"
                    onClick={() => setIsEditingPosition(true)}
                  >
                    Edit
                  </button>
                </dd>
              </div>
              {isEditingFirstName ||
              isEditingLastName ||
              isEditingEmail ||
              isEditingDepartment ||
              isEditingPosition ? (
                <div className="grid items-center justify-center pt-4">
                  <button
                    className="flex w-16 items-center justify-center rounded bg-stone-800 px-2 py-1 text-white"
                    onClick={updateUser}
                  >
                    Save
                  </button>
                </div>
              ) : (
                ''
              )}
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
                {progress.map((category) => (
                  <div
                    key={category.name}
                    className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                  >
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      {category.name}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <Progress
                        percent={Number(category.percentage.toFixed(2))}
                        strokeColor={{ from: category.color, to: '#87d068' }}
                        format={() => (
                          <span className="text-gray-900">{`${category.percentage.toFixed(2)}%`}</span>
                        )}
                      />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
