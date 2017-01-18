function parseNote(string) {
  let obj = {};
  const notes = string.split('*');
  if (notes.length == 2){
    obj = { pitch: notes[0],beats: notes[1] };
  } else {
    obj = { pitch: notes[0], beats: 1 };
  }
  return obj;
}

function parseSong(string) {
  let song = [];
  const notes = string.split(' ');
  for (let index in notes) {
    music = parseNote(notes[index]);
    song.push(music);
  }
  return song;
}

const onComplete = function () {
  let output = window.prompt("Type the song notes");
  let songObj = parseSong(output.trim());
  playSong(songObj, 400, onComplete);
}

let output = window.prompt("Type the song notes");
let songObj = parseSong(output.trim());
playSong(songObj, 400, onComplete);
