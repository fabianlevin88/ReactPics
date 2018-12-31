import React     from 'react'
import SearchBar from './SearchBar';
import Photo     from './Photo';
import unsplash  from '../api/unsplash';
import './App.css';


class App extends React.Component {

    state = { images: [] }

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div id="searchBar" className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <Photo images={this.state.images} />
            </div>
        );
    }
}

export default App;