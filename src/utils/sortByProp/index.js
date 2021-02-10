const propSort = prop => (a, b) => {
  if (a[prop] < b[prop]) return -1;
  else if (a[prop] > b[prop]) return 1;
  else return 0;
};

const sortByProp = (prop, value, order = 'asc') =>
  value.sort((a, b) =>
    order === 'desc' ? -propSort(prop)(a, b) : propSort(prop)(a, b)
  );

export default sortByProp;
