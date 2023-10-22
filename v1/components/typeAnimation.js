import { TypeAnimation } from 'react-type-animation';

const TypeAni = () => {
  return (
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={[
        '꾸준히 발전해나가는',
        2000,
        '항상 고민하는',
        2000,
        '호기심이 많은',
        2000,
        '더 나은 미래를 꿈꾸는',
        2000,
      ]}
      speed={30} // Custom Speed from 1-99 - Default Speed: 40
      style={{ fontSize: '' }}
      wrapper='span' // Animation will be rendered as a <span>
      repeat={Infinity} // Repeat this Animation Sequence infinitely
    />
  );
};

export default TypeAni;
