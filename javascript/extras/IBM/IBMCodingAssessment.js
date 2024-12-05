// Can you fill the answer?
/*
 * Complete the 'getTotalExecutionTime' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY logs ex: ["0:start:0", "2:start:4"]
 */

// function getTotalExecutionTime(n, logs) {
// Write your code here

// }

function getTotalExecutionTime(n, logs) {
  let totalExecutionTime = new Array(n).fill(0);
  let stack = [];
  let prevTime = 0;

  logs.forEach((log) => {
    let [id, type, time] = log.split(':');
    id = parseInt(id);
    time = parseInt(time);

    if (type === 'start') {
      if (stack.length > 0) {
        totalExecutionTime[stack[stack.length - 1]] += time - prevTime;
      }
      stack.push(id);
      prevTime = time;
    } else {
      totalExecutionTime[id] += time - prevTime + 1;
      stack.pop();
      prevTime = time + 1;
    }
  });

  return totalExecutionTime;
}
