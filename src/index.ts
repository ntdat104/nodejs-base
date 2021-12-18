import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.status(200).json({ code: 200, message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT} 🚀`);
});
