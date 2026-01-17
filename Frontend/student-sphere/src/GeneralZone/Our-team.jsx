import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import im1 from '../assets/images/shubi.jpeg';
import im2 from '../assets/images/priyanshu.jpeg';
import im3 from '../assets/images/vandana.jpeg';
import im4 from '../assets/images/saurav.jpeg';
import im5 from '../assets/images/jully.jpeg';
import im6 from '../assets/images/mukta.jpeg';
import im7 from '../assets/images/ayush.jpeg';
import im8 from '../assets/images/shristi.jpeg';
import im9 from '../assets/images/sonu.jpeg';
import im10 from '../assets/images/rahul.jpeg';
import im11 from '../assets/images/ajit.jpeg';
import im12 from '../assets/images/sarim.jpeg';
import im13 from '../assets/images/ashutosh.jpeg';

export default function DeveloperTeam() {
  return (
    <div>
      <Header />

      <div className="text-center mt-5">
        <h4 className="text-dark">Our Developer Team</h4>
      </div>
      <hr className="mx-5" />

      <div className="container-fluid my-3 text-center">
        <div className="row m-5">
          {/* Leader */}
          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im2} className="card-img-top" alt="Priyanshu Kumar Verma" />
              <div className="card-body">
                <h6 className="card-title">Priyanshu Kumar Verma</h6>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>BCA</b> From V.K.S. University (Ara), Bihar</p>
                <p className="card-text"><b>Role:</b> Leader</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>

          {/* Manager */}
          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im9} className="card-img-top" alt="Sonu Maurya" />
              <div className="card-body">
                <h5 className="card-title">Sonu Maurya</h5>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>BCA</b> From V.K.S. University (Ara), Bihar</p>
                <p className="card-text"><b>Role:</b> Manager</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>

          {/* Developers */}
          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im4} className="card-img-top" alt="Saurabh Kumar Singh" />
              <div className="card-body">
                <h6 className="card-title">Saurabh Kumar Singh</h6>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>B.Sc (Physics)</b> From V.K.S. University (Ara), Bihar</p>
                <p className="card-text"><b>Role:</b> Developer</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im10} className="card-img-top" alt="Rahul Pandey" />
              <div className="card-body">
                <h5 className="card-title">Rahul Pandey</h5>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>BCA</b> From V.K.S. University (Ara), Bihar</p>
                <p className="card-text"><b>Role:</b> Developer</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-5">
          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im3} className="card-img-top" alt="Vandana Kumari" />
              <div className="card-body">
                <h5 className="card-title">Vandana Kumari</h5>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>BCA</b> From Magadh University, Bodhgaya, Bihar</p>
                <p className="card-text"><b>Role:</b> Developer</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im1} className="card-img-top" alt="Shubham Priya" />
              <div className="card-body">
                <h5 className="card-title">Shubham Priya</h5>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>B.Sc (Maths)</b> From Magadh University, Bodhgaya, Bihar</p>
                <p className="card-text"><b>Role:</b> Developer</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im8} className="card-img-top" alt="Shrishti Mishra" />
              <div className="card-body">
                <h5 className="card-title">Shrishti Mishra</h5>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>BCA</b> From V.K.S. University (Ara), Bihar</p>
                <p className="card-text"><b>Role:</b> Developer</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im6} className="card-img-top" alt="Mukta Kumari" />
              <div className="card-body">
                <h5 className="card-title">Mukta Kumari</h5>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>BCA</b> From V.K.S. University (Ara), Bihar</p>
                <p className="card-text"><b>Role:</b> Developer</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-5">
          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im7} className="card-img-top" alt="Ayush Kumar" />
              <div className="card-body">
                <h5 className="card-title">Ayush Kumar</h5>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>BCA</b> From V.K.S. University (Ara), Bihar</p>
                <p className="card-text"><b>Role:</b> Developer</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im12} className="card-img-top" alt="Sarim Khan" />
              <div className="card-body">
                <h5 className="card-title">Sarim Khan</h5>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>BCA</b> From V.K.S. University (Ara), Bihar</p>
                <p className="card-text"><b>Role:</b> Developer</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im11} className="card-img-top" alt="Ajit Dubey" />
              <div className="card-body">
                <h5 className="card-title">Ajit Dubey</h5>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>BCA</b> From V.K.S. University (Ara), Bihar</p>
                <p className="card-text"><b>Role:</b> Developer</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im13} className="card-img-top" alt="Kr. Ashutosh" />
              <div className="card-body">
                <h5 className="card-title">Kr. Ashutosh</h5>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>BCA</b> From V.K.S. University (Ara), Bihar</p>
                <p className="card-text"><b>Role:</b> Developer</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-5">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="card" style={{ width: '14rem' }}>
              <img src={im5} className="card-img-top" alt="Juli Singh" />
              <div className="card-body">
                <h5 className="card-title">Juli Singh</h5>
                <p className="card-text"><b>MCA</b> From School of Management Science Varanasi, U.P.</p>
                <p className="card-text"><b>BCA</b> From Mahatma Gandhi Kashi Vidyapith Varanasi, U.P.</p>
                <p className="card-text"><b>Role:</b> Developer</p>
                <a href="#" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
