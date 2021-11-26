const DoctorCharges = ({ register }: any) => {
  return (
    <section className="">
      <h6 className="">Doctors Charge*</h6>
      <div className="d-flex  flex-column ">
        {' '}
        <select {...register('charge_per_visit')} className="mb-2 ">
          <option value="">charge per visit</option>
          <option value="100">$100</option>
          <option value="250">$250</option>
          <option value="300">$300</option>
        </select>
        <input
          {...register('visit_time')}
          placeholder="visit time"
          type="number"
          className="mb-2"
        />{' '}
        <input
          {...register('visit_discount')}
          placeholder="visit discount"
          className="mb-2 "
        />
      </div>
    </section>
  );
};

export default DoctorCharges;
