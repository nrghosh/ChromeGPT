async function handleQuestion() {
  try {
    const question = document.getElementById("question").value;
    chrome.runtime.sendMessage({question: question}, function(response) {
      document.getElementById("response").innerHTML = response.response;
    });
  } catch (error) {
    console.error(error);
  }
}
