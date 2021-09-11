import axios from "axios";
import React , {Component}from "react";
import {Profile_skills , ProfileD , Title, Perc , ProfileList , Bar , ProfileItem , ItemSpan , ProfileTitle ,Skills , SkillsTitle , Parent, ParentSpan, SkillsDesc} from './style.js'
class Profile extends Component {
    state = {
        skills: []
    };
    componentDidMount(){
        axios.get('js/data.json').then(res => {
            this.setState({
                skills:res.data.bar
            })
        })
}
    render() { 
        const {skills} = this.state;
        const allSkills = skills.map(skill => {
            return(
                <Bar key={skill.id}>
                    <Title>{skill.title}</Title>
                    <Perc>{skill.perc} </Perc>
                    <Parent>
                    <ParentSpan width={skill.perc}></ParentSpan>
                    </Parent>
                </Bar>
            )
        })
    return(
              <Profile_skills>
            <div className="container">
                <ProfileD>
                    <ProfileTitle><span>My </span>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ItemSpan>Name</ItemSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Birthday</ItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Address</ItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Phone</ItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Email</ItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Website</ItemSpan>
                            <ItemSpan>www.google.com</ItemSpan>
                        </ProfileItem>
                    </ProfileList>
                </ProfileD>
            <Skills>
            <SkillsTitle>Some <span>skills</span></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
            {allSkills}
            </Skills>
            </div>
        </Profile_skills>

    )
}
}
export default Profile;