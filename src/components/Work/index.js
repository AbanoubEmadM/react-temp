import React, { Component } from "react";
import axios from "axios";
import {WorkSection , WorkTitle , WorkSpan , Part , First , I , PartTitle , Line , PartDesc } from './style.js'
class Work extends Component {
        state = {
            works: []
        };
        componentDidMount() {
            axios.get('js/data.json').then(res => {
                this.setState({
                    works:res.data.works
                })
            })
           
        }
    render() { 
        const {works} = this.state;

        const list = works.map(work => {
            return(
                <Part first={work.id} key={work.id}>
                <I className={work.icon_name}></I>
                    <PartTitle>{work.title}</PartTitle>
                    <Line/>
                    <PartDesc>{work.body}</PartDesc>
                </Part>

            )
        })
    return(
        <WorkSection>
            <div className="container">
                <WorkTitle><WorkSpan>My</WorkSpan> Work</WorkTitle>
                {list}
            </div>                
        </WorkSection>
    )
}
}
export default Work;