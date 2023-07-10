const Contact = () => {
  return (
    <div id="contact">
      <section className="pt-12 pb-8">
        <h2 className="text-center text-3xl font-bold text-[#00E7FF] underline">
          Contact
        </h2>
        <div className="grid justify-items-center">
          <form
            action="https://formspree.io/f/xzblbaao"
            method="POST"
            className="w-80 pt-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-b-2 border-[#FF0080] h-12 bg-transparent outline-none focus:border-white w-full"
            />
            <input
              type="text"
              name="submit"
              placeholder="Subject"
              className="border-b-2 border-[#FF0080] h-12 bg-transparent outline-none focus:border-white w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-b-2 border-[#FF0080] h-12 bg-transparent outline-none focus:border-white w-full"
            />
            <textarea
              name="message"
              className="border-b-2 border-[#FF0080] h-12 bg-transparent outline-none focus:border-white w-full"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="btn btn-outline w-full border-success hover:bg-pink-400"
            >
              submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
