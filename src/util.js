// Change image url to small size image url
export const reduceImage = (imgPath, size) => {
  const updatedImgPath = imgPath.match(/media\/screenshots/)
    ? imgPath.replace('media/screenshots', `media/resize/${size}/-/screenshots`)
    : imgPath.replace('media/games', `media/resize/${size}/-/games`);

  return updatedImgPath;
};
