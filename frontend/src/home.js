import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
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
                        <Card maxWidth="345" display="inline-block" xs={6}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ "height": 345}}
                                    // image="/add_photo_alternate_24px_outlined.png"
                                    title="Upload Image"
                                    textAlign="center"
                                ><img href="/add_photo_alternate_24px_outlined.png"/></CardMedia>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="./upload">Upload an Image</a></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card maxWidth="345" display="inline-block" xs={6}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ "height": 345 }}
                                    image="/search_24px_outlined.png"
                                    title="View Categories"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="./categories">See All Categories</a></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                </div>
            </div>
        );
    }
}

export default Home