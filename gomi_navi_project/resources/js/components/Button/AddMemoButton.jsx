import React, { useEffect } from 'react';
import useModal from '../../hooks/useModal';
import MemoModal from '../Modal/MemoModal';
import { getMemos } from '../../api';
import { useRecoilState } from 'recoil';
import { memoState } from '../../states/memoState';

const AddMemoButton = () => {
  const { isOpen, open, close } = useModal();
  const [memos, setMemos] = useRecoilState(memoState);

  useEffect(() => {
    const fetchMemos = async () => {
      try {
        const response = await getMemos();
        setMemos(response.memos || []);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMemos();
  }, []);

  const onSave = async (savedMemo) => {
    try {
      const response = await getMemos();
      setMemos(response.memos || []);
    } catch (error) {
      console.error('Error fetching memos:', error.message);
    }
  };

  return (
    <div>
      <button
        onClick={open}
        className='bg-white p-2 text-green-600  rounded-3xl hover:text-white hover:bg-green-500 transition-colors duration-300 text-sm sm:text-base '
      >
        メモを追加
      </button>

      {isOpen &&
        <MemoModal
          isOpen={isOpen}
          onClose={close}
          onSave={onSave}
          title="新しいメモを作成"
          text="メモを作成"
        />}
    </div>
  );
}

export default AddMemoButton;
