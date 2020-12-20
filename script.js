var textInput = document.querySelector("#textarea-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDisplay = document.querySelector("#output-div");

var serverURL = "https://api.funtranslations.com/translate/oldenglish.json";

function getTranslationUrl(text) {
  return serverURL + "?" + "text=" + text;
}

function handleError(err) {
  alert(
    "Something went wrong with the server!, Please try again after sometime"
  );
}

function clickEventHandler() {
  var input = textInput.value;
  fetch(getTranslationUrl(input))
    .then((res) => res.json())
    .then((data) => {
      outputDisplay.innerText = data.contents.translated;
    })
    .catch(handleError);
}

btnTranslate.addEventListener("click", clickEventHandler);
