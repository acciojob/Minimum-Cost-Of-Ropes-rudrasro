function calculateMinCost() {
  // Check if the form exists
  const form = document.querySelector("form");
  if (!form) {
    throw new Error("Form does not exist");
  }

  // Get the input value and parse it as an array of integers
  const arr = form.elements["rope-lengths"].value
    .split(", ")
    .map((e) => parseInt(e));

  const n = arr.length;
  let pq = [];

  // Adding items to the pQueue
  for (let i = 0; i < n; i++) {
    pq.push(arr[i]);
  }

  pq.sort(function (a, b) {
    return a - b;
  });

  // Initialize result
  let res = 0;

  // While size of priority queue is more than 1
  while (pq.length > 1) {
    // Extract shortest two ropes from pq
    let first = pq.shift();
    let second = pq.shift();

    // Connect the ropes: update result
    // and insert the new rope to pq
    res += first + second;
    pq.push(first + second);
    pq.sort(function (a, b) {
      return a - b;
    });
  }

  // Set the result text in the HTML element with ID "result"
  const result = document.getElementById("result");
  result.innerText = res;
}
