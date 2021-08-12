import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  changeState = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    let {searchInput} = this.state
    searchInput = searchInput.toLowerCase()
    const {initialDestinationsList} = this.props
    const filteredList = initialDestinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="mainContainer">
        <div className="container">
          <h1 className="main-heading">Destination Search</h1>
          <div className="searchContainer">
            <input
              type="search"
              className="search"
              placeholder="Search"
              onChange={this.changeState}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>
        <ul className="bgContainer">
          {filteredList.map(eachItem => (
            <DestinationItem item={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
