import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOffersAction } from "../../Redux/Actions"
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Grid } from "@mui/material"
import ButtonThemes from "../../common-ui/ButtonThemes"
import { useNavigate } from "react-router-dom"
import Loader from "../../common-ui/Loader"
function ViewOffers() {
    const dispatch = useDispatch()
    const getCustData = useSelector(state => state.GetStateCustomReducer)
    console.log(getCustData);

    const [offers, setOffers] = useState([])
    useEffect(() => {
        dispatch(getOffersAction({})).then(res => {
            setOffers(res.payload.data.holidayPackages)
        })
    }, [])
    const navigate = useNavigate()
    return (
                <div>
                    <h1>ViewOffers</h1>
                    {offers.map((offer) => (
                        <Card style={{ marginBottom: "5rem" }}>
                            <CardContent>
                                <strong>SNO : </strong><span>{offer?.id}</span><br />
                                <strong>Package for the Location : </strong><span>{offer?.packageName}</span><br />
                                <strong>DESTINATION :</strong> <span>{offer?.destination}</span><br />
                                <strong>DESCRIPTION :</strong><span>{offer?.description}</span><br />
                                <strong>DURATION :</strong><span>{offer?.duration} </span><br />
                                <Grid container>
                                    <Grid item sm={5}>
                                        <Accordion>
                                            <AccordionSummary sx={{ backgroundColor: "cyan" }}>
                                                <strong>Exclusions offers for this Package</strong>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {offer?.exclusions?.map((item) => (
                                                    <p>{item}</p>
                                                ))}
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>
                                    <Grid item sm={2}></Grid>
                                    <Grid item sm={5}>
                                        <Accordion>
                                            <AccordionSummary sx={{ backgroundColor: "yellow" }}>
                                                <strong>Inclusions offers for this Package</strong>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {offer?.inclusions?.map((item) => (
                                                    <p>{item}</p>
                                                ))}
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>
                                </Grid>
                                <strong>Total Price After Offer</strong> : Rupees {offer?.price} /-<br />
                                <Grid textAlign={'end'}>
                                    <ButtonThemes clr={'contained'} funcname={() => { navigate('/addTrip') }} name={"ADD TRIP"} />
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </div>
    )
}

export default ViewOffers