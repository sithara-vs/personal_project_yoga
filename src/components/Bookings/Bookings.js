// import React from "react";

// import axios from "axios";
// import "./Bookings.css";

// export default class Bookings extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       classes: [],
//     };
//   }

//   componentDidMount() {
//     axios.get("/api/classes").then((res) => {
//       const classes = res.data;
//       this.setState({ classes });
//     });
//   }

//   render() {
//     return (
//       <div>
//         return (
//         <li className="class">
//           <div className="day">{classes.day_of_the_week}</div>
//           <div className="description">
//             <p> {classes.description}</p>
//           </div>
//           <div className="button-">
//             <button
//               className=" select1"
//               type="button"
              
//             >
//               -
//             </button>
//           </div>
//           <p>{this.state.participants}</p>
//           <div className="button-">
//             <button
//               className=" select2"
//               type="button"
             
//             >
//               +
//             </button>
//           </div>
//           <p>{classes.price}</p>
//           <div className="buttonbook">
//             <button className="book" type="button">
//               BOOK
//             </button>
//           </div>
//         </li>
//         );
//       </div>
//     );
//   }
// }
