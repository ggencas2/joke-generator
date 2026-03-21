const button = document.querySelector("button");

async function displayJoke() {
  button.disabled = true;
  button.textContent = "Loading...";
  document.getElementById("setup").textContent = "";
  document.getElementById("punchline").textContent = "";
  document.getElementById("error").textContent = "";

  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    document.getElementById("setup").textContent = data.setup;
    document.getElementById("punchline").textContent = data.delivery;
  } catch (error) {
    document.getElementById("error").textContent = "Failed to load joke. Try again!";
    console.error("Error:", error);
  } finally {
    button.disabled = false;
    button.textContent = "Get Joke";
  }
}

button.addEventListener('click', displayJoke);