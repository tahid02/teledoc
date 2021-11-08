/* eslint-disable no-unneeded-ternary */
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Select = ({ selected, handleSelectedItem, inputName, defaultText }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="select">
      <button className="selected-item" onClick={() => setShow(!show)}>
        {/* {selected[inputName]} */}
        {/* {!selected[inputName] && 'select'} */}
        {selected[inputName]
          ? selected[inputName]
          : defaultText
          ? defaultText
          : 'search'}
      </button>

      {show && (
        <div
          className="select-item mt-2"
          name={inputName}
          onClick={handleSelectedItem}
        >
          <button className="px-4 py-0 "> hello1</button>
          <button className="px-4 py-0 "> hello2</button>
          <button className="px-4 py-0 "> hello3</button>
          <button className="px-4 py-0 "> hello4</button>
          <button className="px-4 py-0 "> hello5</button>
        </div>
      )}
    </div>
  );
};

export default Select;
