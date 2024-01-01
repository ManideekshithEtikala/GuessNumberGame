/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import IMAGES from "../images/Images";
const Navbar = ({score}) => {
  return (
    <div className="flex bg-blue-900 py-2 flex-row justify-between text-yellow-300">
      <div className="flex items-center justify-center mx-4">
        <a>
          <img src={IMAGES.image1} className="w-10 h-10 mx-4" />
        </a>
        <h2 className="text-[2rem] font-mono">GUESSING NUMBER GAME</h2>
      </div>
      <div className="flex items-center justify-center mx-2">
        <span className="text-white font-mono text-[3rem]"><a> SCORE : {score}</a></span>
      </div>
    </div>
  );
};
Navbar.propTypes={
  score:PropTypes.node
}

export default Navbar;
