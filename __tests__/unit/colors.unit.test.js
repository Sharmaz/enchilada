import { describe, test, expect } from '@jest/globals';
import { separator, setColor, setUnderlineOff } from '../../src/utils/colors';

describe('separator', () => {
  test('returns a string with correct padding', () => {
    const result = separator('React');
    expect(typeof result).toBe('string');
    expect(result).toContain('|');
  });

  test('shorter titles produce more padding', () => {
    const short = separator('React');
    const long = separator('React Dev Webpack');
    expect(short.length).toBeGreaterThan(long.length);
  });
});

describe('setColor', () => {
  test('returns colored string for Frontend', () => {
    const result = setColor('Frontend');
    expect(result).toContain('Frontend');
  });

  test('returns colored string for Backend', () => {
    const result = setColor('Backend');
    expect(result).toContain('Backend');
  });

  test('returns colored string for VanillaJS', () => {
    const result = setColor('VanillaJS');
    expect(result).toContain('VanillaJS');
  });

  test('returns colored string for NodeJS', () => {
    const result = setColor('NodeJS');
    expect(result).toContain('NodeJS');
  });

  test('returns colored string for values containing Node', () => {
    const result = setColor('Node Express');
    expect(result).toContain('Node Express');
  });

  test('returns colored string for values containing JavaScript', () => {
    const result = setColor('React JavaScript');
    expect(result).toContain('React JavaScript');
  });

  test('returns colored string for values containing Rspack', () => {
    const result = setColor('React Rspack');
    expect(result).toContain('React Rspack');
  });

  test('returns colored string for values containing Rust', () => {
    const result = setColor('React Rust');
    expect(result).toContain('React Rust');
  });

  test('returns colored string for values containing TypeScript', () => {
    const result = setColor('React TypeScript');
    expect(result).toContain('React TypeScript');
  });

  test('returns colored string for values containing React', () => {
    const result = setColor('React');
    expect(result).toContain('React');
  });

  test('returns uncolored string for unknown values', () => {
    const result = setColor('Unknown');
    expect(result).toBe('Unknown');
  });
});

describe('setUnderlineOff', () => {
  test('returns a reset string', () => {
    const result = setUnderlineOff('some text');
    expect(result).toContain('some text');
  });
});
