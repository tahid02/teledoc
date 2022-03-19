/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import Select from 'components/common/Select';
import AvailableConsultants from 'components/home/availableCosultants/AvailableConsultants';
import useSelect from 'hooks/useSelect';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';

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
      <h1 className="py-4 ">Our Doctors </h1>
      <section className="px-5">
        <Row className="text-start">
          <Col>
            {' '}
            <div className="my-2 flex-fill">
              <small> specialty </small>
              <Select
                selected={selected}
                handleSelectedItem={handleSelectedItem}
                inputName="specialtyBtn"
                show={show}
                setShow={setShow}
                defaultText="Heart"
                style={{ width: '100%' }}
              >
                <div className="div">
                  <button className="px-4 py-0 "> hello1</button>
                  <button className="px-4 py-0 "> hello2</button>
                  <button className="px-4 py-0 "> hello5</button>
                  <button className="px-4 py-0 "> hello1</button>
                  <button className="px-4 py-0 "> hello2</button>
                  <button className="px-4 py-0 "> hello3</button>
                  <button className="px-4 py-0 "> hello4</button>
                  <button className="px-4 py-0 "> hello5</button>
                </div>
              </Select>
            </div>
          </Col>
          <Col>
            <div className="my-2 flex-fill">
              <small>consultation fee</small>{' '}
              <Select
                selected={selected}
                handleSelectedItem={handleSelectedItem}
                inputName="consultationFeeBtn"
                show={show}
                setShow={setShow}
                defaultText="40"
                style={{ width: '100%' }}
              >
                {' '}
                <div className="div">
                  <button className="px-4 py-0 "> hello1</button>
                  <button className="px-4 py-0 "> hello2</button>
                  <button className="px-4 py-0 "> hello3</button>
                  <button className="px-4 py-0 "> hello4</button>
                  <button className="px-4 py-0 "> hello5</button>
                </div>
              </Select>
            </div>
          </Col>

          <Col>
            <div className="my-2 flex-fill">
              <small> availability</small>
              <Select
                selected={selected}
                handleSelectedItem={handleSelectedItem}
                inputName="availabilityBtn"
                show={show}
                setShow={setShow}
                style={{ width: '100%' }}
              >
                {' '}
                <div className="div">
                  <button className="px-4 py-0 "> hello1</button>
                  <button className="px-4 py-0 "> hello2</button>
                  <button className="px-4 py-0 "> hello3</button>
                  <button className="px-4 py-0 "> hello4</button>
                  <button className="px-4 py-0 "> hello5</button>
                </div>
              </Select>
            </div>
          </Col>
        </Row>
      </section>
      <div className="mt-4 ">
        <button className="filter  px-3 py-1 rounded-3 bg-primary shadow border">
          <FaFilter className="pe-2" size={18} />
          Filter
        </button>
      </div>
      <AvailableConsultants />
      <div className="mb-5"></div>
    </Container>
  );
};

export default FilterDoctors;
