import React, { Component } from "react";


class ToggleBox extends React.Component {

  

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}
  
	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		var { title, children } = this.props;
		const { opened } = this.state;

		if (opened){
			title ='Stop Game!~';
		}else{
			title ='Start~';
		}

		return (
			<div className="box">
				<button className="boxTitle" onClick={this.toggleBox}>
					{title}
				</button>

				{opened && (					
					<div className="boxContent">
						{children}
      
					</div>
				)}

			</div>
		);
	}
}

export default ToggleBox;