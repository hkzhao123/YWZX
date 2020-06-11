import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "antd";

class Page2 extends React.Component{
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
                        上一页
                    </Button>
                </Link>
                <Link to="/Page3/" style={{color:'black'}}>
                    <Button type="primary" size={this.state.size} >
                        下一页
                    </Button>
                </Link>
            </div>
        );
    }
}

export default Page2;
