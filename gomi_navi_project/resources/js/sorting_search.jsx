import React from 'react'
import { createRoot } from 'react-dom/client';

const Sorting_search = () => {
  return (
    <>
      <p>これはゴミの分別検索です。</p>
    </>
  )
}

export default Sorting_search;

const container = document.getElementById('sorting_search');
const root = createRoot(container);
root.render(< Sorting_search />);

