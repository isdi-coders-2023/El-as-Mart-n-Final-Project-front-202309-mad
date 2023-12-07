export const makeImageURL = (publicID: string, height: number) => {
  const urlBase = 'http://res.cloudinary.com/djz7c5bdp/image/upload';
  const url = `${urlBase}/h_${height},c_fill,g_face,r_max/v1701292330/${publicID}`;
  return url;
};
