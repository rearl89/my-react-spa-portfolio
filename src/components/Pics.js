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
          <div className="flex justify-center">
            <img src={this.state.picList[this.state.index]} style={{"height":"550px","maxWidth":"550px"}} />
          </div>
            <div className="flex justify-center">
            <button className="rounded-full bg-blue-200 w-24 border-solid border-2 border-sky-500" style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
            <button className="rounded-full bg-blue-200 w-24 border-solid border-2 border-sky-500" style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
            </div>
        </div>
        );
      }

}


export default Main;