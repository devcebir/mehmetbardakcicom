"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
export default function ProjectsPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Yeni state

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qnigwom",
        "template_xr1eizt",
        form.current,
        "-R-BbYB_bySfFhq21"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setIsFormSubmitted(true); // Form başarılı bir şekilde gönderildiğinde state'i güncelle
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center gap-20 max-xxl:gap-10 max-xl:gap-5">
      {isFormSubmitted && ( // Form gönderildiyse toast bildirimini göster
        <Alert
          severity="success"
          className="absolute top-10 z-10"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setIsFormSubmitted(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Mesajınız başarıyla gönderildi!
        </Alert>
      )}
      <div
        className="bg-gradient-to-br animated-bg-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 from-[#183D3D] to-[#183D3D] 
      opacity-60 absolute inset-0 filter blur-3xl rounded-full w-[35rem] h-[35rem] max-xxl:w-[30rem] max-xxl:h-[30rem] max-sm:w-[20rem] max-sm:h-[20rem]
      max-xsm:w-[15rem] max-xsm:h-[15rem] z-0 animation"
      ></div>
      <div className="relative z-10 flex flex-col items-center">
        <h3
          className="absolute select-none text-7xl font-black opacity-20 animated-gradient blur-sm tracking-wider max-xxl:text-6xl max-lg:text-4xl
        max-md:text-5xl max-sm:text-4xl max-xsm:text-2xl"
        >
          İletişim
        </h3>
        <h3 className="text-6xl font-bold text-white select-none max-xxl:text-5xl max-md:text-4xl max-sm:text-3xl mt-5 max-md:mt-3">
          İletişim
        </h3>
      </div>

      <div className="flex items-center justify-center z-10 text-start">
        <div className="mx-auto w-full max-w-[550px] max-md:w-[450px] max-sm:w-[350px] max-xsm:w-[285px] max-sm:text-sm">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex gap-5">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-white max-sm:text-sm"
                >
                  Ad ve Soyad
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Emre Yılmaz"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white opacity-90 py-3 px-6 text-base font-medium 
                 text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md max-sm:text-sm"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-white max-sm:text-sm"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ornek@domain.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white opacity-90 py-3 px-6 text-base max-sm:text-sm font-medium
                 text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-white max-sm:text-sm"
              >
                Konu
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Konunuzu girin"
                className="w-full rounded-md border border-[#e0e0e0] bg-white opacity-90 py-3 px-6 text-base font-medium 
               text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md max-sm:text-sm"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-white max-sm:text-sm"
              >
                Mesaj
              </label>
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Mesajınızı girin"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white opacity-90 py-3 px-6 text-base
               font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md max-sm:text-sm"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#276363b6] py-3 px-8 text-base font-semibold 
               text-white outline-none max-sm:text-sm"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
