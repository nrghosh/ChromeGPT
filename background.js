
// generated new API key
openai.apiKey = "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";

async function getResponse(prompt) {
  try {
    const response = await openai.completion.create({
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });
    return response.choices[0].text;
  } catch (error) {
    console.error(error);
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.question) {
      getResponse(request.question).then(response => {
        sendResponse({response: response});
      });
      return true;
    }
  }
);
