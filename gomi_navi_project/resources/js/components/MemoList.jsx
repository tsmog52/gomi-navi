import React, { useEffect } from 'react';
import { getMemos, updateMemo, deleteMemo, getMemoById } from '../api';
import MemoModal from './Modal/MemoModal';

const MemoList = ({ memos, handleDelete, handleEdit, isEditing, editingMemo, setMemos, setIsEditing, setEditingMemo }) => {
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

  return (
    <>
      <div className='flex flex-col items-center p-4'>
        <div className='border-2 mt-4 w-full h-auto max-w-xl p-2'>
          <p>メモ</p>
          <ul>
            {memos.map((memo) => (
              <div key={memo.id} className="flex items-center justify-between p-2 border-b border-gray-200">
                <li className="flex-grow text-gray-800">
                  <a href="#" className="hover:underline">{memo.note}</a>
                </li>
                <div className="flex space-x-2">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(memo.id)}
                  >
                    削除
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleEdit(memo.id)}
                  >
                    編集
                  </button>
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

