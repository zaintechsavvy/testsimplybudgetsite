import { Footer, Navbar } from '../components';
import {VisaInfo} from '../sections';

const SecondPage = () => (
  <div className="bg-primary-black overflow-hidden">
     <Navbar />
    <div className="relative">
      <VisaInfo />
      <div className="gradient-04 z-0" />
      <VisaInfo />
    </div>
    <Footer />
  </div>
);

export default SecondPage;
