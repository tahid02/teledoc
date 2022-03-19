interface IFloatingLabel {
  // children: any;
  label: string;
  reg: any;
  type?: string;
}

const FloatingLabel = ({ label, reg, type }: IFloatingLabel) => {
  return (
    <div className="form-item form-item-3">
      <input
        {...reg}
        className="form-input mb-2"
        type={type || 'text'}
        placeholder=" "
      />
      <label>{label}</label>
    </div>
  );
};

export default FloatingLabel;
