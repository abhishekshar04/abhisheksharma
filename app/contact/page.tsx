function Contact() {
    return (
      <div className="p-6">
        <div className="text-4xl font-semibold mb-6">Contact</div>
        <hr className="border-t my-4 border-gray-300" />
        <div className="text-xl">
            If you&#39;d like to get in touch, you can reach me using the following methods. Please note, that I&#39;m currently available for freelance projects.
        </div>

        <div className="text-xl flex flex-col gap-5 font-semibold md:grid grid-cols-2 md:gap-6 mt-6">
          <div>
            <div className="text-gray-800">Email</div>
            <div className="text-[20px] font-extralight">
                <a
                href="mailto:abhishekshar6394@gmail.com"
                >
                abhishekshar6394@gmail.com
                </a>
            </div>
          </div>
          <div>
            <div className="text-gray-800">Twitter</div>
            <div className="text-[20px] font-extralight">
                <a
                href="https://x.com/abhi_coder_04"
                target="_blank"
                rel="noopener noreferrer"
                >
                @abhi_coder_04
                </a>
            </div>
          </div>
          <div>
            <div className="text-gray-800">GitHub</div>
            <div className="text-[20px] font-extralight">
                <a
                href="https://github.com/abhishekshar04/"
                target="_blank"
                rel="noopener noreferrer"
                >
                @abhishekshar04
                </a>
            </div>
          </div>
          <div>
            <div className="text-gray-800">LinkedIn</div>
            <div className="text-[20px] font-extralight">
                <a
                href="https://www.linkedin.com/in/abhishek-sharma-5b0020263/"
                target="_blank"
                rel="noopener noreferrer"
                >
                abhishek-sharma-5b0020263
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  