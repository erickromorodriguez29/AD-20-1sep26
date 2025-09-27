

const User = require('./user');

class UserController {
    constructor() {
        this.users = [];
    }

    getUsers() {
        return this.users;
    }

    add(user) {
        if (!this.users.some(u => u.id === user.id)) {
            this.users.push(user);
            return true;
        }
        return false;
    }

    remove(user) {
        const initialLength = this.users.length;
        this.users = this.users.filter(u => u.id !== user.id);
        return this.users.length < initialLength;
    }

    findByEmail(email) {
        return this.users.find(u => u.email === email);
    }

    findById(id) {
        return this.users.find(u => u.id === id);
    }
}

module.exports = UserController;
