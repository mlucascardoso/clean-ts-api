import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

describe('Name of the group', () => {
    it('should call bcrypt with correct values', async () => {
        const salt = 12
        const sut = new BcryptAdapter(salt)
        const hashSpy = jest.spyOn(bcrypt, 'hash')

        await sut.encrypt('any_value')

        expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
    })
})