import Guidelines from '../components/Guidelines';
import Nav from '../components/Nav';

const Page = () => {
  return (
    <>
      <main className="main bg-light-gray min-h-screen text-gray-900">
        <Nav />
        <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8">
          <Guidelines />
        </div>
      </main>
    </>
  );
};

export default Page;
