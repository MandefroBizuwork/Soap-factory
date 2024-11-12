import React from 'react'

const SignUp = () => {
  return (
    <div className='container-fluid bg-light p-5'>
      <div class="col-lg-7 container ">
        <form action="forms/contact.php" method="post" class="php-email-form bg-white shadow py-3 px-5" data-aos="fade-up" data-aos-delay="200">
       <h2 style={{textAlign:"center",marginTop:"0"}}>Sign up here<hr/></h2>
        <div class="row gy-4 my-3">
            <div class="col-md-6">
                <label for="name-field" class="pb-2">First name</label>
                <input type="text" name="name" id="name-field" class="form-control"/>
                </div>
                <div class="col-md-6">
                <label for="name-field" class="pb-2">Last name</label>
                <input type="text" name="name" id="name-field" class="form-control"/>
                </div>
                <div class="col-md-6">
                    <label for="email-field" class="pb-2">Your Email</label>
                    <input type="email" class="form-control" name="email" id="email-field"/>
                    </div>
                    <div class="col-md-6"><label for="subject-field" class="pb-2">Phone</label>
                    <input type="text" class="form-control" name="subject" id="subject-field"/>
                    </div>
                  
                        <div class="col-md-12 "><div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>
                        <button className='btn btn-success' type="submit">Sign up</button>
                        </div>
                        <span>Do you have an account?<a href='#'>Sign in here</a></span>
                        </div>
                    </form></div>
    </div>
  )
}

export default SignUp
