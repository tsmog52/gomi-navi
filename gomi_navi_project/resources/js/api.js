import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// CSRFトークンの取得
const fetchCsrfCookie = async () => {
  try {
    const response = await axiosInstance.get('/sanctum/csrf-cookie');
    console.log('CSRFトークンが設定されました', document.cookie);
  } catch (error) {
    console.error('CSRFトークンの取得に失敗しました:', error);
  }
};
//

// メモの取得
export const getMemos = async () => {
  try {
    await fetchCsrfCookie();
    const response = await axiosInstance.get('/api/memo');
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const postData = async (inputData) => {
  try {
    await fetchCsrfCookie();
    const response = await axiosInstance.post('/api/memo/create', inputData);
    console.log('Success:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // サーバーがエラー応答を返した場合
      console.error('Error Status:', error.response.status);
    } else {
      console.error(error.message);
    }
  }
};


// メモの更新
export const updateMemo = async (updateMemo) => {
  try {
    await fetchCsrfCookie();
    const response = await axiosInstance.patch(`/api/memo/${updateMemo.id}`, updateMemo);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// メモの削除
export const deleteMemo = async (id) => {
  try {
    await fetchCsrfCookie();
    const response = await axiosInstance.delete(`/api/memo/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// 特定のメモの取得
export const getMemoById = async (id) => {
  try {
    await fetchCsrfCookie();
    const response = await axiosInstance.get(`/api/memo/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};