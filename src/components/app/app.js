import React, {Component} from 'react';
import Item from '../item';

export default class App extends Component {

  list(data) {
  	const children = (items) => {
    	if (items) {
      	return <ul>{this.list(items)}</ul>
      }
    }
    
    return data.map((node) => {
      return <Item key={node.id} name={node.name} >
        {children(node.country)}
      </Item>}
    )
  }
  
  render() {
  	return <ul>
    	{this.list(this.props.data)}
    </ul>
  }
}