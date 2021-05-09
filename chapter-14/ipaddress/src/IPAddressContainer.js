import React, { Component } from "react";

let xhr;

class IPAddressContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ip_address: "..."
        }

        this.processRequest = this.processRequest.bind(this)
    }

    componentDidMount() {
        console.log('Component did mount')
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true)
        xhr.send()

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        console.log('In process request')
        console.log(xhr)
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            this.setState({
                ip_address: response.ip
            })
        }
    }

    render() {
        return(
            <p>{this.state.ip_address}</p>
        )
    }
}

export default IPAddressContainer