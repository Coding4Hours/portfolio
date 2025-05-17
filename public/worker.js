// worker.js
onmessage = function(e) {
  if (e.data === 'start') {
    let result = performWork();
    // Send the result back to the main thread
    postMessage(result);
  }
};

function performWork() {
  // Simulate some heavy computation
  let result = 0;
  for(let i = 0; i < 1000000; i++) {
    result += Math.sqrt(i);
  }
  return result;
}
