'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const balls = {
      player: 5,
      bot: 5,
    };

    return function start() {
      let playerNumber = +prompt(`Загадай число от 1 до ${balls.player}`);

      const thinkNumber = (num) => {
        if ((num > balls.player) || (num < 0) || (num === 0) || (!Number(num)))  {
          playerNumber = +prompt(`Загадай число от 1 до ${balls.player}`);
          thinkNumber(playerNumber);
        } else {
          return playerNumber;
        }
      }

      thinkNumber(playerNumber);

      const comp = (getRandomIntInclusive(1, balls.player)) % 2 ? 'четное' : 'нечетное';

      if ((((playerNumber % 2) === 0) && (comp === 'четное')) || (((playerNumber % 2) !== 0) && (comp === 'нечетное'))) {
        balls.bot += playerNumber;
        balls.player -= playerNumber;
      } else {
        balls.bot -= playerNumber;
        balls.player += playerNumber;
      }

      switch (true) {
        case balls.bot === 0:
          return alert(`Бот проиграл. \nКоличество шаров бота = ${balls.bot}`);
        case balls.player === 0:
          return alert(`Вы проиграли. \nКоличество ваших шаров = ${balls.player}`);
      }

      return start();
    };
  };

  window.RPS = game;
})();
