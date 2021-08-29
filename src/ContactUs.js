import React,{useState} from 'react'


const ContactUs = () => {

    const[data,setData]=useState({
        fullName:"",
        email:"",
        phone:"",
        msg:""
    })
    

    const InputEvent=(event)=>{
            const{name,value}=event.target;

            setData((preVal)=>{
                return{
                    ...preVal,
                    [name]:value,
                }
            })
            }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My Name is ${data.fullName} and I am Very Happy. You can contact me at ${data.phone} or ${data.email} and i just want to say${data.msg}`)
    }
    return (
        <>
            <div className="my=5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div" >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="fullName" vlaue={data.fullName} onChange={InputEvent}/>
                                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" vlaue={data.email} onChange={InputEvent} />
                                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" vlaue={data.phone} onChange={InputEvent}/>
                                
                            </div>
                            <div className="mb-3">
                                <label for="textArea" className="form-label">
                                Message
                                </label>
                                <textarea className="form-control"
                                id="textArea"
                                rows="3"
                                name="msg" vlaue={data.msg} onChange={InputEvent}></textarea>
                            </div>
                           

                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
