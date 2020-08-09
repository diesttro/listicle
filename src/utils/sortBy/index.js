const sortAsc = prop => (a, b) => {
  if (a[prop] < b[prop]) return -1;
  else if (a[prop] > b[prop]) return 1;
  else return 0;
};

const sortDesc = prop => (a, b) => {
  if (a[prop] > b[prop]) return -1;
  else if (a[prop] < b[prop]) return 1;
  else return 0;
};

const sortByAsc = (prop, value) => value.sort(sortAsc(prop));

const sortByDesc = (prop, value) => value.sort(sortDesc(prop));

export { sortByAsc, sortByDesc };
