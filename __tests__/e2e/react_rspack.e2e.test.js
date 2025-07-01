import { rm } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import runTest, { ENTER, DOWN } from 'cli-prompts-test';
import { execa } from 'execa';
import { mainPath, appNameMock, genPath } from '../__mocks__/dataMock';

beforeAll(() => rm(genPath, { recursive: true, force: true }));
afterEach(() => rm(genPath, { recursive: true, force: true }));

describe('react-rspack template', () => {

  test('prompt shows React Rust', async () => {
    const { exitCode, stdout } = await runTest([mainPath], [ENTER, DOWN, DOWN, DOWN]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('React Rust');
  });

  test('prompt shows React Rspack template', async () => {
    const { stdout } = await runTest([mainPath], [ENTER, DOWN, DOWN, DOWN, ENTER, ENTER, appNameMock, ENTER]);

    await new Promise((res) => setTimeout(res, 3000));
    expect(stdout).toContain('React Rspack');
  }, 10000);

  test('implemented react-rspack template', async () => {
    await execa`node index.js --template react-rspack ${appNameMock}`;
    
    const packageJson = readFileSync(`${genPath}/package.json`, 'utf8');
    expect(packageJson).toContain('rspack');
  });
});
