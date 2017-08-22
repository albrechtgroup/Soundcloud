var playButton = document.getElementById('play');
var pauseButton = document.getElementById('pause');
var previousButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

SC.initialize({
    client_id: 'fd4e76fc67798bfa742089ed619084a6'
  });

function Jukebox(audio) {
    this.songStorage = [];

    this.addTrack = function(song) {
        this.songStorage.push(song);
    }

    this.currentSongIndex = 0;

    this.play = function() {
        SC.get('/tracks/' +  this.songStorage[this.currentSongIndex]).then(function(tracks) {
         });
         this.song = SC.stream('/tracks/' + this.songStorage[this.currentSongIndex]);
         this.song.then(function(player) {
            this.player = player;
             player.play();
           })}

    this.pause = function() {
      this.song.then(function(player) {
         this.player = player;
          player.pause();
        })}


    this.previous = function() {
        alert("hello previous");
    }

    this.next = function() {
        alert("hello next");
    }
}

//////////////////////   END OF JUKEBOX  /////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////




var audio = document.getElementById('jukeAudio'); //====================Instances Add tracks to storage======
var jukebox = new Jukebox();

jukebox.addTrack(200954643);
jukebox.addTrack('hello');




// Event Listeners


playButton.addEventListener('click', (event) => {
    event.preventDefault();
    jukebox.play();
    // audio.src="song1.mp3";
    // audio.play();
});

document.getElementById('pause').onclick = function() {
    event.preventDefault();
    jukebox.pause();
    // audio.src="song1.mp3";
    // audio.pause();
};

document.getElementById('next').onclick = function() {
    event.preventDefault();
    jukebox.next();
    // audio.src="song1.mp3";
    // audio.stop();
};

previousButton.addEventListener('click', function(event) {
    event.preventDefault();
    jukebox.previous();
});

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

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////   ***SOUNDCLOUD***

// Goal:
//
// Successfully implement the SoundCloud API into a current project
//
// Assignment:
//
// Remember that Jukebox Starter Kit? Well, now it’s time to make it awesome! Take your current jukebox and tweak it so that it can play songs hosted on SoundCloud. This is also the time to make changes to UI/UX of the application so that it looks and feels like a true jukebox.
//
// Before you Begin:
//
// Create a SoundCloud main account (Links to an external site.)Links to an external site. if you haven't already
// Use the API Key provided to you by your instructor
// Read and understand the streaming music example (Links to an external site.)Links to an external site. provided to you by their provided sdk
// Unfortunately, the SoundCloud 3.0 SDK playback feature uses flash when on Google Chrome and does not work by default. Try disabling the flash plugin through the chrome://plugins/ menu (type it into the location bar).
// If you intend on the doing the challenge take a look at the playlist documentation (Links to an external site.)Links to an external site.
// For further documentation check out their API guide (Links to an external site.)Links to an external site.
// Your SoundCloud enabled jukebox should allow the user to do the following things:
//
// Play a track off of SoundCloud based on its track ID
// Pause the currently playing track
// Display the following current track information:
// Artist name with link to his/her profile page
// Title with link to track's page
// Description and genre
// Artwork
// Playlist Challenge:
//
// If you have time and are looking for an extra challenge try the following. Create a playlist on SoundCloud and enable the user to do the following things:
//
// Play a track off of a chosen playlist
// Pause the currently playing track
// Skip to the next or previous track
// Jump to the beginning when skipping forward from the last track
// Jump to the end when skipping backward the first track
// Display the following playlist information:
// Creator with link to his/her profile page
// Playlist title with link to playlist page
// Artwork

///// Grading criteria:
//
// JS throws no errors
// Pause and play functions work
// Track information is displayed alongside their corresponding links
// JukeBox is object-oriented
// Page has at least one song on load and can play a different song based on track id
// Allow a user to load one of their own songs
// HTML/CSS is properly formatted
