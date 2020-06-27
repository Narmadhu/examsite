import React, { useState } from "react";
import "../pageStyle/Contact.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

function Contact() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="contact-page">
      <form className="contact-form">
        <h1>Contact Us</h1>
        <div>
          <input type="text" id="input-box" placeholder="Name" />
        </div>
        <div id="name-error"></div>
        <div>
          <input type="text" id="input-box" placeholder="Email" />
        </div>
        <div>
          <textarea id="input-box" placeholder="Message"></textarea>
        </div>
        <div>
          <a
            id="submit-btn"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            Submit
          </a>
        </div>
      </form>

      <Modal
        className="modal-form"
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={{
          overlay: {
            backgroundColor: "lightgrey",
          },
          content: {
            backgroundColor: "white",
          },
        }}
      >
        <div className="modal-header">
          <h2>Dummy Message</h2>
          <button
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-body">
          <p>SUCCESS! Your message is successfully submitted</p>
        </div>
      </Modal>
    </div>
  );
}

export default Contact;
