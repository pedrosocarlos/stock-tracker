"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    roots: ['<rootDir>/src'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testEnvironment: "jest-environment-node",
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
};
exports.default = config;
