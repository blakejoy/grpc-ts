import {credentials} from '@grpc/grpc-js';

import {UsersClient} from '../proto/js/user_grpc_pb';


const port = 3000;

export const client = new UsersClient(
    `localhost:${port}`,
    credentials.createInsecure()
)

export const noop = () => {}
