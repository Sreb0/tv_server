
const channels = require('../models/television');
const detectM3U8File = require('../services/detectM3U8File');



// Get all channels
exports.getAllChannels = (req, res) => {
    res.json(channels);
};

// Get a single channel
exports.getChannelByChannel = async (req, res) => {
    const channelData = channels.find(tv => tv.channel === req.params.channel);
    if (channelData) {
        //res.json(channelData);
        try {
            // Call detectM3U8File for the specific channel's URL
            const m3u8Urls = await detectM3U8File(channelData.url);

            // Send the response
            res.json({ channel: channelData.channel, m3u8Urls });

        } catch (error) {
            //console.error('Error detecting M3U8 file:', error);
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(404).send('Channel not found');
    }
};

