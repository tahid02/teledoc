import Select from 'components/common/Select';
import useSelect from 'hooks/useSelect';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const RequestBloodInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { selected, handleSelectedItem } = useSelect();
  return (
    <Container>
      <h className="text-center">Request </h>
      <p className="text-center"> `Remember! Blood is Unpayable`</p>
      <Row>
        <Col>
          <Select
            selected={selected}
            handleSelectedItem={handleSelectedItem}
            inputName="requestBloodGroup"
          />
        </Col>
        <Col>
          <Select
            selected={selected}
            handleSelectedItem={handleSelectedItem}
            inputName="requestLocation"
          />
        </Col>
        <Col>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Col>
      </Row>
      <div className="div">
        <Button>Request</Button>
      </div>
    </Container>
  );
};

export default RequestBloodInput;
