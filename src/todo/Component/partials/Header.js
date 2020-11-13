import React from 'react'
import {Layout} from 'antd'
const {Header} = Layout
class HeaderComponent extends React.PureComponent{
    render(){
        return(
            <>
                <Header className="my-header">
                    <h1 style={{color : "white" , textAlign: "center "}}>Todo App</h1>
                </Header>
            </>
        )
    }
}
export default HeaderComponent