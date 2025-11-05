import React from 'react'

export default function Login() {
  return (
      <main className='container-fluid py-5'>
          <div className='container'>
              <div className='row'>
                  <div className="col-5">
                      <h3>Login</h3>
                      <hr />
                        <form className='mt-3'>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Username</label>
                            <input type="text" className="form-control" id="Email" />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                  </div>
                  <div className="col-5 offset-2">
                      <h3>Sign Up</h3>
                      <hr />
                      <form className='mt-3'>
                        <div className="mb-3">
                            <label htmlFor="FirstName" className="form-label">First Name</label>
                              <input type="text" className="form-control" id="FirstName" />
                            <label htmlFor="LastName" className="form-label mt-2">Last Name</label>
                              <input type="text" className="form-control" id="LastName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="Username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                  </div>
              </div>
        </div>
    </main>
  )
}
