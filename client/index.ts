import getUsers from './get-user';
import {UserStatus, User} from '../proto/js/user_pb';
import createUsers from './create-users';
import allUsers from './all-users';


async function run(){
    const user = await getUsers(1);
    console.log(user.toString());

    const jim = new User();
    jim.setName('Jim');
    jim.setId(3);
    jim.setAge(25);
    jim.setStatus(UserStatus.BUSY)
    createUsers([jim]);
    console.log(`Created new user: ${jim.toString()}`)

    const users = await allUsers();
    console.log(`Listing all ${users.length} users`);
    for(const user of users){
        console.log(user.toString())
    }

}

run();
