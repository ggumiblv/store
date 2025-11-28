const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
  //ошибка, запрос, ответ, функция next, вызвав которую мы передадим управление следующему в цепочке middleware
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Непредвиденная ошибка!' });
};
