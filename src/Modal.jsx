import './App.css'

const Modal = ({reference, data}) => {
    function closeModal(){
        reference.current.classList.add('close')
    }
    return (
        <div className="modal close" ref={reference}>
            <div className="modal__block">
                <h2 className="modal__title">Info</h2>
                <div className="infoBlock">
                    <p className="modal__text">Name: {data[0].name}</p>
                    <p className="modal__text">Surname: {data[0].surname}</p>
                    <p className="modal__text">Email: {data[0].email}</p>
                    <p className="modal__text">Password: {data[0].password}</p>
                </div>
                <button className="modal__btn btn btn-primary" onClick={closeModal}>OK</button>
            </div>
        </div>
    )
}

export default Modal