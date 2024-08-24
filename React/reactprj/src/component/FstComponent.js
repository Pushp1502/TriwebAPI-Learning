
function FstComponent(props) {
    return <div className="modal">
        <h1>{props.owner} application</h1>
        <p>This application is {props.reason}</p>
        <button onClick={props.closeModal}>Close</button>
    </div>

}

export default FstComponent;