import React, { Component } from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      loading: false,
    };
  }
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const data = this.state;
    this.setState({ loading: true });
    event.preventDefault();
    // POST request using fetch with set headers
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: data.name,
        id: 1,
        title: data.email,
        body: data.subject,
      }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => {
        // this.setState({postList: response.data})
        this.setState({ loading: false });
        console.log(response);
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="fixed-loader">
            <div class="loader"></div>
          </div>
        ) : null}

        <form onSubmit={this.handleSubmit}>
          <div className="ss_contact_form">
            <input
              type="text"
              onChange={this.handleInput}
              className="form-control"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="ss_contact_form">
            <input
              type="number"
              onChange={this.handleInput}
              className="form-control"
              name="email"
              placeholder="Your Number"
              required
            />
          </div>

          <div className="ss_contact_form">
            <input
              type="text"
              onChange={this.handleInput}
              className="form-control"
              name="subject"
              placeholder="Area"
            />
          </div>

          <div className="col-lg-12">
            <button type="submit" className="btn submitForm">

              Send Message
            </button>

            <div className="response"></div>
          </div>
        </form>
      </>
    );
  }
}
export default NameForm;
