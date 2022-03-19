import FloatingLabel from 'components/dashboard/common/FloatingLabel';

const XrayCharge = ({ register }: any) => {
  return (
    <>
      <h6 className="">X ray Charge*</h6>{' '}
      <select {...register('charge_per_Xray')} className="mb-2 ">
        <option value="">charge per Xray test</option>
        <option value="100">$100</option>
        <option value="280">$250</option>
        <option value="340">$300</option>
      </select>
      <FloatingLabel
        label="test"
        // type="number"
        reg={{ ...register('Xray_time') }}
      />
      <FloatingLabel label="discount" reg={{ ...register('Xray_discount') }} />
    </>
  );
};

export default XrayCharge;
