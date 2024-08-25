import React, { useEffect, useState } from 'react';
import { getMemos, updateMemo } from '../api';
import MemoModal from './Modal/MemoModal';
import { AiOutlineEllipsis } from "react-icons/ai";
import { useRecoilState } from 'recoil';
import MemoDetailModal from './Modal/MemoDetailModal';
import { memoState } from '../states/memoState';

  const MemoList = ({ handleDelete, handleEdit, isEditing, editingMemo, setIsEditing, setEditingMemo, onSave }) => {
  // モーダル用の状態
  const [showEditDelete, setShowEditDelete] = useState(false);
  // 現在選択されているメモを管理するための状態
  const [selectedMemo, setSelectedMemo] = useState(null);
  const [memos, setMemos] = useRecoilState(memoState);
  const [showDetailModal, setShowDetailModal] = useState(false);

  //メモデータの取得
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

  //編集モーダルを閉じる
  const handleCloseEdit = () => {
    setIsEditing(false);
    setEditingMemo(null);
  };

  //編集・削除メニューを表示
  const showEditDeleteModal = (memo) => {
    setSelectedMemo(memo);
    setShowEditDelete(true);
  }

  //編集・削除メニューを閉じる
  const closeEditDeleteModal = () => {
    setShowEditDelete(false);
    setSelectedMemo(null);
  }

  const handleMemoClick = (memo) => {
    setSelectedMemo(memo);
    setShowDetailModal(true);
  };

  return (
    <>
      <div className='flex flex-col items-center p-4'>
        <div className='border-2 mt-4 w-full h-auto max-w-xl p-2'>
          <p className="text-lg font-semibold mb-2">メモ</p>
          <ul>
            {memos.map((memo) => (
              <div key={memo.id} className="flex items-center justify-between p-2 border-b border-gray-200 relative">
                <li className="flex-grow text-gray-800">
                  <button
                  className="hover:underline"
                  onClick={() => handleMemoClick(memo)}
                  >
                    {memo.title}
                  </button>
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
                      <button
                        className="w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100"
                        onClick={closeEditDeleteModal}
                      >
                        戻る
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
          onSave={onSave}
          editingMemo={editingMemo}
        />
      )}
      {showDetailModal && (
        <MemoDetailModal
          memo={selectedMemo}
          onClose={() => setShowDetailModal(false)}
        />
      )}
    </>
  )
}

export default MemoList;

