// import { useState } from "react";
import React from "react";

export class List extends React.Component {
  state = {
    numbers: [1, 2],
  };

  addRandomNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    this.setState({
      numbers: [...this.state.numbers, randNumber],
    });
  };

  componentDidMount() {
    console.log("Component mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState, this.props, this.state);
    if (this.state.numbers.length !== prevState.numbers.length) {
      console.log("List of numbers is updated!");
    }
  }

  componentWillUnmount() {
    console.log("Component will delete");
  }

  render() {
    return (
      <div>
        <button className='border-2 px-6 bg-rose-100 p-2 m-5' onClick={this.addRandomNumber}>New Number </button>
        <div>
          {this.state.numbers.map((num, index) => (
            <div style={{ borderBottom: "2px solid lavender" }} key={index}>
              {num}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// export const List = ( ) => {
//   const [numbers, setNumbers] = useState([1, 2]);

//   const addNumber = () => {
//     const randNumber = Math.round(Math.random() * 10);
//     //  setNumbers([ ])  // clear display
//     const newArray = [...numbers, randNumber];
//     setNumbers(newArray);
//     console.log(numbers);
//   };

//   return (
//     <div>
//       <button onClick={addNumber}>New Number </button>
//       <div>
//         {numbers.map((num, index) => (
//           <div style={{ borderBottom: "2px solid gray" }} key={index}>
//             {num}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
