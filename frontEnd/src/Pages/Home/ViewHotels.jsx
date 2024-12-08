import { Card, CardContent, Rating, Typography } from "@mui/material"
import ButtonThemes from "../../common-ui/ButtonThemes"

function ViewHotels({ hotels,nextPage }) {

    return (
        <div className="row">
            {
                hotels?.map((hotel) => (
                    <div className="col-4" style={{ marginBottom: "10px" }} key={hotel.id}>
                        <Card>
                            <CardContent>
                                {/* <label>SNO : {hotel.id}</label> */}
                                <strong>NAME OF HOTEL :</strong><label>{hotel.name}</label><br/>
                                <span>ADDRESS : {hotel.address}</span>
                                <p>PRICE : {hotel.priceRange}</p>
                                <label>RATTING : </label>
                                <Rating
                                    value={hotel.rating}
                                /><br/><br/>
                                <ButtonThemes name={'Book'} clr={'contained'} funcname={()=>{nextPage()}} />
                            </CardContent>
                        </Card>
                    </div>
                ))
            }
        </div>
    )
}

export default ViewHotels