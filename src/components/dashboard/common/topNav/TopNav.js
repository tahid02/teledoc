import LeftOffcanvas from './LeftOffcanvas';
import { MdCircleNotifications } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const TopNav = () => {
  return (
    <header
      className="d-flex align-items-center px-5 py-3"
      style={{ backgroundColor: 'white' }}
    >
      <div className="me-auto ">
        <LeftOffcanvas />{' '}
        <span className="ps-3">
          <Link to="/">teleDoc</Link>
        </span>
      </div>
      <div className="">
        <MdCircleNotifications fontSize="1.5rem" />
      </div>
      <div className="">
        {' '}
        <img
          src="http://dummyimage.com/33x33.png/cc0000/ffffff"
          className="rounded-circle"
        />{' '}
      </div>
      <div className="">
        <AiFillSetting fontSize="1.3rem" />{' '}
      </div>
    </header>
  );
};

export default TopNav;
