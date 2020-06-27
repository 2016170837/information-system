/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" background-color="black" >
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/korarchy/"
                target="_blank"
              >
                Contact Us
              </a>
            </li>
            
          </ul>
        </nav>

        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.instagram.com/korarchy/"
            target="_blank"
          >
            Jean Bon chic
          </a>
          . Coded by{" "}
          <a
            href="https://www.instagram.com/namda_on/"
            target="_blank"
          >
            Jinyong Park
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
