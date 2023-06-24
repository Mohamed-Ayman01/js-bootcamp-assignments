function checkStatus(a, b, c) {
  let name, age, status;
  let params = [a, b, c];

  for (let i = 0; i < params.length; i++) {
    typeof params[i] === "string" 
      ? name = params[i]
      : typeof params[i] === "number"
      ? age = params[i]
      : status = params[i]
  }

  let statusText = status === true ? "You Are Available For Hire" : "You Are Not Available For Hire";

  console.log(`Hello ${name}, Your Age Is ${age}, ${statusText}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"