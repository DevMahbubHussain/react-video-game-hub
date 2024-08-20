import noImage from "../assets/no-image-placeholder.webp";
const getCroppedImageUrl = (url: string) => {
  if (url) {
    const target = "media/";
    const index = url.indexOf(target) + target.length; // 7
    return url.slice(0, index) + "crop/600/400/" + url.slice(index); // 7 + 4 = 11
  } else {
    return noImage;
  }
};

export default getCroppedImageUrl;
