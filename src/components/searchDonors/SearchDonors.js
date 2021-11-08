import Select from 'components/common/Select';
import useSelect from 'hooks/useSelect';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const SearchDonors = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { selected, handleSelectedItem } = useSelect();
  console.log({ selected });
  console.log({ startDate });
  return (
    <Container>
      <div className="d-flex justify-content-evenly flex-wrap">
        <Select
          selected={selected}
          handleSelectedItem={handleSelectedItem}
          inputName="bloodGroup"
        />
        <Select
          selected={selected}
          handleSelectedItem={handleSelectedItem}
          inputName="location"
        />
      </div>
      <div className="row">
        <div className="col-7">
          {' '}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="col-5">
          {' '}
          <button className="filter">search</button>
        </div>
      </div>
    </Container>
  );
};

export default SearchDonors;
