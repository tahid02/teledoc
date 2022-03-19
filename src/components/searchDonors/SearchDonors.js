import Select from 'components/common/Select';
import useSelect from 'hooks/useSelect';
import { useState } from 'react';
// import { Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const SearchDonors = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { show, setShow, selected, handleSelectedItem } = useSelect();
  console.log({ selected });
  console.log({ startDate });
  return (
    <section className="d-flex justify-content-center mt-5 ">
      <div className="d-flex justify-content-center align-items-center">
        <div className="text-start">
          {' '}
          <div className="">
            <h2 className="mb-0">Search Donors</h2>
            <p className="text-center">
              Excuses never save a life, Blood donation does.
            </p>
            <div className="mt-2">
              <small>search by blood group</small>
              <Select
                selected={selected}
                handleSelectedItem={handleSelectedItem}
                inputName="bloodGroup"
                show={show}
                setShow={setShow}
                defaultText="Blood Group"
                style={{ width: '75%' }}
              >
                <div className="div">
                  <button className="px-4 py-0 "> hello1</button>
                  <button className="px-4 py-0 "> hello2</button>
                  <button className="px-4 py-0 "> hello3</button>
                  <button className="px-4 py-0 "> hello4</button>
                  <button className="px-4 py-0 "> hello5</button>
                </div>
              </Select>
            </div>

            <div className="mt-2">
              <small>search by location</small>{' '}
              <Select
                selected={selected}
                handleSelectedItem={handleSelectedItem}
                inputName="location"
                show={show}
                setShow={setShow}
                defaultText="Donor location"
                style={{ width: '75%' }}
              >
                {' '}
                <div className="div">
                  <button className="px-4 py-0 "> hello1</button>
                  <button className="px-4 py-0 "> hello2</button>
                  <button className="px-4 py-0 "> hello3</button>
                  <button className="px-4 py-0 "> hello4</button>
                  {/* <button className="px-4 py-0 "> hello5</button> */}
                </div>
              </Select>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center mt-3">
            <div className="w-100">
              <small>donation date</small>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="rounded border-0 shadow ps-2 py-2 w-75"
              />
            </div>
            <div className="w-100 mt-3">
              {' '}
              <button className="filter border-0 rounded-3 bg-primary py-2 px-3">
                search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '52%' }} className=" d-none d-lg-block d-xl-block">
        <img
          src="https://save-me.vercel.app/_next/image?url=%2Fimages%2FsearchBloodDonor.svg&w=640&q=75"
          alt=""
          className="w-100"
        />
      </div>

      <div className="mt-5 d-none"></div>
    </section>
  );
};

export default SearchDonors;
