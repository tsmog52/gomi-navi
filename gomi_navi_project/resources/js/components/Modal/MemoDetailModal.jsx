import React from 'react';

const MemoDetailModal = ({ memo, onClose }) => {
  if (!memo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">{memo.title}</h2>
        <p className="text-lg mb-4">{memo.details}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          閉じる
        </button>
      </div>
    </div>
  );
};

export default MemoDetailModal;
