import React from 'react'
import { Button } from 'antd';
class ShowAll extends React.PureComponent {
    render(){
        return(
            <>
                <div style={{paddingTop : "20px"}}>
                    <Button type="warning" style={{background : "yellow"}} onClick={this.props.showAll}>Show All</Button>
                </div>
            </>
        )

    }
}
export default ShowAll