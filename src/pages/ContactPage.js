import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";
import FormGroup from "react-bootstrap/FormGroup";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: "",
      send: null,
    };
  }

  //pentru a putea completa campurile corespunzatoare
  handleChange = (event) => {
    console.log(event);

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  //dupa ce apas butonul trimite sa nu se dea refresh la pagina
  handleSubmit = (event) => {
    event.preventDefault();

    //atunci cand trimiti un mesaj sa astepte un raspuns : succes sau error
    this.setState({
      disabled: true,
      emailSend: false,
    });
  };

  //continuare finalziare contact

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <Content>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Form.Label htmlFor="full-name">Numele Complet</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Form.Label htmlFor="email">E-mail</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Form.Label htmlFor="message">Mesaj</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </FormGroup>

            <Button
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Trimite
            </Button>

            {this.state.emailSend === true && (
              <p className="d-inline succes-msg">
                E-mail-ul a fost trimis cu succes!
              </p>
            )}
            {this.state.emailSend === false && (
              <p className="d-inline err-msg">E-mail-ul nu a fost trimis</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
