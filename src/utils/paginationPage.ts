export const initialPageNo = (
  allDataLength: number,
  defaultNoPerPage?: number
): number[] => {
  const pagesArray = Array.from(
    { length: Math.ceil(allDataLength / (defaultNoPerPage || 10)) },
    (x, k) => k + 1
  );
  return pagesArray;
};

export const selectedPagesNo = (
  allDataLength: number,
  selectedNo: number
): number[] => {
  const selectedPagesArray = Array.from(
    {
      length:
        allDataLength > selectedNo ? Math.ceil(allDataLength / selectedNo) : 1,
    },
    (x, k) => k + 1
  );
  return selectedPagesArray;
};
