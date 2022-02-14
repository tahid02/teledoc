/* eslint-disable react/prop-types */
/* eslint-disable no-unneeded-ternary */
// import { useState } from 'react';

// import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const Select = ({
  selected,
  handleSelectedItem,
  inputName,
  defaultText,
  show,
  setShow,
  children,
  ...rest
}) => {
  // const [show, setShow] = useState(false);
  // console.log({ inputName });
  // useEffect(() => {
  //   window.addEventListener('click', function (e) {
  //     // console.log('event', e.target.getAttribute('class'));
  //     // if (e.target.parentNode === document) {
  //     if (e.target.parentNode === document) {
  //       setShow(null);
  //       // console.log('hello bitch');
  //     }
  //   });
  // }, []);
  return (
    <div className="select">
      <button
        className="selected-item"
        onClick={() =>
          show === inputName ? setShow(null) : setShow(inputName)
        }
        {...rest}
      >
        {/* {selected[inputName]} */}
        {/* {!selected[inputName] && 'select'} */}
        {selected[inputName]
          ? selected[inputName]
          : defaultText
          ? defaultText
          : 'search'}
      </button>

      {show === inputName ? (
        <div
          className="select-item mt-2"
          name={inputName}
          id="testing"
          onClick={handleSelectedItem}
        >
          {/* {children} */}
          <div className="div">
            <button className="px-4 py-0 "> hello1</button>
            <button className="px-4 py-0 "> hello2</button>
            <button className="px-4 py-0 "> hello3</button>
            <button className="px-4 py-0 "> hello4</button>
            <button className="px-4 py-0 "> hello5</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Select;
