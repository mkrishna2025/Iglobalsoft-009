import React from 'react';


export default class MasterPage extends React.Component {
    render() {
        return (
            <div id="background">
                <div id="page">
                    <div id="header">
                        <ul class="navigation">
                            <li><a href="food">OUR FOOD</a></li>
                            <li><a href="beer">OUR BEER</a></li>
                        </ul>
                        <a id="logo" href="index"><img src="images/logo.jpg" width="276" height="203" alt="" /></a>
                        <ul id="navigation">
                            <li><a href="reservation">RESERVATION</a></li>
                            <li><a href="contact">CONTACT US</a></li>
                        </ul>
                    </div>
                    {this.props.children}
                    <div id="footer">
                        <ul>
                            <li class="first">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="menu.html">Menu</a></li>
                                    <li><a href="beer.html">Beer</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </li>
                            <li> <span>Follow us:</span> <a href="#" class="facebook">&nbsp;</a> <a href="#" class="twitter">&nbsp;</a> </li>
                        </ul>
                        <p>Copyright &copy; 2012 <a href="#">Company Name</a> All rights reserved | Website Template By <a target="_blank" href="http://www.freewebsitetemplates.com/">freewebsitetemplates.com</a></p>
                    </div>
                </div>
            </div>
        );
    }
}