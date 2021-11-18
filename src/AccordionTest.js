import { useState } from 'react';
const data = [
  {
    id: 1,
    question: 'question one',
    ans: 'answer of question one',
  },
  {
    id: 2,
    question: 'question two',
    ans: 'answer of question two',
  },
  {
    id: 3,
    question: 'question three',
    ans: 'answer of question three',
  },
];
// const centerItem = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
// };
const AccordionTest = () => {
  const [currentDropdown, setCurrentDropdown] = useState(null);
  console.log({ currentDropdown });
  const handleClick = (id) => {
    console.log({ id });
    if (id === currentDropdown) {
      setCurrentDropdown(null);
      return;
    }
    setCurrentDropdown(id);
  };
  return (
    <section style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: '50%', top: '10%' }}>
        {data.map((faq) => {
          return (
            <div key={faq.id}>
              <button onClick={() => handleClick(faq.id)}>
                {faq.question}{' '}
              </button>
              {currentDropdown === faq.id && <p>{faq.ans} </p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AccordionTest;
