import path from 'path';
import { expect } from 'chai';

import { getFilePackagePath } from 'core/packagePath';

describe('packagePath', function () {
  it('reports a clear error when no package.json can be found', function () {
    const fileWithoutPackage = path.join(
      path.parse(process.cwd()).root,
      'eslint-plugin-import-no-package',
      'file.js',
    );

    expect(() => getFilePackagePath(fileWithoutPackage))
      .to.throw('Unable to find package.json');
  });
});
