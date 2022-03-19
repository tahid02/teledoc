import { Breadcrumb, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaHome } from 'react-icons/fa';
import FloatingLabel from 'components/dashboard/common/FloatingLabel';

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

        <FloatingLabel
          label="first name"
          reg={{ ...register('fullName', { required: true }) }}
        />

        {errors.fullName?.type === 'required' && (
          <p className="text-danger">Full Name is required</p>
        )}
        <FloatingLabel label="email" reg={{ ...register('email') }} />
        <FloatingLabel label="mobile" reg={{ ...register('mobile') }} />
        <FloatingLabel
          label="age"
          type="number"
          reg={{ ...register('age', { min: 0, max: 90 }) }}
        />
        <FloatingLabel
          label="admitDate"
          type="date"
          reg={{ ...register('admitDate') }}
        />

        <div className="d-flex flex-row flex-wrap ">
          <span htmlFor="">Gender: </span>
          <select {...register('gender')} className="mb-2 ms-1  me-5">
            <option value="">Gender</option>
            <option value="A">Male</option>
            <option value="B">Female </option>
          </select>
          <span>Blood Group:</span>
          <select {...register('blood-group')} className="mb-2 ms-1">
            <option value="">A+</option>
            <option value="A">B+</option>
            <option value="B">O- </option>
          </select>
        </div>

        <FloatingLabel label="weight" reg={{ ...register('weight') }} />
        <FloatingLabel label="address" reg={{ ...register('address') }} />

        <h5 className="text-Center">Registration Information</h5>
        <FloatingLabel label="Doctor" reg={{ ...register('Doctor') }} />
        <FloatingLabel label="WordNo" reg={{ ...register('wordNo') }} />
        <FloatingLabel
          label="willVisit"
          type="date"
          reg={{ ...register('willVisit') }}
        />

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
