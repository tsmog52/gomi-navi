import axios from 'axios';
export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// CSRFトークンの取得
export const fetchCsrfCookie = async () => {
  try {
    await axiosInstance.get('/sanctum/csrf-cookie');
  } catch (error) {
    console.error('CSRFトークンの取得に失敗しました:', error);
  }
};

// クッキーからデータを取得
export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

// メモの取得
export const getMemos = async () => {
  try {
    const response = await axiosInstance.get('/api/memo');
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

// メモの作成
export const postMemo = async (inputData) => {
  try {
    await fetchCsrfCookie();
    const response = await axiosInstance.post('/api/memo/create', inputData);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

// メモの更新
export const updateMemo = async (updateMemo) => {
  try {
    await fetchCsrfCookie();
    const response = await axiosInstance.put(`/api/memo/${updateMemo.id}`, updateMemo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// メモの削除
export const deleteMemo = async (id) => {
  try {
    await fetchCsrfCookie();
    const response = await axiosInstance.delete(`/api/memo/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 特定のメモの取得
export const getMemoById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/memo/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
