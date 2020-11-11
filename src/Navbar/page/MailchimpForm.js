import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'

class App extends Component {
    render() {
        return (
            <>
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
                <div>MAILCHIMP</div>
            </>
        );
    }
}

export default App;