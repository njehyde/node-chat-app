const expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 123,
            name: 'UserOne',
            room: 'Room A'
        },
        {
            id: 456,
            name: 'UserTwo',
            room: 'Room B'
        },
        {
            id: 789,
            name: 'UserThree',
            room: 'Room A'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'Nicholas',
            room: 'Test room'
        };
        var res = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = 456;
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = 987;
        var user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userId = 123;
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = 987;
        var user = users.getUser(userId);
        expect(user).toBeUndefined();
    });

    it('should return names for Room A', () => {
        var usersList = users.getUserList('Room A');
        expect(usersList).toEqual(['UserOne','UserThree']);
    });

    it('should return names for Room B', () => {
        var usersList = users.getUserList('Room B');
        expect(usersList).toEqual(['UserTwo']);
    });

});