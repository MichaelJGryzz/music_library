const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    for (const playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      const numTracks = playlist.tracks.length;
      console.log(`${playlistId}: ${playlist.name} - ${numTracks} tracks`);
    }
  },
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    if (!playlist) {
      console.log(`Playlist with id ${playlistId} not found.`);
      return;
    }

    const playlistName = playlist.name;
    const numTracks = playlist.tracks.length;
    console.log(`${playlist.id}: ${playlist.name} - ${numTracks} tracks`);
  
    playlist.tracks.forEach((trackId) => {
      const track = this.tracks[trackId];
      if (track) {
        console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
      }
    });
  },
  // adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) {
    const track = this.tracks[trackId];
    const playlist = this.playlists[playlistId];

    // Check if track exists
    if (!track) {
      console.log(`Track with id ${trackId} does not exist.`);
      return;
    }
    // Check if playlist exists
    if (!playlist) {
      console.log(`Playlist with id ${playlistId} does not exist.`);
      return;
    }

    // Add track to the playlist if it is not already in the playlist
    if (!playlist.tracks.includes(trackId)) {
      playlist.tracks.push(trackId);
      console.log(`${trackId} added to playlist ${playlistId}.`);
    } else {
      console.log(`${trackId} is already in playlist ${playlistId}.`);
    }
  },
  // generates a unique id
  // (function already implemented: use this for addTrack and addPlaylist)
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  // adds a track to the library
  addTrack: function(name, artist, album) {
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      if (track.name === name && track.artist === artist && track.album === album) {
        console.log(`Track ${name} by ${artist} (${album}) already in library.`);
        return;
      }
    }

    // Generate a unique id for the new track given
    const id = "t" + this.generateUid();

    // Create a new track object with the given information
    const newTrack = {
      id: id,
      name: name,
      artist: artist,
      album: album
    };

    // Adds new track to the library
    this.tracks[id] = newTrack;
    console.log(`Track ${id} added to the library.`);
  },
  // adds a playlist to the library
  addPlaylist: function(name) {
    for (const playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      if (playlist.name === name) {
        console.log(`Playlist ${name} already in library.`);
        return;
      }
    }

    // Generate a unique id for the new playlist given
    const id = "p" + this.generateUid();

    // Create a new playlist object with the given information
    const newPlaylist = {
      id: id,
      name: name,
      tracks: []
    };

    // Adds new playlist to the library
    this.playlists[id] = newPlaylist;
    console.log(`Playlist ${id} added to the library.`);
  }
};

/////////////////////////////
// TEST CASES:
/////////////////////////////

// Call the printPlaylists function to see the output
console.log("printPlaylists function output:")
library.printPlaylists();
console.log("----------");

// Call the printTracks function to see the output
console.log("printTracks function output:")
library.printTracks();
console.log("----------");

// Call printPlaylist function with given playlist to see its output
console.log("printPlaylist function output when given existing playlist name:");
library.printPlaylist("p01"); // Call function with existing playlist name
console.log("printPLaylist function output when given non-existing playlist name:");
library.printPlaylist("p08"); // Call function with non-existing playlist name
console.log("----------");

// Call addTrackToPlaylist function with track and playlist to see its output
console.log("addTrackToPlaylist function output when both track and playlist exist and track is not in playlist:");
library.addTrackToPlaylist("t03", "p01"); // Add track t03 to playlist p03
console.log("addTrackToPlaylist function output when track does not exist:");
library.addTrackToPlaylist("t06", "p01"); // Track t06 is not added because it does not exist 
console.log("addTrackToPlaylist function output when both track and playlist do not exist:");
library.addTrackToPlaylist("t06", "p04"); // Track t08 is not added to playlist p04 because both track and playlist do not exist
console.log("addTrackToPlaylist function output when playlist does not exist:");
library.addTrackToPlaylist("t01", "p04"); // Track t01 is not added bevause playlist p04 does not exist
console.log("addTrackToPlaylist function output when track is already in playlist:");
library.addTrackToPlaylist("t01", "p01"); // Track t01 is not added to playlist p01 because the track is already in the playlist
console.log("----------");

// Test Code with example usage
console.log("addTrack function output when given a new track:");
library.addTrack("New Song", "New Artist", "New Album"); // Given a completely new track
console.log(library.tracks); // Prints updated library to verify
console.log("addTrack function output when given a track that is already in the library:");
library.addTrack("Four Thirty-Three", "John Cage", "Woodstock 1952"); // Given a track that is already in the library
console.log(library.tracks); // Prints updated library to verify
console.log("----------");

// Test Code with example usage
console.log("addPlaylist function output when given a new playlist:");
library.addPlaylist("New Name"); // Given a completely new playlist
console.log(library.playlists); // Prints updated library to verify
console.log("addPlaylist function output when given a playlist that is already in the library:");
library.addPlaylist("Coding Music"); // Given a playlist that is already in the library
console.log(library.playlists); // Prints updated library to verify
console.log("----------");


// STRETCH: WILL COME BACK TO COMPLETE AT A LATER DATE!!
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//const printSearchResults = function(query) {
//}