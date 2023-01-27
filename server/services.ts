import {sendUnaryData, ServerReadableStream, ServerUnaryCall, ServerWritableStream} from '@grpc/grpc-js';
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import {User, UserRequest} from '../proto/js/user_pb';
import {IUsersServer} from '../proto/js/user_grpc_pb';
import {users} from './db';

export class UsersServer implements IUsersServer{
    getUser(call: ServerUnaryCall<UserRequest, User>, callback: sendUnaryData<User>){
        const userId = call.request.getId();
        const user = users.find(u => u.getId() === userId);

        if (!user) {
            const error = {
                name: "User Missing",
                message: `User with ID ${userId} does not exist.`,
            };
            callback(error, null);
            return;
        }

        console.log(`getUser: returning ${user.getName()} (id: ${user.getId()}).`);
        callback(null, user);
    }

    createUser(call: ServerReadableStream<User,Empty>, callback: sendUnaryData<Empty>){
        console.log(`createUser: creating new user from stream`);
        let userCount = 0;
        call.on('data', (u) => {
            users.push(u)
        });
        call.on('end', () => {
            callback(null, new Empty())
        })
    }
    getUsers(call: ServerWritableStream<Empty, User>){
        console.log(`getUsers: streaming all users`);
        for(const user of users) call.write(user);
        call.end();
    }
}
