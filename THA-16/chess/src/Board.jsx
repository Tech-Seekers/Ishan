function Board(){
    let boxes=[];
    for(var i=0;i<8;i++){
        boxes.push(<div className="box"></div>)
    }

    return(
            <div className="board">
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
            </div>
    );   
}

export default Board;