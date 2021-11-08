import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
// eslint-disable-next-line react/prop-types
const QuesAndAns = ({ ques, ans }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="d-flex align-items-start flex-column ">
      <button onClick={() => setShow(!show)} className="ques-btn">
        <div className={show ? 'bg-primary d-flex ' : 'd-flex'}>
          <div className="">{ques}</div>
          <div className="">{show ? <AiOutlineUp /> : <AiOutlineDown />}</div>
        </div>
      </button>

      {show && (
        <div className={show ? 'text-start ans' : 'text-start '}>{ans}</div>
      )}
    </div>
  );
};

export default QuesAndAns;
