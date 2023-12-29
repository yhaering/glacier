import { parseProgram } from './parseProgram';
import { fakeParserContext } from '../../../../test/fakes/fakeParserContext';
import { parseProgramBody } from './parseProgramBody';

jest.mock('./parseProgramBody', () => ({
  parseProgramBody: jest.fn().mockReturnValue('{{PROGRAM_BODY}}')
}));

function run() {
  const context = fakeParserContext();
  const returnValue = parseProgram(context);
  return { returnValue, context };
}

describe('parseProgram', () => {
  beforeEach(run);

  test('exports a function called parseProgram', () => {
    expect(parseProgram).toBeInstanceOf(Function);
  });

  test('calls PositionContext.decorate', () => {
    const { context } = run();
    expect(context.position.decorate).toHaveBeenCalledWith(
      expect.any(Function)
    );
  });

  test('calls parseProgramBody', () => {
    const { context } = run();
    expect(parseProgramBody).toHaveBeenCalledWith(context);
  });

  test('returns Program Node', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'Program',
      body: '{{PROGRAM_BODY}}'
    });
  });
});
