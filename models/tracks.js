const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    coverArtUrl: {
        type: String,
        required: false
    },
    soundClipUrl: {
        type: String,
        required: false
    }
});

const Track = mongoose.model("Track", TrackSchema);

module.exports = Track