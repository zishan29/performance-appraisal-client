'use client';

import Link from 'next/link';
import { Button, message } from 'antd';

const categories = [
  {
    AI: [
      'Certifications for courses',
      'Taught Courses',
      'Guest lectures',
      'Industrial lectures',
      'Co-curricular',
      'Mini project',
      'Lab work / Case study',
      'Course / Lab outcome',
      'Innovations',
      'Contributions',
    ],
  },
];

export default function TopNav({ categoryName }: { categoryName: String }) {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Coming soon!');
  };
  return (
    <>
      <nav className="sticky top-10 mt-10 flex h-max w-4/12 flex-col gap-3 overflow-y-auto px-3">
        <div>{categoryName}</div>
        {contextHolder}
        {categories[0].AI.map((category, index) => (
          <Link
            key={category}
            onClick={info}
            href={`#`}
            className="w-full px-2 py-1 hover:bg-dark-brown hover:text-white"
          >
            -{category}
          </Link>
        ))}
      </nav>
    </>
  );
}
