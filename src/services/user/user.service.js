import jwt from 'jsonwebtoken';

class UserService {
    constructor({ userRepository }) {
        this._userRepository = userRepository;
    }

    async create(user) {
        const [createdUser] = await this._userRepository.create(user);

        const accessToken = jwt.sign({ id: user.id, type: user.type }, process.env.JWT_SECRET);

        const result = {
            ...createdUser,
            accessToken
        };

        return result;
    }

    async getById(id) {
        const user = await this._userRepository.getById(id);

        return user;
    }

    async updateById(id, data) {
        const user = await this._userRepository.updateById(id, data);

        return user;
    }
}

export { UserService };