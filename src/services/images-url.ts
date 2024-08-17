const getCroppedImageUrl = (url: string) => {
  if (url) {
    const target = "media/";
    const index = url.indexOf(target) + target.length; // 7
    return url.slice(0, index) + "crop/600/400/" + url.slice(index); // 7 + 4 = 11
  }
};

export default getCroppedImageUrl;
