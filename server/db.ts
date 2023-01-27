import {User, UserStatus} from '../proto/js/user_pb';

export function userToClass({id, name, age, status}: User.AsObject){
    const user = new User();
    user.setName(name)
    user.setAge(age)
    user.setId(id)
    user.setStatus(status)
    return user;
}


export const users: User[] = [
    {id: 1, name: 'Bill', age: 25, status: UserStatus.BUSY},
    {id: 2, name: 'Josh', age: 12, status: UserStatus.AVAILABLE}
].map(userToClass)
