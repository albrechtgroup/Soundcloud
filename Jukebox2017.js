////*****  ******    *********//////

// function Jukebox(audio) {
//   this.audio = audio;
//   this.songs = ['http://bit.ly/2sXBeXS', 'http://bit.ly/2tvIFmG'];
//   this.currentSongIndex = 0;
//
//   this.play = function() {
//     var song = this.songs[this.currentSongIndex];
//     this.audio.src = song;
//     this.audio.load();
//     this.audio.play();
//   }
//
//
//   this.pause = function() {
//     this.audio.pause();
//   }

////////////////////////////////////////////


var audio = document.getElementById('jukeAudio')



document.getElementById('play').onclick = function() {
  audio.src="song1.mp3";
  audio.play();
}

document.getElementById('pause').onclick = function() {
  audio.src="song1.mp3";
  audio.pause();
}

document.getElementById('stop').onclick = function() {
  audio.src="song1.mp3";
  audio.stop();
}





// function container() {
//   alert('something');
// }
//
// function title() {
//
// }
//
// function artistImg() {
//
// }
//
// function jukeboxPlayer() {
//
// }
//
// function jukoboxInfo() {
//
// }








////////////////////////////////////////////
/////////////////////////////////////////////


// function Jukebox(songs, artists){
//   this.songs = songs;
//   this.artists = artists;
// }
//
// var songs = [];
// var currentSong = 0;
// // load track objects into songs array elsewhere..
// function playNext() {
//
// }

////////////////////////////////////////////////////////////////////////////////////////

// function soundclick(play) {
//
// }
// function soundclick(pause) {
//
// }
// function soundclick(rewind) {
//
// }
// function soundclick(ff) {
//
// }
// function soundclick(stop) {
//
// }

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

/*///////////// Jukebox Starter Kit
Goal:

Demonstrate an understanding of objects in JavaScript.

Assignment:

This Starter Kit workshop is designed for you to create the foundation for your next project! You've had a bit of time to get familiar with object oriented JavaScript. Now let’s build a Jukebox!

You will build a music player that will end up playing any mp3 you can find online. Think about what functionality you might need for this to work. Encapsulate all of this functionality in a JavaScript object so that starting a song is as simple as calling Jukebox.play() You need an array of song objects and the ability to play, stop and pause a song. How would you switch songs? Can you shuffle songs? Focus on getting the JavaScript to work and keep the HTML/CSS minimal, make it work before you make it look good!

Hint: The next project you will be able to continue styling this Jukebox and API integration.

Before you Begin:

Read through this tutorial describing how to use html5 audio (Links to an external site.)Links to an external site. and control playback using javascript.

Your JavaScript Jukebox should:

Display at least one song on the page when the page loads
Give the user the ability to play that song, without using the "built-in" play button. This could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
Give the user the ability to stop that song without using the "built-in" stop button. Once again, this could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
Give the user the ability to load at least one different song into the Jukebox besides the one that is loaded when the page initially renders
The whole Jukebox should be backed by an object called Jukebox with methods to play, stop, and load songs.
Extra Challenge:

Playlist of songs, allows the user to queue up the next song
Feature to request a random song
Grading Criteria:

JS throws no errors
Pause, Play, and Stop functions work (and do not use built-in functionality)
JukeBox is object-oriented
Page has at least one song on load and can play a different song based on title
Allow a user to load one of their own songs
Complete = Meets ALL grading criteria points above.

Incomplete = Does not meet all grading criteria points above. Needs improvement or missing submission.*/
