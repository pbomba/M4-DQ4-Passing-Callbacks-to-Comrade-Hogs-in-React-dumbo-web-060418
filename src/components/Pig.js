import React from "react"
import exclamation from "../assets/exclamation.png"
import dun from '../assets/Dun-dun-dun.mp3';

export default class Pig extends React.Component {

	constructor(){
		super()

		this.dunAudio = new Audio(dun)
	}

  panic = () => {
  	<img className="exclamation" src={exclamation} alt="" />
  	this.dunAudio.play()
  }


  render() {
        console.log(this.props)
    return(
      <div id={this.props.name} className="sheeple">
        {(this.props.environment === 'inhospitable') ? this.panic() : null}
      </div>
    )
  }
}
