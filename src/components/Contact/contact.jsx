import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function Contact() {
  const toast = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const showEmptyFieldsToast = () => {
    toast.current.show({
      severity: "warn",
      summary: "Warning",
      detail: "Please fill in all of the fields.",
    });
  };
  const showSuccessToast = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Message sent successfully!",
    });
  };

  const handleSubmit = () => {
    if (!name || !email || !message) {
      showEmptyFieldsToast();
    } else {
      showSuccessToast();
    }
  };

  return (
    <div className="">
      <div className="surface-0">
        <div className="text-900 font-bold text-6xl mb-4 text-center pt-5">
          GET IN TOUCH WITH US
        </div>
        <div className="text-700 text-xl mb-6 text-center line-height-3">
          Feel free to reach out to us for any inquiries, feedback, or just to
          say hello!
        </div>

        <div className="grid">
          <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
              <div
                className="shadow-4 p-3 h-full flex flex-column border-round-xl text-center"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">
                  The best way to get in contact
                </div>
                <div className="text-600">Plan description</div>

                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300 border-white-400" />
                <div className="text-center">
                  <i className="pi pi-phone pr-2"></i>
                  <span className="">Phone: </span>
                  <a href="tel://1234567890">01234567890</a>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300 border-white-400" />
                <div className="text-center">
                  <i className="pi pi-envelope pr-2"></i>
                  <span className="">Email: </span>
                  <a href="mailto:suitestay@gmail.com">suitestay@gmail.com</a>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300 border-white-400" />
                <div className="text-center">
                  <i className="pi pi-compass pr-2"></i>
                  <span className="">Find Us: </span>
                  <a href="tel://01234567890"></a>123 Main Street
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300 border-white-400" />
                <div className="text-center">
                  <i className="pi pi-calendar-times pr-2"></i>
                  <span className="">Opening Hours: </span>
                  <span>24/7</span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300 border-white-400" />
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-8">
            <div className="p-3 h-full">
              <div
                className="shadow-4 p-3 h-full flex flex-column border-round-xl text-center"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">
                  Contact Form
                </div>
                <div className="text-600">Get in touch</div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300 border-white-300" />
                <form className="p-fluid">
                  <div className="field pt-2">
                    <span className="p-float-label p-input-icon-right">
                      <i className="pi pi-id-card" />
                      <InputText
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="name">Name*</label>
                    </span>
                  </div>
                  <div className="field pt-2">
                    <span className="p-float-label p-input-icon-right">
                      <i className="pi pi-envelope" />
                      <InputText
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Email*</label>
                    </span>
                  </div>
                  <div className="field pt-2">
                    <span className="p-float-label p-input-icon-right">
                      <i className="pi pi-comment" />
                      <InputTextarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <label htmlFor="message">Message*</label>
                    </span>
                  </div>
                  <Toast ref={toast} />
                  <Button
                    onClick={handleSubmit}
                    type="button"
                    label="Submit"
                    className="mt-2"
                  />
                </form>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
