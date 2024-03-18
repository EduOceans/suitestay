import React, { useState } from "react";

import { Form, Field } from "react-final-form";

import { InputText } from "primereact/inputtext";

import { InputTextarea } from "primereact/inputtextarea";

import { Button } from "primereact/button";

import { Dialog } from "primereact/dialog";

import { classNames } from "primereact/utils";

import "./contact.css"

export default function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const onSubmit = (data, form) => {
    setFormData(data);
    setShowMessage(true);

    form.restart();
  };

  const validate = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = "Name is required.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    if (!data.message) {
      errors.message = "Please input your message here."
    }

    return errors;
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <div>
      <div className="surface-0">
        <div className="text-900 font-bold text-6xl mb-4 text-center">
          GET IN TOUCH WITH US
        </div>
        <div className="text-700 text-xl mb-6 text-center line-height-3">
          Feel free to reach out to us for any inquiries, feedback, or just to
          say hello!
        </div>

        <div className="grid ">
          <div className="col-12 lg:col-4 ">
            <div className="p-3 h-full ">
              <div
                className="shadow-2 p-3 h-full flex flex-column border-solid border-white-300 border-round-xl text-center"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">
                  The best way to get in contact
                </div>
                <div className="text-600">Plan description</div>

                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300 border-white-400" />
                <div className="text-center">
                  <i class="pi pi-phone pr-2"></i>
                  <span className="">Phone: </span>
                  <a href="tel://01234567890">01234567890</a>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300 border-white-400" />
                <div className="text-center">
                  <i class="pi pi-envelope pr-2"></i>
                  <span className="">Email: </span>
                  <a href="mailto:Suitestay@gmail.com">Suitestay@gmail.com</a>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300 border-white-400" />
                <div className="text-center">
                  <i class="pi pi-compass pr-2"></i>
                  <span className="">Find Us: </span>
                  <a href="tel://01234567890"></a>123 Main Street
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300 border-white-400" />
                <div className="text-center">
                  <i class="pi pi-calendar-times pr-2"></i>
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
                className="shadow-2 p-3 h-full flex flex-column border-solid border-white-300 border-round-xl text-center"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">
                  Contact Form
                </div>
                <div className="text-600">Get in touch</div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300 border-white-300" />
                <div>
                  <Dialog
                    visible={showMessage}
                    onHide={() => setShowMessage(false)}
                    position="top"
                    footer={dialogFooter}
                    showHeader={false}
                    breakpoints={{ "960px": "80vw" }}
                    style={{ width: "30vw" }}
                  >
                    <div className="flex align-items-center flex-column pt-6 px-3">
                      <i
                        className="pi pi-check-circle"
                        style={{ fontSize: "5rem", color: "var(--green-500)" }}
                      ></i>
                      <h5>Registration Successful!</h5>
                      <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
                        Your account is registered under name{" "}
                        <b>{formData.name}</b> ; it'll be valid next 30 days
                        without activation. Please check <b>{formData.email}</b>{" "}
                        for activation instructions.
                      </p>
                    </div>
                  </Dialog>
                  <Form
                    onSubmit={onSubmit}
                    initialValues={{
                      name: "",
                      email: "",
                    }}
                    validate={validate}
                    render={({ handleSubmit }) => (
                      <form onSubmit={handleSubmit} className="p-fluid">
                        <Field
                          name="name"
                          render={({ input, meta }) => (
                            <div className="field">
                              <span className="p-float-label p-input-icon-right">
                              <i className="pi pi-id-card" />
                                <InputText
                                  id="name"
                                  {...input}
                                  autoFocus
                                  className={classNames({
                                    "p-invalid": isFormFieldValid(meta),
                                  })}
                                />
                                <label
                                  htmlFor="name"
                                  className={classNames({
                                    "p-error": isFormFieldValid(meta),
                                  })}
                                >
                                  Name*
                                </label>
                              </span>
                              {getFormErrorMessage(meta)}
                            </div>
                          )}
                        />
                        <Field
                          name="email"
                          render={({ input, meta }) => (
                            <div className="field">
                              <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText
                                  id="email"
                                  {...input}
                                  className={classNames({
                                    "p-invalid": isFormFieldValid(meta),
                                  })}
                                />
                                <label
                                  htmlFor="email"
                                  className={classNames({
                                    "p-error": isFormFieldValid(meta),
                                  })}
                                >
                                  Email*
                                </label>
                              </span>
                              {getFormErrorMessage(meta)}
                            </div>
                          )}
                        />
                        <Field
                          name="message"
                          render={({ input, meta }) => (
                            <div className="field">
                              <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-comment" />
                                <InputTextarea
                                  id="message"
                                  {...input}
                                  className={classNames({
                                    "p-invalid": isFormFieldValid(meta),
                                  })}
                                />
                                <label
                                  htmlFor="message"
                                  className={classNames({
                                    "p-error": isFormFieldValid(meta),
                                  })}
                                >
                                  Message*
                                </label>
                              </span>
                              {getFormErrorMessage(meta)}
                            </div>
                          )}
                        />
                        <Button type="submit" label="Submit" className="mt-2 text-white border-white" />
                      </form>
                    )}
                  />
                </div>

                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
