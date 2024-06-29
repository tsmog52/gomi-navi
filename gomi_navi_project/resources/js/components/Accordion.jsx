import React, { useEffect, useState } from 'react'
import useModal from '../hooks/useModal';
import axios from 'axios';

const Accordion = ({ category_id, category_name}) => {
  //エンドポイントのstate
    const [instructions, setInstructions] = useState([]);

    //Accordionの状態管理
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);

    useEffect(() => {
      const getInstructionData = async () => {
        try {
          const response = await axios.get('api/instruction');
          setInstructions(response.data.instructions);
        } catch (error) {
          console.log('通信に失敗しました', error);
        }
      };
      getInstructionData();
    }, [category_id]);

    const toggleAccordion = () => {
      setIsOpenAccordion(!isOpenAccordion);
    }

  return (
    <div>
    </div>
  )
}

export default Accordion
