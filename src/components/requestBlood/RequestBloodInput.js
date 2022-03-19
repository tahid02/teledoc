import Select from 'components/common/Select';
import useSelect from 'hooks/useSelect';
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const RequestBloodInput = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { show, setShow, selected, handleSelectedItem } = useSelect();

  return (
    <Container>
      <h1 className="text-center">Request Blood</h1>
      <p className="text-center"> `Remember! Blood is Unpayable`</p>
      <div className="d-flex justify-content-center">
        <div className=" w-25 ">
          <Select
            selected={selected}
            handleSelectedItem={handleSelectedItem}
            // inputName="requestBloodGroup"
            show={show}
            setShow={setShow}
            defaultText="group"
            style={{ width: '75%' }}
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

        <div className="w-25">
          <Select
            selected={selected}
            handleSelectedItem={handleSelectedItem}
            inputName="requestLocation"
            show={show}
            setShow={setShow}
            defaultText="male"
            style={{ width: '75%' }}
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
      </div>
      <div className="d-flex justify-content-center">
        <div className="mt-3 w-25">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="rounded border-0 shadow ps-2 py-2 "
          />
          {/* <input
            type="date"
            name=""
            id=""
            className="border-0 rounded-3 px-2 py-1 shadow"
          /> */}
        </div>
        <div className="div mt-3">
          <Button>Request</Button>
        </div>
      </div>
    </Container>
  );
};

export default RequestBloodInput;
