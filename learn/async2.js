async function performTask() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error); // Handles any errors
  } finally {
    // This code is executed regardless of failure
    console.log('performTask() completed');
  }
}

performTask();
//
queueMicrotask(() => {
  console.log('Microtask is executed');
});

console.log('Synchronous task is executed');
//

process.nextTick(() => {
  console.log('Next tick callback');
});

console.log('Synchronous task executed');
//

const timeout = setTimeout(() => {
  // should run after 2 seconds
}, 2000);
// I changed my mind
clearTimeout(timeout);