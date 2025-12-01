import { CDN_URL } from "../utils/constants";

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
      <img className="logo" src="https://e7.pngegg.com/pngimages/815/847/png-clipart-take-out-android-sindelantal-app-food-text.png" alt="logo" />
    </div>
    <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Conatact Us</li>
      <li>Cart</li>
    </ul>
    </div>
    </div>
  )
}
export default Header;