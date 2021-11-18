import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function AddPatient() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column add-patient-input"
      >
        <input {...register('fullName')} placeholder="First name" />
        <input {...register('email')} placeholder="Email" />
        <input {...register('mobile')} placeholder="Mobile No." />
        <input {...register('age')} placeholder="age" />
        <input {...register('date')} type="date" placeholder="Admit Date" />

        <select {...register('gender')}>
          <option value="">Gender</option>
          <option value="A">Male</option>
          <option value="B">Female </option>
        </select>
        <select {...register('blood-group')}>
          <option value="">A+</option>
          <option value="A">B+</option>
          <option value="B">O- </option>
        </select>
        <input {...register('weight')} placeholder="weight" />
        <input {...register('address')} placeholder="Address" />

        <button type="submit">add </button>
      </form>
    </Container>
  );
}

export default AddPatient;
