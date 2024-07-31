import React from 'react'

const Pagination = ({ paginator }) => {
  const {
    first_page_url,
    last_page_url,
    next_page_url,
    prev_page_url,
    current_page_url,
    last_page,
  } = paginator;

  return (
    <div className='pagination'>
      <a
        href={first_page_url}
        className='pagination-link'
        aria-disabled={current_page_url === 1}
      >
        最初
      </a>
      <a
        href={prev_page_url}
        className='pagination-link'
        aria-disabled={!prev_page_url}
      >
        前へ
      </a>

    <span className='current_page'>
      {current_page} / {last_page}
    </span>

    <a
      href={next_page_url}
      className='pagination-link'
      aria-disabled={!next_page_url}
    >
      次へ
    </a>

    <a
      href={last_page_url}
      className='pagination-link'
      aria-disabled={current_page_url === last_page}
    >
      最後
    </a>
    </div>
  )
}

export default Pagination
