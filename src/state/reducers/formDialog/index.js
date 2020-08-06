const initialState = {
  open: false,
  articleId: null,
};

const formDialog = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'OPEN_DIALOG':
      return { open: true, articleId: payload.articleId };
    case 'CLOSE_DIALOG':
      return initialState;
    default:
      return state;
  }
};

export default formDialog;
