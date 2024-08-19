import React, { useEffect } from 'react';
import { BsPlusSquare } from "react-icons/bs";
import useModal from '../../hooks/useModal';
import MemoModal from '../Modal/MemoModal';
import { getMemos } from '../../api'; // APIからメモリストを取得する関数
import { useRecoilState } from 'recoil';
import { memoState } from '../../states/memoState';

const AddMemoButton = () => {
  const { isOpen, open, close } = useModal();
  const [memos, setMemos] = useRecoilState(memoState);

  useEffect(() => {
    // メモリストの変更を監視し、コンポーネントを更新する
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
      // メモの保存が成功した場合、メモリストを再取得して更新
      const response = await getMemos();
      setMemos(response.memos || []);
    } catch (error) {
      console.error('Error fetching memos:', error.message);
    }
  };

  return (
    <div>
      <button onClick={open}>
        <BsPlusSquare size={20} />
        {isOpen &&
          <MemoModal
            isOpen={isOpen}
            onClose={close}
            onSave={onSave}
            text="メモを作成"
          />}
      </button>
    </div>
  );
}

export default AddMemoButton;

