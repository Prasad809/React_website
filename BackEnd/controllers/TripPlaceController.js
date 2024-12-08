

const TripPlaceModel = require('../Model/tripPlaceModel');

const TripPlaceDetails = async (req, res) => {
    const { location, name } = req.body;
    try {
        if (!location || !name) {
            return res.status(400).json({ status: 'error', message: 'Missing Required parameters: location and name' });
        }
        const tripPlace = await TripPlaceModel.find({
            $and: [
                { location: location },
                { name: name }
            ]
        });

        if (!tripPlace || tripPlace.length === 0) {
            return res.status(404).json({ status: 'error', message: 'No trip place found matching the location and name' });
        }      
        return res.status(200).json({hotelData:tripPlace[0],status:"success"});

    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "error", message: "Server Problem" });
    }
};

module.exports = { TripPlaceDetails };
