export const getUrlPath = (location: any) => {
  const path = location.pathname.split("/");
  return path[path.length - 1];
};
