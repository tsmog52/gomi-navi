import React from 'react'

const TermsAndPrivacy = () => {
  return (
    <>
      <ul className='flex space-x-4 mb-2'>
        <li>
          <a
            href="http://127.0.0.1:8000/terms"
            className='text-gray-600 hover:text-gray-400 transition-colors duration-300'
          >
            利用規約
          </a>
        </li>
        <li>
          <a
            href="http://127.0.0.1:8000/privacy"
            className='text-gray-600 hover:text-gray-400 transition-colors duration-300'
          >
            プライバシーポリシー
          </a>
        </li>
      </ul>
    </>
  )
}

export default TermsAndPrivacy
