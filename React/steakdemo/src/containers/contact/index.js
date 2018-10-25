import React from 'react';

import Master from '../../components/masterpage';

export default class ContactUs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rows: [
                {  label: 'Store Location', display: '32 Morbi Suscipit Semquis Aliquet Consequat, 1234'},
                {  label: 'Store hours', display: 'Monday to Sunday : 10:30am - 9:30pm'},
                {  label: 'Reservation Number', display: '(864) 232-3706'}
            ]
        }
    }
    render() {
        return (
            <Master>
                <div id="body">
                    <div class="content">
                        <div class="body">
                            <h2>CONTACT US</h2>
                            <ul>
                                <li>
                                    <h4> This website template has been designed by free website templates for you, for free. You can replace all this text with your own text. </h4>
                                    <p> You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forum. </p>
                                </li>
                            </ul>
                            <table>
                                {this.state.rows.map(row => <tr>
                                    <td><span>{row.label}</span></td>
                                    <td>:{row.display}</td>
                                </tr>)}
                            </table>
                        </div>
                    </div>
                </div>
            </Master>
        );
    }
}