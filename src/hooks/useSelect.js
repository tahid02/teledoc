/* eslint-disable prefer-const */

import { useState } from 'react';

const useSelect = () => {
  const [selected, setSelected] = useState({});
  const selectedItems = {};
  const handleSelectedItem = (e) => {
    let buttonSelect = e.target.parentNode.getAttribute('name');
    let selectedItem = e.target.innerText;
    selectedItems[buttonSelect] = selectedItem;
    console.log({ selectedItems }); // here it loses its previous property.. may be its for rendering for setSelect
    setSelected({ ...selected, ...selectedItems });
  };
  return { selected, handleSelectedItem };
};

export default useSelect;
