export const getOriginPath = (isHashRouter = true) => {
  const { origin } = window.location;

  if (isHashRouter) {
    return `${origin}/#`;
  }

  return origin;
};
