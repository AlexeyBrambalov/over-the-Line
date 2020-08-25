import React from "react";
import PropTypes from "prop-types";
import { Link, Element } from "react-scroll";
import artists from "../../assets/products.json";
import { classNamePicker } from "../../utils";

export const ArtistsPage = ({ category, setArtist }) => {
  let filteredArray = artists.filter((artist) =>
    artist.category.some((cat) => cat.hasOwnProperty(category))
  );

  return (
    <>
      <Element name="artist" className="element">
        <div className="artist-page">
          <div className="artists-main d-flex justify-content-center align-items-center">
            {category &&
              filteredArray.map((artist, index) => (
                <Link
                  onClick={(e) => setArtist(artist)}
                  className="bubbles-link-artists"
                  activeClass="active"
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1500}
                  key={index}
                >
                  {console.log(artist.category["acting"])}
                  <div className={classNamePicker(category)}>{artist.name}</div>
                </Link>
              ))}
          </div>
        </div>
      </Element>
    </>
  );
};

ArtistsPage.propTypes = {
  category: PropTypes.string,
};
