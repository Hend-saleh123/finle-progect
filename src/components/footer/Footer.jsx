import React from 'react';
import "./footer.css";
export default function  Footer() {
  return (
    <>
      <hr></hr>
      <footer class=" text-dark pt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <a className="size">Funiro</a>
              <ul class="list-unstyled ">
                <li>
                  <a href="#" class="light">
                    400 Unvirsity Drive Suite 200
                  </a>
                </li>
                <li>
                  <a href="#" class="light">
                    Gables
                  </a>
                </li>
                <li>
                  <a href="#" class="light">
                    Fl 33134 USA
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <a className="light" href="#">
                Links
              </a>
              <ul class="list-unstyled">
                <li className="pb-5">
                  <a href="#">Home</a>
                </li>
                <li className="pb-5">
                  <a href="#">Shop</a>
                </li>
                <li className="pb-5">
                  <a href="#">About</a>
                </li>
                <li className="pb-5">
                  <a href="#"> Contact</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <a className="light" href="#">
                Help
              </a>
              <ul class="list-unstyled">
                <li className="pb-5">
                  <a href="#">Payment Options</a>
                </li>
                <li className="pb-5">
                  <a href="#">Ruterns</a>
                </li>
                <li className="pb-5">
                  <a href="#">Privacy Policies</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 ">
              <a className="light" href="#">
                Newsaltter
              </a>
              <div className="flex list-unstyled">
                <a class=" border-bottom border-dark light">
                  Inter Your Email Addres
                </a>
                <a>
                  <a class=" border-bottom border-dark">SUBSCRIBE</a>
                </a>
              </div>
            </div>
          </div>

          <hr class="bg-light" />

          <p class="text-start pb-4 bt-5">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
