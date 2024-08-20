"use client"

import { taskOne, taskTwo } from './tasks'

// Secuentially Processes
async function main() {
  try {
    console.time('Measuring time');

    /* const valueOne = await taskOne(); // task 4 seconds to finish
    const valueTwo = await taskTwo(); // wait the last task to finish

    console.log('Task One returned: ', valueOne);
    console.log('Task Two returned: ', valueTwo); */

    const [data1, data2] = await Promise.all([taskOne(), taskTwo()]);

    console.log('Task One returned: ', data1);
    console.log('Task Two returned: ', data2);
    
    console.timeEnd('Measuring time'); // the total is 6 seconds to finish
  }
  catch (e) {
    console.log(e);
  }
}

main();
