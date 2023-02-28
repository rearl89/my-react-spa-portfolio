import React, { Component } from "react";
import pic1 from "./pics/pic1.jpeg"
import pic2 from "./pics/pic2.jpeg"
import pic3 from "./pics/pic3.JPG"
import pic4 from "./pics/pic4.JPG"

class Main extends Component {   


    state = {
        index: 0, 
        picList: [pic1, pic2, pic3, pic4]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div>
            <img src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} /> <br/>
            <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
            <button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
          </div>
        );
      }

}


export default Main;