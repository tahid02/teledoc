import FloatingLabel from 'components/dashboard/common/FloatingLabel';

const MedicineCharges = ({ register }: any) => {
  return (
    <>
      <h4 className="center-text">Medicine Charge*</h4>
      <FloatingLabel
        label="medicine qty"
        type="number"
        reg={{ ...register('medicine_quantity') }}
      />

      <FloatingLabel
        label="unit cost"
        type="number"
        reg={{ ...register('medicine_unit_cost') }}
      />

      <FloatingLabel
        label="discount"
        reg={{ ...register('medicine_discount') }}
      />
    </>
  );
};

export default MedicineCharges;
