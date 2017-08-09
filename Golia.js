var recognition = new SpeechRecognition();
recognition.onresult = function(event) {
  if (event.results.length > 0) {
    value = event.results[0][0].transcript;
        
function toggleStartStop() {
  if (recognizing) {
    recognition.stop();
    reset();
  } else {
    recognition.start();
    recognizing = true;
    button.innerHTML = "Click to Stop";
    final_span.innerHTML = "";
    interim_span.innerHTML = "";
  }
}

