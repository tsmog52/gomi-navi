import React from 'react';
import { createRoot } from 'react-dom/client';

const Sorting_guides = () => {
  return (
    <>
    <p>ゴミの捨て方ページです。</p>
    </>
  );
};

export default Sorting_guides;

const container = document.getElementById('sorting_guide');
const root = createRoot(container);
root.render(< Sorting_guides />);
