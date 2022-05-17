import React from 'react';
import './myStyles.css';
import Home from "./Home"
import bellA from "./bellA.png"
import bellB from './bellB.png'


class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            message : "Welcome to Mandhadi's store",
            sub : "Subscribe",
            imageUrl : bellA
            
        }
        // this.handleClick= this.handleClick.bind();

    }

    handleClick = () =>   {
        this.setState ({
            message : "Start exploring the fasion world",
            sub : "Thanks for subscribing to the website"
        });
        console.log('button entered');
    }

    imageClicked = () => {
        this.setState({
            imageUrl : bellB,
            message : "Thanks for Subscribe"

        })
    }

    styles = {
        fontStyle : "italic",
        color: "orange"
    }
    
    render() {

        return (
            <div className="headerName">
                <div className="header1">
                    <div>
                    <h3 style = {this.styles}>{this.state.message }</h3>

                        <button onClick={this.handleClick}> {this.state.sub}</button><br/>
                        <img onClick={this.imageClicked}  style = {{width: "30px",height:"30px"}} src ={this.state.imageUrl}  alt = " "></img>


                    </div>
                    
                   
                    
                </div>
                <div className='searchBar'>
                    <input type ="search" value= "search" />
                </div>
                <div>
                    <Home />
                </div>
            </div>
        )
    }

}
export default Header;

