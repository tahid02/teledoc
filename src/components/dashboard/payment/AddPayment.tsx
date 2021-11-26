import { Breadcrumb, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaHome } from 'react-icons/fa';
import DoctorCharges from './charges/DoctorCharges';
import MedicineCharges from './charges/MedicineCharges';
import XrayCharge from './charges/XrayCharge';

const AddPayment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(typeof register);
  const onSubmit = (data: any) => {
    console.log({ data });
  };
  return (
    <Container>
      <section className="d-flex justify-content-start align-items-center my-4">
        <h3 className="">Add Payment | </h3>
        <div className="">
          <Breadcrumb className="text-center">
            {/* <Breadcrumb.Item as={Link} to="/">Home </Breadcrumb.Item> */}
            <Breadcrumb.Item href="#">
              <FaHome /> Home{' '}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Library </Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>
              {' '}
              Data
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column add-patient-input bg-white px-3 pt-4 pb-2"
        style={{ backgroundColor: 'white', borderRadius: '1%' }}
      >
        <input
          {...register('fullName', { required: true })}
          placeholder="First name"
          className="mb-2"
        />
        {errors.fullName?.type === 'required' && (
          <p className="text-danger">Full Name is required</p>
        )}
        <input {...register('email')} placeholder="Email" className="mb-2 " />
        <input
          {...register('paymentDate')}
          type="date"
          placeholder="Payment Date"
          className="mb-2 "
        />
        <input
          {...register('wordNo')}
          placeholder="Word No"
          className="mb-2 "
        />

        <DoctorCharges register={register} />
        <MedicineCharges register={register} />
        <XrayCharge register={register} />
        <h6 className="">MRI Charge*</h6>
        <div className="d-flex  flex-column ">
          {' '}
          <select {...register('charge_per_MRI')} className="mb-2 ">
            <option value="" disabled selected>
              charge per MRI test
            </option>
            <option value="100">$100</option>
            <option value="250">$250</option>
            <option value="300">$300</option>
          </select>
          <input
            {...register('MRI_time')}
            placeholder="times Xray tested "
            type="number"
            className="mb-2"
          />{' '}
          <input
            {...register('MRI_discount')}
            placeholder="MRI discount"
            className="mb-2 "
          />
          <input
            {...register('others_cost')}
            placeholder="Other's cost"
            className="mb-2 "
          />
        </div>
        <input {...register('tax')} placeholder="Tax" className=" mt-2 mb-2 " />

        <select {...register('payment_method')} className="mb-2 ">
          <option value="">payment method</option>
          <option value="cash">cash</option>
          <option value="check">check</option>
          <option value="net Banking">Net Banking </option>
          <option value="insurance">Insurance </option>
        </select>
        <select {...register('payment_status')} className="mb-2 ">
          <option value="">payment status</option>
          <option value="paid">paid</option>
          <option value="A">pending</option>
          <option value="B">Partial </option>
        </select>
        <button type="submit">Submit </button>
      </form>
    </Container>
  );
};

export default AddPayment;
