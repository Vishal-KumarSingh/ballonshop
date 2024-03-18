import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
        <div className="col-md-4 col-lg-4 col-sm-12 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">OFFICE ADDRESS</label>
                <div class="d-flex">
                    E-156, 2nd Floor, Nihal Vihar,
                    Nangloi, New Delhi-110041
                  </div>
              </div>
              <div class="form my-3">
                <label for="Email">OUT EMAIL</label>
                <div class="d-flex">
                    
info@haplun.in
                  </div>
              </div>
              <div class="form  my-3">
                <label for="Password">PHONE NUMBER</label>
                <div class="d-flex">
                9811552041 (Delhi NCR/Lucknow)

9811555641 (Bangalore/Mumbai/Pune)
                  </div>
              </div>
              
            
            </form>
          </div>
          <div className="col-md-8 col-lg-8 col-sm-12 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form my-3">
                <label for="mobile">Mobile</label>
                <input
                  type="number"
                  class="form-control"
                  id="mobile"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div class="form my-3">
                <label for="location">Location</label>
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  placeholder="City or  Location"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
