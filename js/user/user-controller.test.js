const User = require('./user');
const UserController = require('./user-controller');

describe('UserController Tests', () => {
    let controller;
    let user1;

    beforeEach(() => {
        controller = new UserController();
        user1 = new User(1, 'Alice', 'alice@test.com');
    });

    test('add a new user not in the list', () => {
        expect(controller.add(user1)).toBe(true);
        expect(controller.getUsers().length).toBe(1);
    });

    test('remove a user not in the list should return false', () => {
        expect(controller.remove(user1)).toBe(false);
    });

    test('findByEmail should return correct user', () => {
        controller.add(user1);
        expect(controller.findByEmail('alice@test.com')).toBe(user1);
        expect(controller.findByEmail('bob@test.com')).toBeUndefined();
    });

    test('findById should return correct user', () => {
        controller.add(user1);
        expect(controller.findById(1)).toBe(user1);
        expect(controller.findById(2)).toBeUndefined();
    });
});
