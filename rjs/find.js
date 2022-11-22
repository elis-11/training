const arr = [ 
    "Tiana", 
    "Artur", 
    "Alice", 
    "Peter", 
  ];
  
  console.log(arr.length)

  const result = arr.find(item => item.startsWith("A")); // "maple"
  console.log(result)
  const res = arr.find(item => item.includes("P")); 
  console.log(res)
