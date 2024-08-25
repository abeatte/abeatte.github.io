import React, { Component } from 'react';
import Konami from 'react-konami-code';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Secret from './Components/Secret';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      konami: false,
      resumeData: {}
    };

    ReactGA.initialize('UA-55646580-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  konami = () => {
    this.setState((state) => {
      return { konami: !state.konami };
    });
  }

  render() {
    return (
      <div className="App">
        <Konami className="hidden" disabled={false} action={this.konami} timeout={25} />
        <Header konami={this.state.konami} data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Secret konami={this.state.konami} data={this.state.resumeData.secret} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
