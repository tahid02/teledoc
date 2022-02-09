// import { ImUsers } from 'react-icons/im';

interface IMyButton {
  icon: any;
  title: string;
  text: string;
}

const MyButton = ({ icon, title, text }: IMyButton) => {
  return (
    <button className="btn  d-flex align-items-center shadow">
      <div className="pe-1">{icon}</div>
      <div className="text-dark text-start d-flex flex-column ">
        <span className="mb-0" style={{ fontSize: 'small' }}>
          {title}
        </span>
        <span className="mb-0">{text}</span>
      </div>
    </button>
  );
};

export default MyButton;
