import React, { useState } from 'react'
import { BsPlusSquare } from "react-icons/bs";
import useModal from '../../hooks/useModal';
import MemoModal from '../Modal/MemoModal';

const AddMemoButton = () => {
  const {isOpen, open, close} = useModal(true);

  return (
    <div>
      <button onClick={open}>
        <BsPlusSquare size={20} />
        {isOpen && <MemoModal isOpen={isOpen}/>}
      </button>
    </div>
  )
}

export default AddMemoButton
