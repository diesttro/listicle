import sortByProp from './';

const values = [
  {
    title: 'Fugit voluptas sed molestias voluptatem providen',
    date: 1597072589725,
  },
  {
    title: 'Voluptatem eligendi optio',
    date: 1597073737530,
  },
  {
    title: 'Adipisci placeat illum aut reiciendis qui',
    date: 1534118409710,
  },
];

describe('sortBy', () => {
  it('should return the values sorted by date asc', () => {
    const valuesSortedByDateAsc = [
      {
        title: 'Adipisci placeat illum aut reiciendis qui',
        date: 1534118409710,
      },
      {
        title: 'Fugit voluptas sed molestias voluptatem providen',
        date: 1597072589725,
      },
      {
        title: 'Voluptatem eligendi optio',
        date: 1597073737530,
      },
    ];

    expect(sortByProp('date', values)).toEqual(valuesSortedByDateAsc);
  });

  it('should return the values sorted by date desc', () => {
    const valuesSortedByDateDesc = [
      {
        title: 'Voluptatem eligendi optio',
        date: 1597073737530,
      },
      {
        title: 'Fugit voluptas sed molestias voluptatem providen',
        date: 1597072589725,
      },
      {
        title: 'Adipisci placeat illum aut reiciendis qui',
        date: 1534118409710,
      },
    ];

    expect(sortByProp('date', values, 'desc')).toEqual(valuesSortedByDateDesc);
  });

  it('should return the values sorted by title asc', () => {
    const valuesSortedByTitleAsc = [
      {
        title: 'Adipisci placeat illum aut reiciendis qui',
        date: 1534118409710,
      },
      {
        title: 'Fugit voluptas sed molestias voluptatem providen',
        date: 1597072589725,
      },
      {
        title: 'Voluptatem eligendi optio',
        date: 1597073737530,
      },
    ];

    expect(sortByProp('title', values)).toEqual(valuesSortedByTitleAsc);
  });

  it('should return the values sorted by title desc', () => {
    const valuesSortedByTitleDesc = [
      {
        title: 'Voluptatem eligendi optio',
        date: 1597073737530,
      },
      {
        title: 'Fugit voluptas sed molestias voluptatem providen',
        date: 1597072589725,
      },
      {
        title: 'Adipisci placeat illum aut reiciendis qui',
        date: 1534118409710,
      },
    ];

    expect(sortByProp('title', values, 'desc')).toEqual(
      valuesSortedByTitleDesc
    );
  });
});
