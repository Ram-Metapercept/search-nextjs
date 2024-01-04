import { useEffect } from "react";
import { useLocation } from "react-use";

const adjustTopDistance = () => {
  useEffect(() => {
    let location = useLocation();
    let path = location.href;
    console.log(path);
    if (path.includes("#")) {
      console.log("scrolled");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
};

export default adjustTopDistance;
