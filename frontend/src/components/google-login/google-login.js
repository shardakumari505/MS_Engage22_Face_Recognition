// import React, { Component } from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";

// const CLIENT_ID =
//   "821565159505-q3jkrlf8reipab1kqtsribkv150ciod6.apps.googleusercontent.com";

// function GoogleLoginComponent() {
//   // Success Handler
//   responseGoogleSuccess = (response) => {
//     console.log();
//     let userInfo = {
//       name: response.profileObj.name,
//       emailId: response.profileObj.email,
//     };
//     this.setState({ userInfo, isLoggedIn: true });
//   };

//   // Error Handler
//   responseGoogleError = (response) => {
//     console.log(response);
//   };

//   // Logout Session and Update State
//   logout = (response) => {
//     console.log(response);
//     let userInfo = {
//       name: "",
//       emailId: "",
//     };
//     this.setState({ userInfo, isLoggedIn: false });
//   };

//     return (
//       <div className="row mt-5">
//         <div className="col-md-12">
//           {this.state.isLoggedIn ? (
//             <div>
//               <h1>Welcome, {this.state.userInfo.name}</h1>

//               <GoogleLogout
//                 clientId={CLIENT_ID}
//                 buttonText={"Logout"}
//                 onLogoutSuccess={this.logout}
//               ></GoogleLogout>
//             </div>
//           ) : (
//             <GoogleLogin
//               clientId={CLIENT_ID}
//               buttonText="Sign In with Google"
//               onSuccess={responseGoogleSuccess}
//               onFailure={responseGoogleError}
//               isSignedIn={true}
//               cookiePolicy={"single_host_origin"}
//             />
//           )}
//         </div>
//       </div>
//     );
//   }
// export default GoogleLoginComponent;