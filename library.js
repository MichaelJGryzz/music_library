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
    console.log(`Playlist with id ${playlistId} not found.`);
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
}

// Call addTrackToPlaylist function with track and playlist to see its output
console.log("addTrackToPlaylist function output when both track and playlist exist and track is not in playlist:");
addTrackToPlaylist("t03", "p01"); // Add track t03 to playlist p03
console.log("addTrackToPlaylist function output when track does not exist:");
addTrackToPlaylist("t06", "p01"); // Track t06 is not added because it does not exist 
console.log("addTrackToPlaylist function output when both track and playlist do not exist:");
addTrackToPlaylist("t06", "p04"); // Track t08 is not added to playlist p04 because both track and playlist do not exist
console.log("addTrackToPlaylist function output when playlist does not exist:");
addTrackToPlaylist("t01", "p04"); // Track t01 is not added bevause playlist p04 does not exist
console.log("addTrackToPlaylist function output when track is already in playlist:");
addTrackToPlaylist("t01", "p01"); // Track t01 is not added to playlist p01 because the track is already in the playlist
console.log("----------");


// generates a unique id
// (function already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  for (const trackId in library.tracks) {
    const track = library.tracks[trackId];
    if (track.name === name && track.artist === artist && track.album === album) {
      console.log(`Track ${name} by ${artist} (${album}) already in library.`);
      return;
    }
  }
  
  // Generate a unique id for the new track given
  const id = "t" + generateUid();

  // Create a new track object with the given information
  const newTrack = {
    id: id,
    name: name,
    artist: artist,
    album: album
  };

  // Adds new track to the library
  library.tracks[id] = newTrack;
  console.log(`Track ${id} added to the library`);
}

// Test Code with example usage
addTrack("New Song", "New Artist", "New Album"); // Given a completely new track
console.log("addTrack function output when given a new track:");
console.log(library.tracks); // Prints updated library to verify
addTrack("Four Thirty-Three", "John Cage", "Woodstock 1952"); // Given a track that is already in the library
console.log("addTrack function output when given a track that is already in the library:");
console.log(library.tracks); // Prints updated library to verify
console.log("----------");


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