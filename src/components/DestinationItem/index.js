import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {item} = this.props
    return (
      <li className="ItemContainer">
        <img src={item.imgUrl} alt="img" className="image" />
        <p className="ItemName">{item.name}</p>
      </li>
    )
  }
}

export default DestinationItem
