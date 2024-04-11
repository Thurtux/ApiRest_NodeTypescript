import { server} from './sever/Server';


server.listen(process.env.PORT || 4444, () => {
  console.log(`App rodando na porta ${process.env.PORT || 4444}`);
});