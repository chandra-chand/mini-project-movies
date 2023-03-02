import {HiOutlineSearch} from 'react-icons/hi'
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div>
      <img
        src="https://res.cloudinary.com/djo72ivyd/image/upload/v1674027400/Group_7399_donaa1.png"
        alt="website logo"
      />
    </div>
    <ul className="home-popular">
      <Link to="/" className="list-item">
        <li>Home</li>
      </Link>
      <Link to="/popular" className="list-item">
        <li>Popular</li>
      </Link>
    </ul>

    <div>
      <HiOutlineSearch />
      <img
        src="https://res.cloudinary.com/djo72ivyd/image/upload/v1674034589/Mask_Group_gsjtri.png"
        alt="account"
      />
    </div>
  </div>
)
export default Header
