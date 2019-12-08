import React, {Component} from "react";
import { Link } from "react-router-dom";
import APIHandler from "./../api/handler";


export default class Signup extends Component {
    state = {
        username: "meg",
        email: "meg@meg.com",
        password: "12345"
    };

    handleSubmit = async e => {
        e.preventDefault();

        const fd = new FormData();
        fd.append("email", this.state.email);
        fd.append("password", this.state.password);
        fd.append("username", this.state.username);
        
        try {
            await APIHandler.post("/signup", fd);
            this.props.history.push("/signin");  
        } catch (err) {
        console.error(err);
        }
    };

    handleChange = e => {
        console.log(e.target);
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { email, password, username } = this.state;
          return ( 
         <React.Fragment>
        <form 
        className="form" 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange}
        >
        <h3 className="signin">Connectez-vous</h3>
        <label className="label" htmlFor="email">
        Email
        </label>
        <input
        className="input"
        id="email"
        type="email"
        name="email"
        defaultValue={email} 
          />

        <label className="label" htmlFor="username">
        Identifiant de connexion
        </label>

        <label className="label" htmlFor="password">
        Votre mot de passe
        </label>

        <input
            className="input"
            id="password"
            type="password"
            name="password"
            defaultValue={password}
        />
        <button className="btn">Connexion</button>
        </form>
        <p className="client">Connectez-vous{" "}
        <Link to="/signin" className="link"> 
        Ici
        </Link>
        </p>
        </React.Fragment>
       );
    }
};
