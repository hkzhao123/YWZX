import React from 'react';
import { Link } from 'react-router-dom';
import { Router, Route, Switch } from "react-router";
import { Button, Radio } from 'antd';

class Home extends React.Component{
    state = {
        size: 'large',
    };
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    render(){
        return(
            <div>
                <Link to="/Page1/" style={{color:'black'}}>
                    <Button type="primary" size={this.state.size} >
                        下一页
                    </Button>
                </Link>
            </div>
        );
    }
}

export default Home;
