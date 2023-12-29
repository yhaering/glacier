import { parseProgramBody } from './parseProgramBody';
import { fakeParserContext } from '../../../../test/fakes/fakeParserContext';
import { tryUntil } from '../tryUntil';
import { isNotEOF } from '../../checks/isNotEOF';
import { tryParser } from '../tryParser';
import { parseDirective } from './parseDirective';
import { parseStatement } from './parseStatement';
import { parseModuleDeclaration } from './parseModuleDeclaration';

jest.mock('../tryUntil', () => ({
  tryUntil: jest.fn().mockImplementation((_, __, fn) => fn())
}));

jest.mock('../tryParser', () => ({
  tryParser: jest.fn()
}));

function run() {
  const context = fakeParserContext();
  const returnValue = parseProgramBody(context);
  return { returnValue, context };
}

describe('parseProgramBody', () => {
  beforeEach(run);

  test('exports a function called parseProgramBody', () => {
    expect(parseProgramBody).toBeInstanceOf(Function);
  });

  test('calls tryUntil', () => {
    const { context } = run();
    expect(tryUntil).toHaveBeenCalledWith(
      context,
      isNotEOF,
      expect.any(Function)
    );
  });

  test('calls tryParser', () => {
    const { context } = run();
    expect(tryParser).toHaveBeenCalledWith(context, [
      parseDirective,
      parseStatement,
      parseModuleDeclaration
    ]);
  });
});
