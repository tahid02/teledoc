import Select from 'components/common/Select';
import useSelect from 'hooks/useSelect';
import { Container } from 'react-bootstrap';

const SearchDonors = () => {
  const { selected, handleSelectedItem } = useSelect();
  console.log({ selected });
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
      <div className="">
        <button className="filter">filter</button>
      </div>
    </Container>
  );
};

export default SearchDonors;
