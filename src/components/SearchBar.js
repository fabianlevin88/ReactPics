import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''}

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={event => this.onFormSubmit(event)}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" placeholder="Search..." value={this.state.term} onChange={event => this.onInputChange(event)}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;