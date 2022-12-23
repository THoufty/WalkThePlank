var pirateTerms = [
  "ahoy",
  "first mate",
  "land ho",
  "shipwreck",
  "treasure",
  "scalawag",
  "scurvy",
  "capsize",
  "hijack",
  "jolly roger",
  "munity",
  "plunder",
  "blimey",
  "heave ho",
  "shark bait",
  "hornswaggle",
  "sea legs",
  "bilge",
  "poop deck",
  "seadog",
]

function randomWord() {
  answer = pirateTerms[Math.floor(Math.random() * pirateTerms.length)]

  alert(answer);
}

randomWord();

var requestUrl = 'http://api.fungenerators.com/pirate/generate/name?variation=male&limit=1&api_key=xVnLMxZTVVNHCfilqpljlAeF'

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

