/* eslint-disable react/prop-types */
/* eslint-disable no-unneeded-ternary */
// import { useState } from 'react';

import { useEffect } from 'react';
import { AiFillDownCircle } from 'react-icons/ai';

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
  useEffect(() => {
    window.addEventListener('click', function (e) {
      // if (e.target.parentNode === document) {
      if (e.target.parentNode === this.document) {
        setShow(null);
      }
    });
  }, []);
  return (
    <div className="select">
      <button
        className="bg-white d-flex shadow rounded-3 px-4 py-2 border-0"
        onClick={() =>
          show === inputName ? setShow(null) : setShow(inputName)
        }
        {...rest}
      >
        {/* {selected[inputName]} */}
        {/* {!selected[inputName] && 'select'} */}
        <span className="">
          {selected[inputName]
            ? selected[inputName]
            : defaultText
            ? defaultText
            : 'Search'}
        </span>
        <span className="ms-auto">
          <AiFillDownCircle />
        </span>
      </button>

      {show === inputName ? (
        <div
          className="select-item mt-2"
          name={inputName}
          id="testing"
          onClick={handleSelectedItem}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
