function calculateMinCost() {
  //your code here
	const input = document.getElementById("input").value;
  const ropes = input.split(",").map(Number);
  
  // Step 1: Sort the ropes in increasing order of length
  ropes.sort((a, b) => a - b);
  
  let cost = 0;
  
  // Step 2-4: Merge ropes until only one is left
  while (ropes.length > 1) {
    const rope1 = ropes.shift();
    const rope2 = ropes.shift();
    const mergedRope = rope1 + rope2;
    cost += mergedRope;
    ropes.push(mergedRope);
    ropes.sort((a, b) => a - b);
  }
  
  // Step 5: Return the total cost
  document.getElementById("result").innerHTML = cost;
}  
