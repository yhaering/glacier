import { Message } from './messages/Message';
import { WorkMessage } from './messages/WorkMessage';

process.addListener('message', async (message: Message) => {
  if (message.type === 'work') {
    const { fncPath, args } = message as WorkMessage;
    const fnc = require(fncPath).default;
    const data = await fnc(...args);
    if (process.send) {
      process.send({
        type: 'done',
        ref: message.ref,
        data,
      });
    }
  }
});
