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
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  const playlists = library.playlists;
  for (const playlistId in playlists) {
    const playlist = playlists[playlistId];
    const numTracks = playlist.tracks.length;
    console.log(`${playlistId}: ${playlist.name} - ${numTracks} tracks`);
  }
}
// Call the printPlaylists function to see the output
console.log("printPlaylists function output:")
printPlaylists(library);
console.log("----------");


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  const tracks = library.tracks;
  for (const trackId in tracks) {
    const track = tracks[trackId];
    console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
  }
}

// Call the printTracks function to see the output
console.log("printTracks function output:")
printTracks(library);
console.log("----------");


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const playlist = library.playlists[playlistId];
  if (!playlist) {
    console.log(`Playlist with id ${playlistId} not fount`);
    return;
  }
  
  const playlistName = playlist.name;
  const numTracks = playlist.tracks.length;
  console.log(`${playlist.id}: ${playlist.name} - ${numTracks} tracks`);
 
  playlist.tracks.forEach(function(trackId) {
    const track = library.tracks[trackId];
    if (track) {
      console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
    }
  });
}

// Call printPlaylist function with given playlist to see its output
console.log("printPlaylist function output when given existing playlist name:");
printPlaylist("p01"); // Call function with existing playlist name
console.log("printPLaylist function output when given non-existing playlist name:");
printPlaylist("p08"); // Call function with non-existing playlist name
console.log("----------");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const track = library.tracks[trackId];
  const playlist = library.playlists[playlistId];

  if (!track) {
    console.log(`Track with id ${trackId} does not exit.`);
    return;
  }
  if (!playlist) {
    console.log(`Playlist with id ${playlistId} does not exist`);
    return;
  }
  
}


// generates a unique id
// (function already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

}


// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}