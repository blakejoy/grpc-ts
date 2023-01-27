import {Server, ServerCredentials} from '@grpc/grpc-js';
import {UsersServer} from './services';
import {UsersService} from '../proto/js/user_grpc_pb';


const server = new Server();
// @ts-ignore
server.addService(UsersService, new UsersServer())

const port = 3000;
const uri = `localhost:${port}`;

console.log(`Listening on ${uri}`)


server.bindAsync(uri, ServerCredentials.createInsecure(), (err) => {
    if (err) console.log(err);
    server.start();
});


