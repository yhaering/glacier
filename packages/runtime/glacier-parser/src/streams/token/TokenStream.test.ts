import { TokenStream } from './TokenStream';

jest.mock('./functions/buildLookupTable', () => ({
  buildLookupTable: jest.fn().mockReturnValue({
    48: {
      type: 'DIGIT',
      props: ['ID_CONTINUE']
    }
  })
}));

jest.mock('./functions/getNextLocation', () => ({
  getNextLocation: jest.fn().mockReturnValue('{{LOC}}')
}));

function build() {
  const instance = new TokenStream('01');
  return { instance };
}

describe('TokenStream', () => {
  test('exports a class called TokenStream', () => {
    expect(TokenStream).toBeInstanceOf(Function);
  });

  describe('resolve', () => {
    test('returns first token', () => {
      const { instance } = build();
      const token = instance.next();
      expect(token).toEqual({
        type: 'DIGIT',
        value: '0',
        props: ['ID_CONTINUE'],
        loc: '{{LOC}}'
      });
    });

    test('returns second token', () => {
      const { instance } = build();
      instance.next();
      const token = instance.next();
      expect(token).toEqual({
        type: 'TEXT',
        value: '1',
        props: [],
        loc: '{{LOC}}'
      });
    });

    test('returns undefined', () => {
      const { instance } = build();
      instance.next();
      instance.next();
      const token = instance.next();
      expect(token).toBeUndefined();
    });
  });
});
