import { RuleTester } from '../rule-tester';
import { getTSParsers, test } from '../utils';

const rule = require('rules/no-import-module-exports');
const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6, sourceType: 'module' },
});

ruleTester.run('no-import-module-exports: type-only imports', rule, {
  valid: getTSParsers().map((parser) => test({
    code: `
      import type { Foo } from 'foo'
      module.exports = {}
    `,
    parser,
  })),
  invalid: [],
});
