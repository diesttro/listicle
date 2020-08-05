const initialState = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat',
    image:
      'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat',
  },
];

const articles = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_ARTICLE':
      return [
        ...state,
        {
          title: payload.title,
          description: payload.description,
          image: payload.image,
        },
      ];
    default:
      return state;
  }
};

export default articles;
