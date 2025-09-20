
import { eventHandler } from 'h3';

import { createWorker } from 'tesseract.js';


export default eventHandler(async () => {

  const worker = await createWorker('eng');
  const ret = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  await worker.terminate();

  return (`
    <meta charset="utf-8">
    <h1>${ret.data.text}</h1>
  `);

});
