import React from "react";

function Resources() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Get Informed</h1>
            <a href="/suicide" className="btn btn-primary">
                  Let's talk Suicide
                </a>
                <a href="/mood" className="btn btn-primary">
                  Let's talk Depression
                </a>
                <a href="/addiction" className="btn btn-primary">
                  Let's talk Addiction
                </a>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;