import React, { useEffect, useState } from 'react';
import { getMemos, updateMemo } from '../api';
import MemoModal from './Modal/MemoModal';
import { AiOutlineEllipsis } from "react-icons/ai";

const MemoList = ({ memos, handleDelete, handleEdit, isEditing, editingMemo, setMemos, setIsEditing, setEditingMemo }) => {
  //モーダル用
  const [showEditDelete, setShowEditDelete] = useState(false);
  //現在選択されているメモを管理するための状態
  const [selectedMemo, setSelectedMemo] = useState(null);

  useEffect(() => {
    const getMemoData = async () => {
      try {
        const response = await getMemos();
        setMemos(response.memos || []);
      } catch (error) {
        console.log(error);
      }
    };
    getMemoData();
  }, [setMemos]);

  const handleUpdate = async (updatedMemo) => {
    try {
      await updateMemo(updatedMemo);
      setMemos(memos.map(memo => memo.id === updatedMemo.id ? updatedMemo : memo));
      handleCloseEdit();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    setEditingMemo(null);
  };

  const showEditDeleteModal = (memo) => {
    setSelectedMemo(memo);
    setShowEditDelete(true);
  }

  const closeEditDeleteModal = () => {
    setShowEditDelete(false);
    setSelectedMemo(null);
  }

  return (
    <>
      <div className='flex flex-col items-center p-4'>
        <div className='border-2 mt-4 w-full h-auto max-w-xl p-2'>
          <p className="text-lg font-semibold mb-2">メモ</p>
          <ul>
            {memos.map((memo) => (
              <div key={memo.id} className="flex items-center justify-between p-2 border-b border-gray-200 relative">
                <li className="flex-grow text-gray-800">
                  <a href="#" className="hover:underline">{memo.note}</a>
                </li>
                <div className="relative">
                  <button
                    onClick={() => showEditDeleteModal(memo)}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <AiOutlineEllipsis
                      size={30}
                      className='text-gray-600 hover:text-gray-400 transition-colors duration-300'
                    />
                  </button>
                  {showEditDelete && selectedMemo?.id === memo.id && (
                    <div className="absolute right-0 top-0 mt-8 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
                      <button
                        className="w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100"
                        onClick={() => {
                          handleEdit(memo.id);
                          closeEditDeleteModal();
                        }}
                      >
                        編集
                      </button>
                      <button
                        className="w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100"
                        onClick={() => {
                          handleDelete(memo.id);
                          closeEditDeleteModal();
                        }}
                      >
                        削除
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
      {isEditing && (
        <MemoModal
          text="保存"
          onClose={handleCloseEdit}
          onSave={handleUpdate}
          editingMemo={editingMemo}
        />
      )}
    </>
  )
}

export default MemoList;


