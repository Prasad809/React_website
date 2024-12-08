import { Card, CardContent, Grid } from "@mui/material";
import Token from "../../Redux/Token";

function UserStore() {

    const userData = Token.getUser()
    console.log(userData);
    return (
            <Grid container>
                <Grid item sm={3}>
                    <Card style={{ backgroundColor: "greenyellow" }}>
                        <CardContent>
                            <strong> Email ID</strong> : <strong>{userData?.email ? userData.email : "--"}</strong><br />
                            <strong> FirstName</strong> : <strong>{userData?.firstName ? userData.firstName : "--"}</strong><br />
                            <strong> Last Name</strong> : <strong>{userData?.lastName ? userData.lastName : "--"}</strong><br />
                            <strong> Phone No</strong> : <strong>{userData?.phone ? userData.phone : "--"}</strong><br />
                            <strong> STATE</strong> : <strong>{userData?.state ? userData.state : "--"}</strong><br />
                            <strong> CITY</strong> : <strong>{userData?.city ? userData.city : "--"}</strong><br />
                            <strong> PIN CODE</strong> : <strong>{userData?.pin ? userData.pin : "--"}</strong><br />
                            <strong> PIN CODE</strong> : <strong>{userData?.pin ? userData.pin : "--"}</strong><br />
                            <strong> PIN CODE</strong> : <strong>{userData?.pin ? userData.pin : "--"}</strong><br />
                            <strong> PIN CODE</strong> : <strong>{userData?.pin ? userData.pin : "--"}</strong><br />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={9} className="shadow-sm p-3 mb-2 bg-body-tertiary rounded">

                </Grid>
            </Grid>
    )
}

export default UserStore