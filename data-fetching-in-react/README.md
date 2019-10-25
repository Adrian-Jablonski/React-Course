# Data fetching in React

## Fetch API

```javascript
componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then((response) => {
        return response.json();
      }).then((responseData) => {
        return this.setState({gifs: responseData.data});
      }).catch((err) => {
        console.log('Error fetching and parsing data ' + err);
      })
  }
```

## Axios API
```javascript
componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then((response) => {
        return this.setState({
          gifs: response.data.data
        })
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }
```