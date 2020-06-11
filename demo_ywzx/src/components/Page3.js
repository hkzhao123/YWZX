import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "antd";

class Page3 extends React.Component{
    state = {
        size: 'large',
    };
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    render(){
        return(
            <div>
                <Link to="/Page2/" style={{color:'black'}}>
                    <Button type="primary" size={this.state.size} >
                        上一页
                    </Button>
                </Link>
                    <Button type="primary" size={this.state.size} >
                        保存并提交
                    </Button>
            </div>
        );
    }
}

export default Page3;
