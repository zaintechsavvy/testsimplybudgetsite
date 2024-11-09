import { Footer, Navbar } from '../../components';
import {Pricing} from '../../sections';

const SecondPage = () => (
  <div className="bg-primary-black overflow-hidden">
     <Navbar />
    <div className="relative">
      <Pricing />
      <div className="gradient-04 z-0" />
      <Pricing />
    </div>
    <Footer />
  </div>
);

export default SecondPage;