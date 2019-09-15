import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Typography variant="h3" className="header">
                    Have something to donate?
                </Typography>

                <div className="cards">
                    <Grid container spacing={3} >
                        <Grid item xs={6}>
                            <a href='./upload'><Card maxWidth="320" display="inline-block" xs={6}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{ "height": 345 }}
                                        // image="/add_photo_alternate_24px_outlined.png"
                                        title="Upload Image"
                                    ><svg className="cardImage" width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 1.5V4.5H22.5V6.5H19.5V9.48999C19.5 9.48999 17.51 9.5 17.5 9.48999V6.5H14.5C14.5 6.5 14.51 4.51001 14.5 4.5H17.5V1.5H19.5ZM17.5 20.5H3.5V6.5H12.5V4.5H3.5C2.40002 4.5 1.5 5.39999 1.5 6.5V20.5C1.5 21.6 2.40002 22.5 3.5 22.5H17.5C18.6 22.5 19.5 21.6 19.5 20.5V11.5H17.5V20.5ZM9.71002 17.33L7.75 14.97L5 18.5H16L12.46 13.79L9.71002 17.33Z" fill="black" fill-opacity="0.54" />
                                        </svg>
                                    </CardMedia>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <a href="./upload" style={{ textDecoration: "none" }}>Upload an Image</a></Button>
                                </CardActions>
                            </Card></a>
                        </Grid>
                        <Grid item xs={6}>
                            <a href='./category'><Card maxWidth="320" display="inline-block" xs={6}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{ "height": 345 }}
                                        image="/search_24px_outlined.png"
                                        title="View Categories"
                                    ><svg className="cardImage" width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.965 14.255H15.755L20.745 19.255L19.255 20.745L14.255 15.755V14.965L13.985 14.685C12.845 15.665 11.365 16.255 9.755 16.255C6.16504 16.255 3.255 13.345 3.255 9.755C3.255 6.16501 6.16504 3.255 9.755 3.255C13.345 3.255 16.255 6.16501 16.255 9.755C16.255 11.365 15.665 12.845 14.6851 13.985L14.965 14.255ZM5.255 9.755C5.255 12.245 7.26501 14.255 9.755 14.255C12.245 14.255 14.255 12.245 14.255 9.755C14.255 7.26501 12.245 5.255 9.755 5.255C7.26501 5.255 5.255 7.26501 5.255 9.755Z" fill="black" fill-opacity="0.54" />
                                        </svg></CardMedia>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <a href="./category" style={{ textDecoration: "none" }}>Search Categories</a></Button>
                                </CardActions>
                            </Card></a>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Donate