function sendPostRequest() {
  // Prepare the JSON payload
  const payload = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  // Set the AJAX request parameters
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  // Send the POST request with the JSON payload
  fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("Request successful!");
      console.log(data);
    })
    .catch((error) => {
      console.log("Request failed with error:");
      console.error(error);
    });
}

// Call the function to send the AJAX POST request
sendPostRequest();
