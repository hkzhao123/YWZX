import React from "react";
import Home from "./Home";
import {Link} from "react-router-dom";
import {Button} from "antd";

class Page1 extends React.Component{
    state = {
        size: 'large',
    };
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    render(){
        return(
            <div>
                <Link to="/" style={{color:'black'}}>
                    <Button type="primary" size={this.state.size} >
                        上一页
                    </Button>
                </Link>
                <Link to="/Page2/" style={{color:'black'}}>
                    <Button type="primary" size={this.state.size} >
                        下一页
                    </Button>
                </Link>
            </div>
        );
    }
}
export default Page1;