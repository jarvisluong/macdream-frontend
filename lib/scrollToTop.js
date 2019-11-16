import Router from "next/router";
let hasAttachedRouteListener = false;

export function scrollToTop() {
  // Only actually attach once
  if (hasAttachedRouteListener) {
    return;
  }
  hasAttachedRouteListener = true;

  // This event fires before the incoming route is loaded or rendered,
  // so by resetting the viewport without animation at this point we avoid
  // the incoming route getting the incorrect viewport at any point.
  const handleRouteChange = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  };

  Router.events.on("routeChangeComplete", handleRouteChange);
}
