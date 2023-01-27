import {User} from '../proto/js/user_pb';
import {client, noop} from './utils';


export default function createUsers(users: User[]){
    return new Promise<User[]>((resolve, reject) => {
        const stream = client.createUser(noop);
        for(const user of users){
            stream.write(user);
        }
        stream.end();
    })
}
