import React, {useState} from 'react';
import { Field, Label, Radio, RadioGroup } from '@headlessui/react';
import { AiOutlineClose } from "react-icons/ai";
import Button from './Button';

const regions = ['川崎区', '幸区', '中原区', '高津区', '宮前区', '多摩区', '麻生区'];

const SettingModal = ({ onClose }) => {

const [selected, setSelected] = useState(regions[0])

  return (
  <>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <button onClick={onClose}>
          <AiOutlineClose />
        </button>
        <h2 className="block text-2xl font-bold text-gray-800 dark:text-neutral-200 border-b-2">
          設定
        </h2>
        <p className='pt-4 text-center font-bold text-xl'>地域を設定する</p>
        <RadioGroup value={selected} onChange={setSelected} aria-label="Server size">
          {regions.map((region) => (
          <Field key={region} className="flex items-center justify-center gap-2 pb-2 text-base">
          <Radio
            value={region}
            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
          >
            <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
          </Radio>
          <Label>{region}</Label>
          </Field>
        ))}
          </RadioGroup>
            <p className='text-center font-bold text-xl p-4'>外部カレンダー連携</p>
            <Button text='Googleと連携する' />
            <p className='text-center font-bold text-xl p-4'>外部リマインダー連携</p>
            <Button text='LINEと連携する' />
        </div>
      </div>
  </>
  )
}

export default SettingModal
