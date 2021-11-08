const MyButton = ({
  icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) => {
  return (
    <button className="btn btn-outline-primary d-flex ">
      <div className="pe-1 d-flex align-items-center">{icon}</div>
      <div className="text-dark">
        <p className="mb-0">{title}</p>
        <p className="mb-0">{text}</p>
      </div>
    </button>
  );
};

export default MyButton;
