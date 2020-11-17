import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {
    tweets: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/tweet-list/');
      const tweets = await res.json();
      this.setState({
        tweets
      });
    } catch (e) {
      console.log(e);
    }
  }

  formatDatetime = (str) => {
    const monthNames = [
      "stycznia",
      "lutego",
      "marca",
      "kwietnia",
      "maja",
      "czerwca",
      "lipca",
      "sierpnia",
      "września",
      "października",
      "listopada",
      "grudnia"
    ];
    var datetime = new Date(str);
    return datetime.getHours() + ':' + datetime.getMinutes() + ' - ' + datetime.getDay() +
      ' ' + monthNames[datetime.getMonth()] + ' ' + datetime.getFullYear();
  }


  render() {
    return (
      <div className="tweets-container">
        <InputBlock setState={p => { this.setState(p) }} tweets={this.state.tweets} />
        <div>
          {this.state.tweets.map(item => (
            <div className="tweet-card" key={item.id}>
              <h3>@{item.nickname}</h3>
              <p className="italic-text">{this.formatDatetime(item.created_at)}</p>
              <p className="tweet-content-text">{item.text_content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


class InputBlock extends React.Component {
  state = {
    nickname: "",
    text_content: "",
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    var created_at = new Date();

    var tweet = {
      "nickname": this.state.nickname,
      "text_content": this.state.text_content,
      "created_at": created_at
    }

    this.setState({
      nickname: "",
      text_content: "",
    })

    if (!this.state.text_content.replace(/\s/g, '').length || !this.state.nickname.replace(/\s/g, '').length) {
      alert('Niepoprawny wpis!');
    }
    else {
      axios.post('http://127.0.0.1:8000/api/tweet-list/', tweet)
        .then(response => this.props.setState({ tweets: [response.data].concat(this.props.tweets) }));
    }
  }

  render() {
    return (
      <form>
        <h3>Powiedz coś światu!</h3>
        <p className="input-des">Podaj swój nick:</p>
        <input
          className="nickname-input"
          name="nickname"
          value={this.state.nickname}
          onChange={this.handleInputChange}
          type="text" />
        <p className="input-des">Napisz tweeta-a:</p>
        <textarea
          className="tweet-input"
          name="text_content"
          value={this.state.text_content}
          onChange={this.handleInputChange}
          rows="4"
          cols="50"
          type="text">
          Pisz...
</textarea>
        <button
          className="submit-btn"
          onClick={this.handleClick}>
          Tweet!
        </button>
      </form >
    )
  }
}


export default App;
