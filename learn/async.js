const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Something went wrong.');
  }
});

myPromise
  .then(result => {
    console.log(result); // This will run if the Promise is fulfilled
  })
  .catch(error => {
    console.error(error); // This will run if the Promise is rejected
  })
  .finally(() => {
    console.log('The promise has completed'); // This will run when the Promise is settled
  });
  //

const { setTimeout: delay } = require('node:timers/promises');

const promise = delay(1000).then(() => 'First task completed');

promise
  .then(result => {
    console.log(result); // 'First task completed'
    return delay(1000).then(() => 'Second task completed'); // Return a second Promise
  })
  .then(result => {
    console.log(result); // 'Second task completed'
  })
  .catch(error => {
    console.error(error); // If any Promise is rejected, catch the error
  });
  //

  async function performTasks() {
  try {
    const result1 = await promise1;
    console.log(result1); // 'First task completed'

    const result2 = await promise2;
    console.log(result2); // 'Second task completed'

  } catch (error) {
    console.error(error); // Catches any rejection or error
  }
}

performTasks();
//
const { setTimeout: delay } = require('node:timers/promises');

const fetchData1 = delay(1000).then(() => 'Data from API 1');
const fetchData2 = delay(2000).then(() => 'Data from API 2');

Promise.all([fetchData1, fetchData2])
  .then(results => {
    console.log(results); // ['Data from API 1', 'Data from API 2']
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log("this promise finished")
  });


//
const promise1 = Promise.resolve('Success');
const promise2 = Promise.reject('Failed');

Promise.allSettled([promise1, promise2]).then(results => {
  console.log(results);
  // [ { status: 'fulfilled', value: 'Success' }, { status: 'rejected', reason: 'Failed' } ]
});
//
function mightThrow() {
  if (Math.random() > 0.5) {
    throw new Error('Oops, something went wrong!');
  }
  return 'Success!';
}

Promise.try(mightThrow)
  .then(result => {
    console.log('Result:', result);
  })
  .catch(err => {
    console.error('Caught error:', err.message);
  })
  .finally(() => console.log("promise finished") );
//
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error.message)) // Handles the rejection
  .finally(() => console.log('Promise completed')); // Runs regardless of promise resolution