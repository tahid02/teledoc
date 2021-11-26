const XrayCharge = ({ register }: any) => {
  return (
    <section className="">
      <h6 className="">X ray Charge*</h6>
      <div className="d-flex  flex-column ">
        {' '}
        <select {...register('charge_per_Xray')} className="mb-2 ">
          <option value="">charge per Xray test</option>
          <option value="100">$100</option>
          <option value="280">$250</option>
          <option value="340">$300</option>
        </select>
        <input
          {...register('Xray_time')}
          placeholder="times Xray tested "
          type="number"
          className="mb-2"
        />{' '}
        <input
          {...register('Xray_discount')}
          placeholder="Xray discount"
          className="mb-2 "
        />
      </div>
    </section>
  );
};

export default XrayCharge;
