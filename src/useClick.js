export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
      if(typeof onClick==="function"){
        if (element.current) {
          element.current.addEventListener("click", onClick);
        }
      }
      return()=>{ // componentWillUnmount 일 때 실행하는 부분
        if(element.current){
          element.current.removeEventListener("click",onClick);
        }
      }
    },[]);
    return element;
  };