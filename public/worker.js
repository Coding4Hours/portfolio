// worker.js
onmessage = function(e) {
  if (e.data === 'start') {
    let result = performWork();
    
    // Send PostHog event back to main thread
    postMessage({
      type: 'posthog_event',
      eventName: 'worker_task_completed',
      properties: {
        result: result,
        duration_ms: 1000
      }
    });
    
    // Send the result back to the main thread
    postMessage(result);
  }
};

// ... rest of your existing code
function performWork() {
  // Simulate some heavy computation
  let result = 0;
  for(let i = 0; i < 1000000; i++) {
    result += Math.sqrt(i);
  }
  return result;
}
