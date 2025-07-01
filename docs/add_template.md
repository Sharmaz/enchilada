# How to add a new template

## Files to change

- Template folder (required) `./templates`
- Template CLI options (required) `./src/templateList.js`
- Color functions (if exists could be optional) `./src/templateList.js`
- Readme (required) `./README.md`
- CLI Help message (required)`.src/helpMessage.js`
- Template tests (optional but recommended)`./__tests__/e2e`

## The new template
The new templates are placed in the `./templates` folder.

It is important to have a concise and descriptive name, this name acts as an identifier. Example: `react-rspack`.

In this example to add a new template to the list, you need to select the `Frontend` category. In addition, we will create a subcategory. `React Rust`, and inside we will add the template name as a `value` in the `./src/templateList.js` file. As a `title`, we add the name `React Rspack` with the description `React + Rspack`. Using the `setColor` and `separator` utilities.

```javascript
const templateCategories = {
  'Frontend': {
    'React Rust': [
      {
        value: 'react-rspack',
        title: `${setColor('React Rspack')}${separator('React Rspack')}${setUnderlineOff(colors.error('React + Rspack'))}`,
      },
    ],
  }
}
```

If the color is not appropriate or the color `rust` does not exist, you need to create a new color in the file `./src/utils/colors.js`, and also make sure it is already used by the `setColor` function for both the `React Rust` category and the `React Rspack` template:

```javascript
export const colors = {
  rust: chalk.hex('#D34516'),
};

export function setColor (val) {
  const valSplit = val.split(' ');

  // Note: make sure that the validation including the word 'React' is always at the end
  if (valSplit.includes('Rspack')) { return colors.rust(val); }
  if (valSplit.includes('Rust')) { return colors.rust(val); }

  return (val);
};
```

## Documentacion

You need to add the new template to the `README.md`, with its title and description:

```markdown
### Template List
| TEMPLATE | DESCRIPTION |
| :------- | :---------- |
| **react-rspack**          | React + Rspack |

```

As well as the help message in `.src/helpMessage.js`:

```javascript
const helpMessage = `
Usage: create-enchilada [OPTION]... [DIRECTORY]
...

Available templates:
  react-rspack              React + Rspack
`;
```

## Tests
They are optional but recommended.
Notice that at **unit tests** we focus on testing the CLI functionality.
To test the templates, we do **end to end** tests.

### End to end tests

1. Create the file `[template_name].e2e.test.js` in the `./__tests__/e2e` folder, in our example it would be `react_rspack.e2e.test.js`

2. Add the necessary dependencies to start creating the tests.

```javascript
import { expect, beforeAll, afterEach, describe } from '@jest/globals';
import { rm } from 'node:fs/promises';
import { readFileSync } from 'node:fs';

import runTest, { ENTER, DOWN } from 'cli-prompts-test'; // 👈 DOWN, ENTER to select the CLI options
import { execa } from 'execa'; // 👈 Execa to execute commands
import { mainPath, appNameMock, genPath } from '../__mocks__/dataMock';

```

3. The required tests are two: check that the template exists to select it and verify that a project has been created with that template:

```javascript
test('prompt shows React Rspack template', async () => {
  const { exitCode, stdout } = await runTest([mainPath], [ENTER, DOWN, DOWN, DOWN, ENTER]);

  expect(exitCode).toBe(0);
  expect(stdout).toContain('React Rspack');
});

test('implemented react-rspack template', async () => {
  await execa`node index.js --template react-rspack ${appNameMock}`;
  const packageJson = readFileSync(`${genPath}/package.json`, 'utf8');
  expect(packageJson).toContain('rspack');
});
```

The final test file looks like this:

```javascript
import { expect, beforeAll, afterEach, describe } from '@jest/globals';
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
    const { exitCode, stdout } = await runTest([mainPath], [ENTER, DOWN, DOWN, DOWN, ENTER]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('React Rspack');
  });

  test('implemented react-rspack template', async () => {
    await execa`node index.js --template react-rspack ${appNameMock}`;
    const packageJson = readFileSync(`${genPath}/package.json`, 'utf8');
    expect(packageJson).toContain('rspack');
  });
});
```
