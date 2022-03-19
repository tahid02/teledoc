/* eslint-disable react/prop-types */

import { Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import TooltipText from '../common/TooltipText';

const PatientTRow = ({ patientData }) => {
  return (
    <tr
      key={patientData.id}
      style={{
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'gray',
      }}
    >
      <td style={{ marginTop: 'auto', marginBottom: 'auto' }}>
        <img src={patientData.patient_image} className="rounded" />{' '}
      </td>
      <td>{patientData.patient_name}</td>
      <td>{patientData.patient_gender}</td>
      <td>{patientData.patient_address}</td>
      <td nowrap="nowrap">{patientData.patient_mobile}</td>
      <td>{patientData.patient_age}</td>
      <td>{patientData.patient_blood_group}</td>
      <td>
        <button className="btn  rounded p-0">
          <TooltipText text="edit" position="bottom">
            <Button variant="transparent">
              <FaEdit className="text-success" size={25} />
            </Button>
          </TooltipText>
        </button>
        <button className="btn  rounded p-0">
          <TooltipText text="delete" position="bottom">
            <Button variant="transparent">
              <MdDelete className="text-danger" size={25} />
            </Button>
          </TooltipText>
        </button>
      </td>
    </tr>
  );
};

export default PatientTRow;
