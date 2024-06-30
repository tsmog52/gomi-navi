import { useState } from 'react';

//コンポーネント名変えたい
const useAccordion = () => {
  const [isAccordion, setIsAccordion] = useState(null);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggleAccordion = (index) => {
    if (isAccordion === index) {
      setIsAccordion(null);
    } else {
      setIsAccordion(index);
    }
  };

  return {
    isAccordion,
    setIsAccordion,
    open,
    close,
    toggleAccordion
  };
};



export default useAccordion;
