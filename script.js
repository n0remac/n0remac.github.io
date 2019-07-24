const refineryEndpointUrl = 'https://qzpe8v6zy0.execute-api.us-west-2.amazonaws.com/refinery/replaceme/featherdeathweed';

async function makeRefineryRequest() {
  const response = await fetch(refineryEndpointUrl);
  
  return response.json();
}

let count = 1;

document.querySelector('.my-favorite-button').onclick = async function buttonClicked() {
  const contentContainer = document.querySelector('.button-clicked-content');
  
  const responseContent = await makeRefineryRequest();
  
  console.log(responseContent);
  
  const contentElement = document.createElement('div');
  
  contentElement.innerText = responseContent.yo + ' #' + count;
  count++;
  
  contentContainer.appendChild(contentElement);
}