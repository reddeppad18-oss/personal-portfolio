import {
  Mail,
  Phone,
  Code2,
  BriefcaseBusiness,
  ArrowUpRight,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <div className="contact-card">

          <div className="contact-content">

            <p className="section-label">
              CONTACT
            </p>

            <h2>
              Let's build something
              <span> together.</span>
            </h2>

            <p className="contact-description">
              I'm currently looking for my first professional
              opportunity as a Java Backend Developer. If you're
              hiring, have a project idea, or simply want to connect,
              I'd be happy to hear from you.
            </p>

            {/* Email */}
            <a
              href="mailto:reddeppa.d18@gmail.com"
              className="contact-email"
            >
              <Mail size={18} />

              <span>
                reddeppa.d18@gmail.com
              </span>

              <ArrowUpRight size={17} />
            </a>

            {/* Phone */}
            <a
              href="tel:+917816059412"
              className="contact-phone"
            >
              <Phone size={18} />

              <span>
                +91 78160 59412
              </span>

              <ArrowUpRight size={17} />
            </a>

          </div>

          <div className="contact-actions">

            <a
              href="mailto:reddeppa.d18@gmail.com"
              className="contact-primary"
            >
              <Send size={17} />
              Send Me an Email
            </a>

            <div className="contact-socials">

              {/* GitHub */}
              <a
                href="https://github.com/reddeppad18-oss"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Code2 size={19} />
              </a>

              {/* LinkedIn - add profile later */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness size={19} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;