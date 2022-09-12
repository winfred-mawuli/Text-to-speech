let convert =  document.querySelector('.convert');
let textarea = document.querySelector('.textarea');


let speech = new SpeechSynthesisUtterance();
convert.addEventListener('click', ()=>{
    speech.text = textarea.value;
    speech.pitch = 1; speech.volume= 10;
    speech.lang = "en-US";
    speech.rate = 1;
    speechSynthesis.speak(speech);
})