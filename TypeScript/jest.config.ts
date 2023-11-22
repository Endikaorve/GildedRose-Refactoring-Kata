import { pathsToModuleNameMapper } from 'ts-jest/utils'
const { compilerOptions } = require('./tsconfig')

export default {
  roots: ['<rootDir>/app', '<rootDir>/test/jest'],
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
}
