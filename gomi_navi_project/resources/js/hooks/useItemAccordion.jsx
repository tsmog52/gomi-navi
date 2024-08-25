import { useState } from 'react';

const useItemAccordion = (initialItemName) => {
  const [currentItemName, setCurrentItemName] = useState(initialItemName);

  const toggleAccordion = (itemName) => {
    setCurrentItemName((prevItemName) =>
      prevItemName === itemName ? null : itemName
    );
  };

  return { currentItemName, toggleAccordion };
};

export default useItemAccordion;
