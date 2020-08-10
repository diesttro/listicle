import {
  setArticles,
  addArticle,
  editArticle,
  deleteArticle,
} from '../../actions';
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
  it('should set articles', () => {
    const articlesSet = [
      {
        id: 'kdngrtry',
        date: 1597072589725,
        title: 'Fugit voluptas sed molestias voluptatem providen',
        image: '',
      },
      {
        id: 'kdngrtto',
        date: 1597073737530,
        title: 'Voluptatem eligendi optio',
        image: '',
      },
      {
        id: 'kdngrtpu',
        date: 1534118409710,
        title: 'Adipisci placeat illum aut reiciendis qui',
        image: '',
      },
    ];
    const setAction = setArticles(articlesSet);
    const articlesState = reducer(initialState, setAction);

    expect(articlesState.length).toBe(3);
  });

  it('should add article', () => {
    const addAction = addArticle({
      title: 'Dolorem eum magni eos aperiam quia',
      description: 'ut aspernatur corporis harum nihil quis provident sequi',
    });
    const articlesState = reducer(initialState, addAction);

    expect(articlesState.length).toBe(2);
  });

  it('should edit article', () => {
    const editdAction = editArticle({
      id: 'kdngrtrv',
      title: 'Et ea vero quia laudantium autem',
      description:
        'Delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus',
    });
    const articlesState = reducer(initialState, editdAction);

    expect(articlesState.length).toBe(1);
    expect(articlesState).toEqual([
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
    const articlesState = reducer(initialState, deleteAction);

    expect(articlesState.length).toBe(0);
  });
});
