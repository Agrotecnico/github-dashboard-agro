const util = require('util');

const sleep = util.promisify(setTimeout);


export  async function taskOne() {
  try {
    /* throw Error('SOME PROBLEM'); */
    await sleep(5000);
    return 'ONE VALUE';
  }
  catch (e) {
    console.log(e);
  }
}

export async function taskTwo() {
  try {
    await sleep(2000);
    return 'TWO VALUE';
  }
  catch (e) {
    console.log(e);
  }
}
