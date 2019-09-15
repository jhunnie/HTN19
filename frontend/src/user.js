import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
//import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "Marco",
            last: "",
            email: "",
            numDonations: 0,
            totRewards: 0,
            transactions: []
        }
    }

    componentDidMount() {
        this.setState({
            last: "J",
            email: "marco.j@gmail.com",
            numDonations: 5,
            totRewards: 1500,
            transactions: []
        })
    }

    render() {
        return (
            <div >
                <Typography variant="h3" className="header">Welcome back, {this.state.first}</Typography>
                <Card style={{
                    position: "center",
                    width: "30%",
                    display: "inline-block",
                    height: '20vw',
                    marginTop: "5%",
                    textAlign: "center",
                    backgroundColor: "#FA9A85"
                }}>
                    <CardHeader
                        avatar={
                            <Avatar style={{
                                backgroundColor: "red"
                            }}>
                                M
                            </Avatar>
                        }
                        title={this.state.first + " " + this.state.last}
                    />
                    <CardContent>
                        <Typography variant="body2" >
                            Email: {this.state.email}
                            <br />Number of Donations: {this.state.numDonations}
                            <br />Total Rewards Points: {this.state.totRewards}
                        </Typography>
                    </CardContent>
                </Card>
                <div className="tableTrans">
                    <Table style={{ minWidth: "650", margin: "25" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date </TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Number of Items</TableCell>
                                <TableCell align="right">Charity Name</TableCell>
                                <TableCell align="right">Points Earned</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.transactions.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="right">{row.category}</TableCell>
                                    <TableCell align="right">{row.numItems}</TableCell>
                                    <TableCell align="right">{row.charity}</TableCell>
                                    <TableCell align="right">{row.points}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default User;