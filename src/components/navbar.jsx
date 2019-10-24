import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-dark" >
                <a className="navbar-brand" style={{color:'white'}}href="#">
                   LibrarySystem
                </a>
                <a className="navbar-brand mr-auto" style={{color:'grey',textAlign:'left'}} href="#">
                    Issued{" "}
                    <span className="badge badge-pill badge-primary">
                        {this.props.issuedBooks} 
                    </span>
                    </a>
                
            </nav>
         );
    }
}
 
export default NavBar;