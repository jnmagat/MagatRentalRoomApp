import React, {Component} from "react";

const BoarderContext = React.createContext();

class BoarderProvider extends Component{
    state = {
        boarders: [{
            name: '',
            // amt_pay: 0,
            // rem_amt: 0,
            // date_in: null,
        }],
        views: {
            page: ''
        }
    }

    addBoarder = (boarder) => {
        this.setState( (prevState) => ({
            boarders: [
                ...prevState.boarders,
                boarder
            ]
        }))
    }

    switchPage = (value) => {
        const {page} = this.state.views;

        if(value === "Add"){
            this.setState({
                views: {
                    page: value
                }
            })
        } else if(value === "View"){
            this.setState({
                views: {
                    page: value
                }
            })
        } else{
            this.setState({
                views: {
                    page: ""
                }
            })
        }
    }

    render() {
        return(
            <>
                <BoarderContext.Provider value = {{
                    state: this.state,
                    switchPage: this.switchPage,
                    addBoarder: this.addBoarder
                }}>
                    {this.props.children}
                </BoarderContext.Provider>
            </>
        )
    }
}

export {
    BoarderContext, 
    BoarderProvider
}