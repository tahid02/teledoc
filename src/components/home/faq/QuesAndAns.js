// import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
// eslint-disable-next-line react/prop-types
const QuesAndAns = ({ id, ques, ans, toggle, show }) => {
  return (
    <div
      className="d-flex flex-column bg-light rounded-3 mb-2"
      style={{ width: '100%' }}
    >
      <button onClick={() => toggle(id)} className="ques-btn  btn btn-primary">
        <div
          className={
            show ? 'bg-primary rounded-3 px-2 py-1 d-flex ' : 'd-flex '
          }
        >
          <div className="text-white">{ques}</div>
          <div className="ms-auto">
            {show === id ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
        </div>{' '}
      </button>

      <div className="text-start ">
        {' '}
        {show === id ? <p className="ans bg-white rounded-3">{ans}</p> : null}
      </div>
    </div>
  );
};

export default QuesAndAns;
// import { useState } from 'react';
// import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
// // eslint-disable-next-line react/prop-types
// const QuesAndAns = ({ ques, ans }) => {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="d-flex align-items-start flex-column ">
//       <button onClick={() => setShow(!show)} className="ques-btn">
//         <div className={show ? 'bg-primary d-flex ' : 'd-flex'}>
//           <div className="">{ques}</div>
//           <div className="">{show ? <AiOutlineUp /> : <AiOutlineDown />}</div>
//         </div>
//       </button>

//       {show && (
//         <div className={show ? 'text-start ans' : 'text-start '}>{ans}</div>
//       )}
//     </div>
//   );
// };

// export default QuesAndAns;
