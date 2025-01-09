import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      let obj = document.getElementById("scroller");
      if (obj) {
        obj.scroll(0, 0);
      }
    } catch (err) {
      console.error(err);
    }
  }, [pathname]);

  return null;
}