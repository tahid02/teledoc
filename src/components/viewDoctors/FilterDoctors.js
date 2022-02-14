/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import Select from 'components/common/Select';
import AvailableConsultants from 'components/home/availableCosultants/AvailableConsultants';
import useSelect from 'hooks/useSelect';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const FilterDoctors = () => {
  // const [showDropDown, setShowDropDown] = useState({
  //   showSpecialty: false,
  //   showConsultationFee: false,
  //   showAvailability: false,
  // });
  // const [selected, setSelected] = useState({});

  const { show, setShow, selected, handleSelectedItem } = useSelect();

  // const selectedItems = {};
  // const handleSelectedItem = (e) => {
  //   let buttonSelect = e.target.parentNode.getAttribute('name');
  //   let selectedItem = e.target.innerText;
  //   selectedItems[buttonSelect] = selectedItem;
  //   console.log({ selectedItems }); // here it loses its previous property.. may be its for rendering for setSelect
  //   setSelected({ ...selected, ...selectedItems });
  //   setShow(null);
  // };
  // console.log({ selected });

  return (
    <Container>
      <div className="d-flex justify-content-evenly flex-wrap">
        <Select
          selected={selected}
          handleSelectedItem={handleSelectedItem}
          inputName="specialtyBtn"
          show={show}
          setShow={setShow}
          defaultText="heart"
          style={{ color: 'yellow', backgroundColor: 'blue' }}
        ></Select>
        <Select
          selected={selected}
          handleSelectedItem={handleSelectedItem}
          inputName="consultationFeeBtn"
          show={show}
          setShow={setShow}
          defaultText="40"
        />
        <Select
          selected={selected}
          handleSelectedItem={handleSelectedItem}
          inputName="availabilityBtn"
          show={show}
          setShow={setShow}
        />
      </div>
      <div className="">
        <button className="filter">filter</button>
      </div>
      {/* <AvailableConsultants /> */}
    </Container>
  );
};

export default FilterDoctors;
