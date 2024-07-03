import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(prev => !prev);
  };

  const close = () => {
    setIsOpen(prev => !prev);
  };

  return {
    isOpen,
    open,
    close,
  };
};

export default useModal;
