const express = require('express');
const router = express.Router();
const Track = require('../models/tracks.js')

router.post('/', async (req, res) => {
    try{
        const {title, artist, coverArtUrl, soundClipUrl} = req.body
        const newTrack = await Track.create({title, artist, coverArtUrl, soundClipUrl})
        res.status(201).json(newTrack)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    try{
        const allTracks = await Track.find({})
        res.status(200).json(allTracks)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/:trackId', async (req, res) => {
    try{
        const singleTrack = await Track.findById(req.params.trackId)
        if(!singleTrack){
            return res.status(404).json({error:`Track Not Found`})
        }
        res.status(200).json(singleTrack)
    }catch(err){
        res.status(500).json(err) 
    }
})

router.put('/:trackId', async (req, res) => {
    try{
        const updateTrack = await Track.findByIdAndUpdate(
            req.params.trackId,
            req.body,
            {title, artist, coverArtUrl, soundClipUrl},
            { new: true }
        )
        res.status(200).json(updateTrack);
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete('/:trackId', async (req, res) => {
    try{
       const deleteTrack = await Track.findByIdAndDelete(req.params.trackId)
       res.status(200).json(deleteTrack);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router