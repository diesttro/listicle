import { addArticle, editArticle, deleteArticle } from '../../actions';
import reducer from './';

let initialState;

beforeEach(() => {
  initialState = [
    {
      id: 'kdngrtrv',
      date: 1597000307980,
      title: 'Lorem ipsum dolor sit amet',
      description:
        'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat',
      image: '',
    },
  ];
});

describe('articles reducer', () => {
  it('should add article', () => {
    const addAction = addArticle({
      title: 'Dolorem eum magni eos aperiam quia',
      description: 'ut aspernatur corporis harum nihil quis provident sequi',
    });
    const articlesReducer = reducer(initialState, addAction);

    expect(articlesReducer.length).toBe(2);
  });

  it('should edit article', () => {
    const editdAction = editArticle({
      id: 'kdngrtrv',
      title: 'Et ea vero quia laudantium autem',
      description:
        'Delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus',
    });
    const articlesReducer = reducer(initialState, editdAction);

    expect(articlesReducer.length).toBe(1);
    expect(articlesReducer).toEqual([
      {
        id: 'kdngrtrv',
        date: 1597000307980,
        title: 'Et ea vero quia laudantium autem',
        description:
          'Delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus',
      },
    ]);
  });

  it('should delete article', () => {
    const deleteAction = deleteArticle('kdngrtrv');
    const articlesReducer = reducer(initialState, deleteAction);

    expect(articlesReducer.length).toBe(0);
  });
});
