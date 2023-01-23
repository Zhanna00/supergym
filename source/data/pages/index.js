import decline from '../../js/utils/decline.js';
import html from '../../js/utils/html.js';

const getSubscription = (months = 1, discount = 1) => {
  const times = 12 * months;
  const multiplier = parseInt(months * discount, 10);

  return {
    list: [
      {
        description: `${times} ${decline(times, ['занятие', 'занятия', 'занятий'])}`,
        heading: 'С тренером',
        price: 5000 * multiplier,
      },
      {
        description: 'с 8:00 до 17:00 ',
        heading: 'Дневной',
        price: 1700 * multiplier,
      },
      {
        description: 'с 8:00 до 22:00 ',
        heading: 'Полный день',
        price: 2700 * multiplier,
      },
    ].map((tariff) =>
      Object.assign(tariff, {
        link: {
          title: 'Купить абонемент',
          url: '#!',
        },
      })
    ),
    title: `${months} ${decline(months, ['месяц', 'месяца', 'месяцев'])}`,
  };
};


export default ({getImages}) => {
  return {
    announce: {
      privileges: ['Тренажёрный зал', 'Групповые занятия', 'Кардио-зона'],
      label: 'Омск',
      link: {
        title: 'Купить абонемент',
        url: '#',
      },
      image: getImages('announce', {alt: 'Каким Вы можете стать благодаря нам.'}, true, false),
      title: 'Фитнес центр',
    },
    about: {
      content: html`<h2>Тренажерный зал</h2>
        <p>Просторный зал площадью 900 кв/м</p>
        <p>
          Supergym – самый большой фитнес центр за Уралом и идеальное место для укрепления тела и здоровья. Тренажерный
          зал оснащен всем необходимым современным оборудованием для всех спортсменов.
        </p>
        <p>
          В зале расположены отдельная зона для Crossfit и кардио-зона с 40 тренажерами. Также в фитнес центре есть
          несколько оборудованных залов для различных видов групповых занятий.
        </p> `,
      image: getImages('about', {alt: 'Тренажерный зал фитнес центра.'}),
      video: {
        poster: getImages('about-video', {}, false, true),
        youtube: '9TZXsZItgdw',
      },
    },
    subscriptions: {
      decor: getImages('wheels', {}, false, false),
      heading: 'Абонементы',
      groups: [getSubscription(), getSubscription(6, 0.9), getSubscription(12, 0.8)],
    },
  };
};
