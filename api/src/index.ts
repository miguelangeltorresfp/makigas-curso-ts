import createServer from './server';

createServer().listen(3000, () => {
  console.log('Ya estamos escuchando');
});
