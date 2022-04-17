import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <p>
        <div className="blog">
          <h4 className="blog-head"> Difference between `authorization` and `authentication`</h4>
          <p>
            Authentication is a process to verify that who is the user. On the
            other hand authorization is the process to check the authority of a
            user to access the resources. Authentication is done before the
            authorization process. It needs user login details. Where as
            authorization needs a user's priviege and security levels.
            Authentication determines wether the person is user or not. While
            authorization determines what permission do user have.
          </p>
        </div>
        <div className="blog">
          <h4 className="blog-head">
            {" "}
            Why are you using `firebase`? What other options do you have to
            implement authentication?
          </h4>
          <p>
            Firebase Authentication provides backend services. It is easy to use
            SDKs, and ready-made UI libraries to authenticate users to my app .
            It supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Github, Facebook and
            Twitter and more. That is why I am using firebase. To implement
            authentication there are options other than firebase which can also
            be used. Those are : Parse, Back4App, AWS Amplify, Kuzzle,
            Couchbase, RxDB etc. These services are also reliable for
            authentication.
          </p>
        </div>
        <div className="blog">
          <h4 className="blog-head">
            What other services does `firebase` provide other than
            authentication
          </h4>
          <p>
            Authentication is an outstanding service feature of firebase.
            Firebase also provides us with some more efficient services. Those
            services are - Cloud Firestore, Cloud Functions, Authentication,
            Hosting, Cloud Storage, Google Analytics, Predictions, Cloud
            Messaging. These services are used in mobile applicaiton, different
            kind of websites and so on. v
          </p>
        </div>
      </p>
    </div>
  );
};

export default Blogs;
