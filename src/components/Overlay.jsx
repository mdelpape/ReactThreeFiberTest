import { Scroll } from "@react-three/drei";

import PropTypes from 'prop-types';

const Section = ({ children }) => {
  console.log(children)
  return (
    <section
      className="h-[650px] flex items-center p-10 flex-col justify-center"
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-s w-full">
          <div className="bg-white rounded-lg px-8 py-8" >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;

export const Overlay = () => {
  return (
    <Scroll html>
      <Section>
        <h1 className="text-3xl font-bold text-center">Scroll down</h1>
      </Section>
      <Section>
        <h1 className="text-3xl font-bold text-center">Scroll down</h1>
      </Section>
      <Section>
        <h1 className="text-3xl font-bold text-center">Scroll down</h1>
      </Section>
      <Section>
        <h1 className="text-3xl font-bold text-center">Scroll down</h1>
      </Section>
    </Scroll>
  );
}