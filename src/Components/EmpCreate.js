import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const EmpCreate = () => {
    const[id, IdChange]=useState("");
    const[name,NameChange]=useState("");
    const[email,EmailChange]=useState("");
    const[phone,PhoneChange]=useState("");
    const[active,ActiveChange]=useState(true);
    const[validation,ValChange]=useState(false);
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const emp_data = { name, email, phone, active };
        fetch("http://localhost:3000", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(emp_data),
        })
          .then((res) => {
            alert('Saved successfully.');
            navigate('/');
          })
          .catch((err) => {
            console.log(err.message);
          });
        console.log("emp_data::", emp_data);
      };
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} onChange={(e)=>IdChange(e.target.value)}  className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={(e)=>ValChange(true)} onChange={(e)=>NameChange(e.target.value)} className="form-control"></input>
                                        {name.length===0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e=>EmailChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={e=>PhoneChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>ActiveChange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">Is Active</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default EmpCreate;