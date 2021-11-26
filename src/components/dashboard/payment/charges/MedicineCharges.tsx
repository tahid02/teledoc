const MedicineCharges = ({ register }: any) => {
  return (
    <>
      <h4 className="center-text">Medicine Charge*</h4>

      <input
        {...register('medicine_quantity')}
        placeholder="quantity"
        type="number"
        className="mb-2 "
      />
      <input
        {...register('medicine_unit_cost')}
        placeholder="unit cost"
        type="number"
        className="mb-2 "
      />
      <input
        {...register('medicine_discount')}
        placeholder=" discount"
        className="mb-2 "
      />
    </>
  );
};

export default MedicineCharges;
