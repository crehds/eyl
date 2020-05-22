import React, { PureComponent } from 'react'

export default class Template extends PureComponent {
  render() {   
    return (
      <div className="div-carrusel">
        {this.props.content.string}
      </div>
    )
  }
}
