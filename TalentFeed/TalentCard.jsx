import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Icon, Card, Image } from 'semantic-ui-react'

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTalentDetails: false,
        }
    };

    render() {
        if (this.props.feedData) {
            const { showTalentDetails } = this.state;
            const { name, skills, photoId, currentEmployment, visa, level } = this.props.feedData;
            return (
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{name}
                            <div className="ui right floated">
                                <Icon name="star" size="big" />
                            </div>
                        </Card.Header>
                    </Card.Content>
                    {showTalentDetails ?
                        <div className="ui grid">
                            <div className="eight wide column">
                                <Image src={photoId ? photoId : 'https://react.semantic-ui.com/images/avatar/large/matthew.png'} />
                            </div>
                            <div className="eight wide column">
                                <h4> Talent Snapshot</h4>
                                <br />
                                <div>
                                    <h4>CURRENT EMPLOYER</h4>
                                    {currentEmployment ? currentEmployment : "No data"}
                                </div>
                                <br />
                                <div>
                                    <h4>VISA STATUS</h4>
                                    {visa ? visa : "No data"}
                                </div>
                                <br />
                                <div>
                                    <h4>POSITION</h4>
                                    {level ? level : "No data"}
                                </div>
                            </div>
                        </div>
                        : 
                        <video width="100%" height="100%" controls >
//                            <source src="" type="video/mp4" />
//                      </video>
                    }
                    <Card.Content >
                        <div className="ui grid">
                            {showTalentDetails ?
                                <div className="four wide column center aligned">
                                    <Icon size="large"
                                        name="video camera"
                                        onClick={() => this.setState({ showTalentDetails: false })} link
                                    />
                                </div>
                                :
                                <div className="four wide column center aligned">
                                    <Icon size="large"
                                        name="user"
                                        onClick={() => this.setState({ showTalentDetails: true })} link
                                    />
                                </div>
                            }
                            <div className="four wide column center aligned">
                                <Icon size="large" name="file pdf outline" />
                            </div>
                            <div className="four wide column center aligned">
                                <Icon size="large" name="linkedin" />
                            </div>
                            <div className="four wide column center aligned">
                                <Icon size="large" name="github" />
                            </div>
                        </div>
                    </Card.Content>
                    <Card.Content >
                        {skills.length > 0 ?
                            skills.map((s, index) =>
                                <button key={index} className="ui blue basic tiny button">{s}</button>
                            )
                            :
                            <button className="ui grey basic tiny button"> No Data </button>
                        }
                    </Card.Content>
                </Card >
            )
        }
        return (
            <p>There are no talent found for your recruitment company</p>
        );
    }
}

