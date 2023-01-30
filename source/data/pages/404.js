const title = 'Error 404';

export default () => ({
  heading: 'Приносим извинения за доставленные неудобства',
  pageTitle: title,
  announce: {
    label: 'Страница не найдена',
    link: {
      title: 'На главную',
      url: 'index.html',
    },
    title,
  },
});
