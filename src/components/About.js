import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Kyle Domingo.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            The greatest techincian that ever lived~!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://mail.google.com/mail/u/0?ui=2&ik=d41033f365&attid=0.1&permmsgid=msg-f:1816492435516740517&th=19357a3ef428d3a5&view=fimg&fur=ip&permmsgid=msg-f:1816492435516740517&sz=s0-l75-ft&attbid=ANGjdJ9V3Gr67jqPof16TdkBITy3HYfG1R8H7e-WgHJNQESEbUc4LuHQa_bZjMu6gJjFdU03y2OA1pUKOs-8h6G5E7YGPJjb0e_SI32RPPG9vFcy34X4VbAQrE2KbUQ&disp=emb&realattid=19357a3b454d5e42f231&zw"
          />
        </div>
      </div>
    </section>
  );
}
