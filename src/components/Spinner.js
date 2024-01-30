import "./Spinner.css";
import { useState } from "react";
import {
  PushSpinner,
  TraceSpinner,
  RainbowSpinner,
  RingSpinner,
  SwishSpinner,
  PongSpinner,
  MetroSpinner,
  JellyfishSpinner,
} from "react-spinners-kit";

function Spinner(props) {
  // const [loading, setLoading] = useState(true)
  return (
    <>
      {/* <p className='tag'>Spinners using react-spinners-kit</p> */}

      <div className="spinnerContainer">
        <div className="spinner">
          <PushSpinner size={60} color="#00ff89" loading={props.loading} />
        </div>
        {/* <div className="spinner">
          <TraceSpinner
            size={40}
            frontColor="green"
            backColor="white"
            loading={loading}
          />
        </div>

        <div className="spinner">
          <RainbowSpinner size={50} color="purple" loading={loading} />
        </div>
        <div className="spinner">
          <RingSpinner size={50} color="yellow" loading={loading} />
        </div>
        <div className="spinner">
          <SwishSpinner
            size={40}
            frontColor="blue"
            backColor="white"
            loading={loading}
          />
        </div>
        <div className="spinner">
          <PongSpinner size={60} color="pink" loading={loading} />
        </div>
        <div className="spinner">
          <MetroSpinner size={40} color="white" loading={props.loading} />
        </div>
        <div className="spinner">
          <JellyfishSpinner size={40} color="grey" loading={loading} />
        </div> */}
      </div>
    </>
  );
}

export default Spinner;
