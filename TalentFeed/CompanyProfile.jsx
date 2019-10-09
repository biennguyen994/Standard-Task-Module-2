import React from 'react';
import { Loader } from 'semantic-ui-react';
import Cookies from 'js-cookie';
import { Card, Icon, Image } from 'semantic-ui-react';

export default class CompanyProfile extends React.Component {
    constructor(props) {
        super(props);

        const companyContact = {
            name: "",
            location: "",
            email: "",
            phone: ""
        }
        this.state = {
            companyContact: companyContact,
        }
    }

    componentDidMount() {
        this.loadData();
    };

    loadData() {
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: 'https://talentprofilemodule1.azurewebsites.net/profile/profile/getEmployerProfile',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res) {
                this.setState({ companyContact: res.employer.companyContact })
            }.bind(this),
            error: function (res) {
                console.log(res)
            }
        })
    }

    render() {
        const { companyContact } = this.state;
        return (
            <Card>
                <Card.Content>
                    <Card.Header textAlign='center'>
                        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size="tiny" circular /><br />
                        <br/>
                        {companyContact.name}
                    </Card.Header>
                    <Card.Meta textAlign='center'>
                        <span className='date'>
                            <Icon name='marker' />
                            {companyContact.location.city}, {companyContact.location.country}
                        </span>
                    </Card.Meta>
                    <Card.Description textAlign='center'>
                        We currently do not have specific skills that we desire.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='phone' />
                        : {companyContact.phone}
                    </div>
                    <div>
                        <Icon name='mail' />
                        : {companyContact.email}
                    </div>
                </Card.Content>
            </Card>)
    }
}
