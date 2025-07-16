import AboutPage from '@/components/About/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About",
};
const About = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default About;