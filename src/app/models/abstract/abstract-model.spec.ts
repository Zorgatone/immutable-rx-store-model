import { AbstractModel } from './abstract-model';

class DerivedModel extends AbstractModel {}

describe('AbstractModel', () => {
  it('should create an instance', () => {
    expect(new DerivedModel()).toBeTruthy();
  });
});
