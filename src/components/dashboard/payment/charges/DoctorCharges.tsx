import FloatingLabel from 'components/dashboard/common/FloatingLabel';

const DoctorCharges = ({ register }: any) => {
  return (
    <>
      <h6 className="">Doctors Charge*</h6>{' '}
      <select {...register('charge_per_visit')} className="mb-2 ">
        <option value="">charge per visit</option>
        <option value="100">$100</option>
        <option value="250">$250</option>
        <option value="300">$300</option>
      </select>
      <FloatingLabel
        label="visit time"
        type="date"
        reg={{ ...register('visit_time') }}
      />
      <FloatingLabel
        label="visit discount"
        reg={{ ...register('visit_discount') }}
      />
    </>
  );
};

export default DoctorCharges;
