const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: 3, username: 'joshua' }, 'server secret', { expiresIn: '1h' });

token; // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impvc2h1YSIsImlhdCI6MTU4ODAyNDkwMSwiZXhwIjoxNTg4MDI4NTAxfQ.LGqAMv7Bc7xKKHiQp8m4bpqR53h5dJBOZ4Kv2b9qmqY'

const recoveredData = jwt.verify(token, 'server secret');

recoveredData; // { id: 3, username: 'joshua', iat: 1588024901, exp: 1588028501 }

// wait 1 hour:

jwt.verify(token, 'server secret');

// Uncaught TokenExpiredError: jwt expired {
//   name: 'TokenExpiredError',
//   message: 'jwt expired',
//   expiredAt: 2020-04-27T21:58:57.000Z
// }