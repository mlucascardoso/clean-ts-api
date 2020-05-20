module.exports = {
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/**/index.ts',
        '!<rootDir>/src/**/*-protocols.ts',
        '!<rootDir>/src/main/**'
    ],
    coverageDirectory: 'coverage',
    preset: '@shelf/jest-mongodb',
    roots: ['<rootDir>/src'],
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}
