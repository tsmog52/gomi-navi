import React from 'react'
import { BsPlusSquare } from "react-icons/bs";
import MemoModal from '../Modal/MemoModal';

const AddMemoButton = ({ isOpen, open, close}) => {

  return (
    <div>
      <button onClick={open}>
        <BsPlusSquare size={20} />
        {isOpen &&
        <MemoModal
          isOpen={isOpen}
          onClose={close}
          text="メモを作成"
        />}
      </button>
    </div>
  )
}

export default AddMemoButton
