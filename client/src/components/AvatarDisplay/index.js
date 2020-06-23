import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import "./style.css";

export class AvatarDisplay extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            eye: '',
            hair: '',
            outfit: '',
            place: '',
            skin: ''
        }
    }
    componentDidMount() {
        this.currentUser()
    }

    currentUser() {
        if (localStorage.usertoken != null) {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            const id = decoded.id
            console.log(id);
            this.setState({
                id: decoded.id
            })
            this.getAvatar(id);
        } else {
            this.props.history.push("/login")
        }
    }

    getAvatar = (a) => {
        axios
            .get("avatars/" + a)
            .then((res) => {
                var avatar=res.data[0];
                console.log(avatar)
                this.setState({
                    eye: avatar.eyes,
                    hair: avatar.hair,
                    outfit: avatar.outfit,
                    place: avatar.background,
                    skin: avatar.skin
                });
            })
            .catch((err) => console.log(err));
    };

    render() {
        const { eye, hair, outfit, place, skin } = this.state
        return(
            <div>
                {eye},{hair},{outfit},{place},{skin}
            </div>
        )
    }
}