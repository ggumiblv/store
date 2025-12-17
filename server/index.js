// require('dotenv').config();
// const express = require('express');
// const sequelize = require('./db');
// const models = require('./models/models');
// const cors = require('cors');
// const fileUpload = require('express-fileupload');
// const router = require('./routes/index');
// const errorHandler = require('./middleware/ErrorHandlingMiddleware');
// const path = require('path');
// const WebSocket = require('ws');

// const PORT = process.env.PORT || 9000;

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.static(path.resolve(__dirname, 'static')));
// app.use(fileUpload({}));
// app.use('/api', router);
// const wss = new WebSocket.Server({ port: 9000 });

// // Обработка ошибок должна быть в самом конце
// app.use(errorHandler);

// wss.on('connection', function connection(ws) {
//   console.log('Соединение установлено');

//   ws.on('message', function incoming(message) {
//     console.log(`Получено сообщение: ${message}`);
//   });

//   ws.on('close', function close() {
//     console.log('Соединение закрыто');
//   });
// });

// const start = async () => {
//   //все операции с базами данных должны быть асинхронными
//   try {
//     await sequelize.authenticate();
//     await sequelize.sync();
//     app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//   } catch (e) {
//     console.log(e);
//   }
// };

// start();

require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

// require('dotenv').config();
// const express = require('express');
// const sequelize = require('./db');
// const models = require('./models/models');
// const cors = require('cors');
// const fileUpload = require('express-fileupload');
// const router = require('./routes/index');
// const errorHandler = require('./middleware/ErrorHandlingMiddleware');
// const path = require('path');
// const http = require('http');
// const { Server } = require('socket.io');

// const PORT = process.env.PORT || 9000;

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.static(path.resolve(__dirname, 'static')));
// app.use(fileUpload({}));
// app.use('/api', router);
// app.use(errorHandler);

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST']
//   }
// });

// io.on('connection', (socket) => {
//   console.log(`Socket ${socket.id} connected`);
//   console.log(socket);

//   socket.on('first-part', (data) => {
//     console.log(`Received message: ${data}`);
//     socket.emit('listMessage', `Server says: ${data}`);
//   });

//   socket.on('disconnect', () => {
//     console.log(`Socket ${socket.id} disconnected`);
//   });
// });

// const start = async () => {
//   try {
//     await sequelize.authenticate();
//     await sequelize.sync();
//     server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//   } catch (e) {
//     console.log(e);
//   }
// };

// start();
