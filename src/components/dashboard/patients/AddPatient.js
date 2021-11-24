import { Breadcrumb, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaHome } from 'react-icons/fa';

function AddPatient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <Container>
      <section className="d-flex justify-content-start align-items-center my-4">
        <h3 className="">View Patients | </h3>
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
        <h4 className="text-Center">Patient Information</h4>

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
          {...register('mobile')}
          placeholder="Mobile No."
          className="mb-2 "
        />
        <input
          {...register('age', { min: 0, max: 90 })}
          placeholder="age"
          className="mb-2 "
        />
        <input
          {...register('admitDate')}
          type="date"
          placeholder="Admit Date"
          className="mb-2 "
        />
        <select {...register('gender')} className="mb-2 ">
          <option value="">Gender</option>
          <option value="A">Male</option>
          <option value="B">Female </option>
        </select>
        <select {...register('blood-group')} className="mb-2 ">
          <option value="">A+</option>
          <option value="A">B+</option>
          <option value="B">O- </option>
        </select>
        <input {...register('weight')} placeholder="weight" className="mb-2 " />
        <input
          {...register('address')}
          placeholder="Address"
          className="mb-2 "
        />

        <div>
          <h4 className="text-Center">Registration Information</h4>
          <input
            {...register('Doctor')}
            placeholder="Doctor Name"
            className="mb-2 "
          />
          <input
            {...register('wordNo')}
            placeholder="Word No"
            className="mb-2 "
          />
          <input
            {...register('willVisit')}
            type="date"
            placeholder="Doctor Visit Date"
            className="mb-2 "
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            add{' '}
          </button>
        </div>
      </form>
    </Container>
  );
}

export default AddPatient;
