var playButton = document.getElementById('play');
var pauseButton = document.getElementById('pause');
var previousButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var imageElement = document.getElementById('artistImg');
var elementThatWillTitle = document.getElementById('jukeboxInfo');
var elementThatWillBeArtist = document.getElementById('playListDisplay')

SC.initialize({client_id: 'fd4e76fc67798bfa742089ed619084a6'});

function Jukebox(audio) {
    this.songStorage = [];

    this.currentSongIndex = 0;

    this.addTrack = function(song) {
        this.songStorage.push(song);
    }

    this.play = function() {
        SC.get('/tracks/' + this.songStorage[this.currentSongIndex]).then(function(tracks) {
          console.log(tracks.permalink_url)
          imageElement.innerHTML = '<img src="' + tracks.artwork_url + '"/>';
          elementThatWillTitle.innerHTML = tracks.title;
          elementThatWillBeArtist.innerHTML = tracks.permalink_url;
           });

        this.song = SC.stream('/tracks/' + this.songStorage[this.currentSongIndex]);
        this.song.then(function(player) {
            this.player = player;
            player.play();
        })
    }

    this.pause = function() {
        this.song.then(function(player) {
            this.player = player;
            player.pause();
        })
    }

    this.previous = function() {
        if (this.currentSongIndex > 0) {
            this.currentSongIndex = 0;
            player.pause();
            player.play();
        } else {
            console.log(this.currentSongIndex);
            this.currentSongIndex--;
            console.log(this.currentSongIndex);
            player.pause()
            player.play();
        }
        console.log(this.songStorage.length);
        this.play();
    }

    this.next = function() {
        if (this.currentSongIndex > this.songStorage.length) {
            this.currentSongIndex = 0;
            player.pause();
            player.play();
        } else {
            console.log(this.songStorage.length);
            this.currentSongIndex++;
            console.log(this.songStorage.length);
            player.pause()
            player.play();
        }
        console.log(this.songStorage.length);
        this.play();
    }
};


/////////////////////////////////////////////////////////////////////////////////

var audio = document.getElementById('jukeAudio'); //====================Instances Add tracks to storage======
var jukebox = new Jukebox();

jukebox.addTrack(200954633);
jukebox.addTrack(200954642);
jukebox.addTrack(200955785);
jukebox.addTrack(200954643);


/////////// Event Listeners

playButton.addEventListener('click', (event) => {
    event.preventDefault();
    jukebox.play();
});

document.getElementById('pause').onclick = function() {
    event.preventDefault();
    jukebox.pause();
};

document.getElementById('next').onclick = function() {
    event.preventDefault();
    jukebox.next();
};

previousButton.addEventListener('click', function(event) {
    event.preventDefault();
    jukebox.previous();
});


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
