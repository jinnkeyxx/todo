import React from 'react'
import HeaderComponent from './Header'
import FooterComponent from './Footer'
import ListTodo from './ListTodo'
import AddTodo from './addTodo'

import {Layout , Row , Col} from 'antd'
const {Content} = Layout

class LayoutComponent extends React.Component {
    render(){
        return (
            <>
            <Layout className="layout">
                <HeaderComponent/>
                    <Content>
                        <Row>
                            <Col span={8} offset={8} style={{paddingTop : "20px"}}>
                                <AddTodo></AddTodo>
                                <ListTodo/>

                            </Col>
                        </Row>
                    </Content>

                <FooterComponent/>
            </Layout>
            </>
        )
    }
}
export default LayoutComponent