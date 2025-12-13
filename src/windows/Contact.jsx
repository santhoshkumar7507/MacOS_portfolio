import WindowWrapper from "#hoc/WindowWrapper.jsx"


const Contact = () => {
  return (
  <>
    <div id="window-header">
        <h2>Contact Me</h2>
    </div>

    <div className="p-5 space-y-5">
         <img src="/images/adrian.jpg" alt="Adrian"
         className="w-20 rounded-full"/>

         <h3>Let's Connect</h3>
         <p>Got an idea? A bug to squash? Or just wanna talk tech?
            I'm in.
         </p>
    </div>
    </>
    );
};

const ContactWindow = WindowWrapper(Contact,'contact');

export default ContactWindow;