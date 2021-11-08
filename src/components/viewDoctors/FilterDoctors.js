/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import Select from 'components/common/Select';
import AvailableConsultants from 'components/home/availableCosultants/AvailableConsultants';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const FilterDoctors = () => {
  // const [showDropDown, setShowDropDown] = useState({
  //   showSpecialty: false,
  //   showConsultationFee: false,
  //   showAvailability: false,
  // });
  const [selected, setSelected] = useState({});
  const selectedItems = {};
  const handleSelectedItem = (e) => {
    let buttonSelect = e.target.parentNode.getAttribute('name');
    let selectedItem = e.target.innerText;
    selectedItems[buttonSelect] = selectedItem;
    console.log({ selectedItems }); // here it loses its previous property.. may be its for rendering for setSelect
    setSelected({ ...selected, ...selectedItems });
  };
  console.log({ selected });
  return (
    <Container>
      <div className="d-flex justify-content-evenly flex-wrap">
        <Select
          selected={selected}
          handleSelectedItem={handleSelectedItem}
          inputName="specialtyBtn"
          // defaultText="heart"
        />
        <Select
          selected={selected}
          handleSelectedItem={handleSelectedItem}
          inputName="consultationFeeBtn"
          // defaultText="40"
        />
        <Select
          selected={selected}
          handleSelectedItem={handleSelectedItem}
          inputName="availabilityBtn"
        />
      </div>
      <div className="">
        <button className="filter">filter</button>
      </div>
      <AvailableConsultants />
    </Container>
  );
};

export default FilterDoctors;
