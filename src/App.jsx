import { useRef, useState } from "react";
import Modal from "./Modal";
import './App.css';


function App() {

  const nameRef = useRef()
  const surnameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const modalRef = useRef()
  const appRef = useRef()

  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

  const [infoArr, setInfoArr] = useState([
    {
      name: '',
      surname: '',
      email: '',
      password: ''
    }
])


  function openModal(){
    if(regex.test(emailRef.current.value)){
      let info = [
        {
          name: nameRef.current.value,
          surname: surnameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value
        }
      ]
      
      setInfoArr(info)
      modalRef.current.classList.remove('close')

    } else{
      alert('Not a valid e-mail address')
    }
  }


  return (
    <>
    <Modal reference={modalRef} data={infoArr}/>
    <div className="app row bg-dark align-items-center justify-content-center" ref={appRef}>
      <div className="conatiner row align-items-center justify-content-center">
        <h1></h1>
          <form className="form col-3" autoComplete="off">

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" ref={nameRef} placeholder="Name" />
            </div>


            <div className="mb-3">
              <label htmlFor="surname" className="form-label">Surname</label>
              <input type="text" className="form-control" id="surname" ref={surnameRef} placeholder="Surname" />
            </div>


            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" ref={emailRef} placeholder="Email" />
            </div>


            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" ref={passwordRef} placeholder="Password" />
            </div>

            <div className="mb-3">
              <button type="button" className="btn btn-primary w-100" onClick={openModal}>Submit</button>
            </div>

          </form>
        </div>
    </div>
    </>
  );
}

export default App;
