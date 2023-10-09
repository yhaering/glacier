import { transformSegment } from './transformSegment';
import { fakeSegmentStream } from '../../../test/fakes/fakeSegmentStream';
import { fakeTokenStreamContext } from '../../../test/fakes/fakeTokenStreamContext';

function run() {
  const segmentStream = fakeSegmentStream();
  const context = fakeTokenStreamContext();
  const returnValue = transformSegment(segmentStream, context);
  return { returnValue };
}

describe('transformSegment', () => {
  beforeEach(run);

  test('exports a function called transformSegment', () => {
    expect(transformSegment).toBeInstanceOf(Function);
  });
});
