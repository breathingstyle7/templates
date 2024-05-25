import main_logo_header from "../assets/images/main_logo.png";
import header_search from "../assets/images/header_search.png";
import main_logo_footer from "../assets/images/main_logo.png";

const imgRef = [
  {
    src: main_logo_header,
    alt: "some img",
    id: "1",
  },
  {
    src: header_search,
    alt: "some img",
    id: "2",
  },
  {
    src: main_logo_footer,
    alt: "some img",
    id: "3",
  },
];

function addImg(imgArr) {
  imgArr.forEach(({ src, alt, id }) => {
    document.getElementById(id).src = src;
    document.getElementById(id).alt = alt;
  });
}

addImg(imgRef);
