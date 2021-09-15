import react, { useState } from "react";
const Contact = () => {

    const [data, setdata] = useState({
        fname: '',
        phno: '',
        mail: '',
        msg: '',
    }
    )
    const InputEvent = (obj) => {
        const name = obj.target.name;
        const value = obj.target.value;
        setdata((prev) => {
            return {
                ...prev,
                [name]: value,

            }
        })
    }
    const formsubmit = (e) => {
        e.preventDefault();
        alert(`my name is : ${data.fname} 
                mobile number is : ${data.phno}
                mail is  : ${data.mail}
                massage is : ${data.msg}`);
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>

            </div>
            <div className="container contact_div" >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" name="fname" value={data.fname} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enetr your name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" name="phno" value={data.phno} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Mobile number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="mail" value={data.mail} onChange={InputEvent} id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" name="msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>

                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Contact;