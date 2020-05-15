module.exports = {
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/**/index.ts',
        '!<rootDir>/src/**/*-protocols.ts'
    ],
    coverageDirectory: 'coverage',
    roots: ['<rootDir>/src'],
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}
