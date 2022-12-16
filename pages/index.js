import { Navbar } from '../components';
import { Explore } from '../sections';

const Page = () => (
  <div className="bg-dark-brown h-[100vh] top-0 right-0 bottom-0 left-0 fixed sm:relative overflow-scroll">
    <Navbar />
    <Explore />
  </div>
);

export default Page;
