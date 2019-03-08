import useVirtualized from '../';

describe('useVirtualized', () => {
  it('Should return a ref object', () => {
    const virtualized = useVirtualized();
    expect(virtualized).toBeDefined();
  });
});
