import React from 'react'
import { IoSearch } from "react-icons/io5";

const InputField = ({ value, onChange, placeholder, onClick }) => {
  return (
    <div className='relative w-96 m-5 ml-12'>
      <input
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className='p-1 border-2 rounded pr-14 w-full'
      />
      <button
        onClick={onClick}
        className='absolute top-1/2 right-0 transform -translate-y-1/2 p-2 hover:bg-gray-200 rounded-r'
      >
        <IoSearch size={20} className='text-gray-400' />
      </button>
    </div>
  )
}

export default InputField

