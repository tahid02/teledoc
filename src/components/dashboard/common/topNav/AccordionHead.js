import DropdownIcon from 'components/common/DropdownIcon';

// eslint-disable-next-line react/prop-types
const AccordionHead = ({ title, itemNo }) => {
  // itemNo must be capitalized number in word : One, Two, Three....
  return (
    <button
      className="w-100 border-0 rounded-3 bg-gray  hover-bg-gray shadow ps-3 py-3 text-start  d-flex collapsed"
      style={{
        borderRadius: '10px',
        // backgroundColor: 'white',
      }}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#flush-collapse${itemNo}`}
      aria-expanded="true"
      aria-controls={`flush-collapse${itemNo}`}
    >
      <div className="">{title}</div>
      <div className="ms-auto">
        <DropdownIcon />
      </div>
    </button>
  );
};

export default AccordionHead;
