import { Footer, Navbar } from '../../components';
import {Pricing} from '../../sections';

const RealPricingPage = () => (
  <div className="bg-primary-black overflow-hidden">
     <Navbar />
    <div className="relative">
      <Pricing />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default RealPricingPage;