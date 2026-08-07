import { RuleTester } from '../rule-tester';
import { test } from '../utils';

const rule = require('rules/no-import-module-exports');
const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6, sourceType: 'module' },
});

ruleTester.run('no-import-module-exports: shadowed module', rule, {
  valid: [
    test({
      code: `
        import thing from 'otherthing'
        const module = { exports: {} }
        module.exports.thing = thing
      `,
    }),
  ],
  invalid: [],
});
