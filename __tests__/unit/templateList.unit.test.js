import { describe, test, expect } from '@jest/globals';
import templateCategories from '../../src/templateList';

describe('templateCategories', () => {
  test('has Frontend and Backend categories', () => {
    expect(Object.keys(templateCategories)).toEqual(['Frontend', 'Backend']);
  });

  test('Frontend has correct subcategories', () => {
    const subcategories = Object.keys(templateCategories.Frontend);
    expect(subcategories).toEqual(['VanillaJS', 'React JavaScript', 'React TypeScript', 'React Rust']);
  });

  test('Backend has correct subcategories', () => {
    const subcategories = Object.keys(templateCategories.Backend);
    expect(subcategories).toEqual(['NodeJS']);
  });

  test('each template entry has value and title', () => {
    const allTemplates = Object.values(templateCategories).flatMap(
      (category) => Object.values(category).flat(),
    );

    allTemplates.forEach((template) => {
      expect(template).toHaveProperty('value');
      expect(template).toHaveProperty('title');
      expect(typeof template.value).toBe('string');
      expect(typeof template.title).toBe('string');
    });
  });

  test('contains all expected template values', () => {
    const allTemplates = Object.values(templateCategories).flatMap(
      (category) => Object.values(category).flat(),
    );
    const values = allTemplates.map((t) => t.value);

    expect(values).toEqual([
      'vanilla-js',
      'react',
      'react-dev',
      'react-webpack',
      'react-dev-webpack',
      'react-typescript',
      'react-dev-typescript',
      'react-rspack',
      'node-express',
    ]);
  });
});
