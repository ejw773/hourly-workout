import React from 'react';

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://type.fit/api/quotes")
          .then(res => res.json())
          .then(
            (result) => {
                let arrayLength = result.length;
                let randomNum = Math.floor(Math.random() * Math.floor(arrayLength))
              this.setState({
                isLoaded: true,
                quoteText: result[randomNum].text,
                quoteSource: result[randomNum].author
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error {error.message}</div>
        } else if (!isLoaded) {
            return (
              <div className="card famous-quote mx-auto bg-transparent">
              <h1>Loading...</h1>
          </div>  
            )
        } else {
            return (
        <div className="card famous-quote mx-auto bg-transparent">
            <h1>"{this.state.quoteText}"</h1>
            <p>{this.state.quoteSource}</p>
        </div>
    )
}}}

export default Quote;