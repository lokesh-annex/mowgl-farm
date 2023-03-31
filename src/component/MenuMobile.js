import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-scroll";
function MobileMenu() {
  return (
    <Dropdown className="d-block d-sm-none">
      <Dropdown.Toggle className="toggle">
        <span class="line-toggle"></span>
        <span class="line-toggle"></span>
        <span class="line-toggle"></span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <ul>
          <li>
            <Link
              href=""
              to="WhyChooseUs"
              spy={true}
              smooth={true}
              duration={500}
            >
              WHY US
            </Link>
          </li>
          <li>
            <a href="tel:+12345678899">CALL</a>
          </li>
          <li>
            <Link
              href=""
              to="ContactUs"
              spy={true}
              smooth={true}
              duration={500}
            >
              TRIAL PACK
            </Link>
          </li>
          <li>
            <Link
              href=""
              to="ContactUs"
              spy={true}
              smooth={true}
              duration={500}
            >
              REACH US
            </Link>
          </li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MobileMenu;
