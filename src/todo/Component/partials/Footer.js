import React from 'react'
import {Layout} from 'antd'
const {Footer} = Layout
class FooterComponent extends React.Component{
    render(){
        return(
            <Footer>
                <p style={{color : 'black' , textAlign : "center"}}>CopyRight &copy; 2020 - Bool</p>
            </Footer>
        )
    }
}
export default FooterComponent