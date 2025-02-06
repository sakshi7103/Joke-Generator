
async function getJoke() {
    const joke=document.getElementById('joke');
    const url = 'https://icanhazdadjoke.com/'; //fetch random jokes
  
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',  // Ensures the response is in JSON format
        }
      });
  
      const data = await response.json();
  
      if (data.joke) {
       joke.innerText=data.joke;
      } else {
        joke.innerText='No joke found.';
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
      joke.innerText='Error fetching joke.';
    }
  }
  
  