import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu"

class MenuContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
        this.handleMouseDown = this.handleMouseDown.bind(this)
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleMouseDown(e) {
        this.toggleMenu()

        console.log("clicked")
        e.stopPropagation()
    }

    render() {
        console.log("Rendering: MenuContainer")
        return(
            <div>
                <MenuButton handleMousedown={this.handleMouseDown} />
                <Menu handleMouseDown={this.handleMouseDown}
                      menuVisibility={this.state.visible} />
                <div>
                    <p>Can you spot the item that doesn't belong?</p>
                    <ul>
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Dolor</li>
                        <li>Sit</li>
                        <li>Bumblebee</li>
                        <li>Aenean</li>
                        <li>Consectetur</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuContainer