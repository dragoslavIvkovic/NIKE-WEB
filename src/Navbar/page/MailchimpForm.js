import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
import "./Mailchimp.css"


class App extends Component {
    render() {
        return (
            <>
                <div className="MailchimpForm">
                    <Mailchimp
                        action="https://gmail.us2.list-manage.com/subscribe/post?u=c45065b46b3088fe906634646&amp;id=bf9ec9a938"
                        fields={[
                            {
                                name: 'EMAIL',
                                placeholder: 'Email',
                                type: 'email',
                                required: true
                            }
                        ]}
                    />
                    <div>Subscribe</div>


                </div>



            </>
        );
    }
}

export default App;