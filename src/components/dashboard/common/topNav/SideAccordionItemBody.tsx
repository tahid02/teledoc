interface ISideAccordionItemBody {
  activePage: string;
  accordionItemName: string;
  itemNo: string; // itemNo must be capitalized number in word : One, Two, Three....
  children?: any;
}
const SideAccordionItemBody = ({
  activePage,
  accordionItemName,
  itemNo,
  children,
}: ISideAccordionItemBody) => {
  return (
    <div
      id={`flush-collapse${itemNo}`}
      className={`accordion-collapse collapse ${
        activePage === accordionItemName && 'show' // if current page is doctor then 'show' class will be added
      }`}
      // className="accordion-collapse collapse "
      aria-labelledby={`flush-heading${itemNo}`}
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
        <div className="ps-3">{children}</div>
      </div>
    </div>
  );
};

export default SideAccordionItemBody;
