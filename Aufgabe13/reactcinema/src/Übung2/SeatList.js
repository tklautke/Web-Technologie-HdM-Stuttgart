import React, {Component} from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import kinoplakat from './assets/Kinoplakat.jpeg'
import("./SeatList.css")

export default class SeatList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'centered'}>
                <Card className={'card-styling'}>
                    <CardMedia
                        className={'cardMedia-styling'}
                        image={kinoplakat}/>
                    <CardContent>
                        <h1>Verfügbare Sitze:</h1>
                    </CardContent>
                </Card>
            </div>
        )
    }
}