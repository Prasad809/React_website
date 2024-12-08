
import { useDispatch } from "react-redux";
import { getPlaceDataAction, getStateDataAction } from "../../Redux/Actions";
import { useEffect, useState } from "react";
import AreaChartComponent from "../../common-ui/AreaChat";
import PieChartComponent from "../../common-ui/piechart";
import BarChartComponent from "../../common-ui/BarChart"
import { Grid } from "@mui/material";
function MainDashBoard() {
    const dispatch = useDispatch()
    const [state, setState] = useState([])
    const [place, setPlace] = useState([])
    useEffect(() => {
        dispatch(getStateDataAction({})).then((res) => {
                setState(res.payload.data?.stateInfo)
        })
        dispatch(getPlaceDataAction({})).then((res) => {
            setPlace(res.payload.data?.indianTouristPlaces)
        })
    }, [dispatch])
    return (
                <div>
                <h1 className="shadow-sm p-3 mb-2 bg-body-tertiary rounded">Welcome to Indian Tourisam</h1>
                <Grid item sm={4}>
                    <div className="shadow-sm p-3 mb-2 bg-body-tertiary rounded">
                        <h2>India States with sensex</h2>
                        <AreaChartComponent data={state} />
                    </div>
                </Grid>
                <div className="row hadow-sm p-3 mb-2 bg-body-tertiary rounded">
                    <div className="col-6">
                        <Grid item sm={4}>
                            <h2>India Most visits tourist places</h2>
                            <PieChartComponent data={place} dataKey={"visitors"} />
                        </Grid>
                    </div>
                    <div className="col-6">
                        <Grid item sm={4} textAlign={'center'}>
                            <h2>Indians Expendeture towords following sectors</h2>
                            <BarChartComponent data={state} />
                        </Grid>
                    </div>
                </div>
            </div>    
    )
}

export default MainDashBoard;