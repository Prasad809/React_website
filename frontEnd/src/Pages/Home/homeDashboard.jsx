import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getPlaceDataAction, reqTripsAction } from "../../Redux/Actions";
import ButtonThemes from "../../common-ui/ButtonThemes";
import Slider from "../../common-ui/Slider";
import ViewHotels from "./ViewHotels";
import { useNavigate } from "react-router-dom";
import Loader from "../../common-ui/Loader";


function HomePage() {
    const dispatch = useDispatch()
    const [places, setPlaces] = useState([])
    useEffect(() => {
        dispatch(getPlaceDataAction({})).then((res) => {
            console.log(res.payload.data);
            setPlaces(res.payload.data?.indianTouristPlaces)
        })
    }, [])
    const [viewHotels, setViewHotels] = useState([])
    const handleReqPlace = (id) => {
        const data = places.find((place) => place.id === id)
        const payload = {
            location: data.location,
            name: data.name
        }
        dispatch(reqTripsAction(payload)).then(res => {
            console.log(res.payload.data);
            setViewHotels(res.payload.data.hotelData.hotels)
        })
        setOpen(true)
    }

    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const navigate = useNavigate()
    return (
                <Container>
                    <h1 className="shadow-sm p-3 mb-2 bg-body-tertiary rounded">India</h1>
                    <div className="row">
                        {
                            places.map((place) => (
                                <div className="col-4" style={{ marginBottom: "10px" }} key={place.id}>
                                    <Card>
                                        <CardContent>
                                            <label>SNO : {place.id}</label>
                                            <Typography sx={{ color: 'text.secondary', fontSize: 14, }}>NAME OF PLACE :{place.name}</Typography>
                                            <span>DESCRPTION : {place.description}</span>
                                            <p>LOCATION : {place.location}</p>
                                            <p>NO. OF VISITORS : {place.visitors}</p>
                                            <ButtonThemes name={'View Details'} clr={'contained'} funcname={() => handleReqPlace(place.id)} />
                                        </CardContent>
                                    </Card>
                                </div>
                            ))
                        }
                        <Slider show={open} onClose={handleClose} title={<h3>View The Hotels Details</h3>} component={<ViewHotels hotels={viewHotels} nextPage={() => navigate("/addTrip")} />} />
                    </div>
                </Container >
    )
}

export default HomePage