const TripModel=require('../Model/tripModel')

const TripDetails=async(req,res)=>{
    const { email,fullName,tripDate,location,phoneNumber,persons,optional } =req.body
    try {
        const tripEmail=await TripModel.findOne({email})
        if(tripEmail){
            res.status(401).json({ status: "error", message: "Email already Used for Trip" })
        }
        const newTrip = new TripModel({
           email,
           fullName,
           tripDate,
           location,
           phoneNumber,
           persons,
           optional
        })
        await newTrip.save();
        res.status(200).json({ status: "success", message: "Trip Details Added Succefully" })

    } catch (error) {
        return res.status(500).json({status: "error", message: "Server Problem" })
    }
}

module.exports={TripDetails}