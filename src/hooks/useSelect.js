/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */

import { useState } from 'react';

const useSelect = () => {
  const [show, setShow] = useState(null);

  const [selected, setSelected] = useState({});
  const selectedItems = {};
  const handleSelectedItem = (e) => {
    let buttonSelect = e.target.parentNode.parentNode.getAttribute('name');
    // console.log('hello', e.target.getElementById('testing'));
    let selectedItem = e.target.innerText;
    selectedItems[buttonSelect] = selectedItem;
    console.log({ selectedItems }); // here it loses its previous property.. may be its for rendering for setSelect
    setSelected({ ...selected, ...selectedItems });
    setShow(null);
  };
  console.log({ selected });
  return { show, setShow, selected, handleSelectedItem };
};

export default useSelect;
