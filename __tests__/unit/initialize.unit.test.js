import { afterEach, describe, test, expect } from '@jest/globals';
import { existsSync, readFileSync, rmSync, mkdirSync } from 'node:fs';

import copyFilesAndDirectories from '../../src/templateCopy';
import initialize from '../../src/initialize';
import { appNameMock, sourcePath, genPath } from '../__mocks__/dataMock';

afterEach(() => rmSync(genPath, { recursive: true, force: true }));

describe('Initialize app', () => {
  test('Create a new app', () => {
    initialize(sourcePath, genPath, appNameMock);

    const packageJson = readFileSync(`${genPath}/package.json`, 'utf8');
    expect(packageJson).toContain(appNameMock);
  });
  test('Attempt directory already exist', () => {
    mkdirSync(genPath, { recursive: true });
    copyFilesAndDirectories(sourcePath, genPath);
    initialize(sourcePath, genPath, appNameMock);

    const packageJson = readFileSync(`${genPath}/package.json`, 'utf8');
    expect(packageJson).toContain('vanilla-js');
  });
  test('Invalid template path does not create directory', () => {
    const invalidSource = '/non/existent/template';
    initialize(invalidSource, genPath, appNameMock);

    expect(existsSync(genPath)).toBe(false);
  });
});
