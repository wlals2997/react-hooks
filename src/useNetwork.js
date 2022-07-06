export const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine); // true 또는 false 값
    const handleChange = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    };
    useEffect(() => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
      () => { //componentWillUnMount 일 때 remove 실행
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
      };
    }, []);
    return status;
  };