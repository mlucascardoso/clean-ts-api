import bcrypt from 'bcrypt'

import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
    async hash(): Promise<string> {
        return Promise.resolve('hashed_value')
    }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
    return new BcryptAdapter(salt)
}

describe('Name of the group', () => {
    it('should call bcrypt with correct values', async () => {
        const sut = makeSut()
        const hashSpy = jest.spyOn(bcrypt, 'hash')

        await sut.encrypt('any_value')

        expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
    })

    it('should return a hash on success', async () => {
        const sut = makeSut()

        const hash = await sut.encrypt('any_value')

        expect(hash).toBe('hashed_value')
    })

    it('should throw if bcrypt throws', async () => {
        const sut = makeSut()
        jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(Promise.reject(new Error()))
        const promise = sut.encrypt('any_value')

        await expect(promise).rejects.toThrow()
    })
})
