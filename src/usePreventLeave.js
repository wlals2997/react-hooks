export const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = ""; //기본적으로 넣어줘야한다
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
  // // beforeunload 이벤트 리스너로 listener 지정
    const disablePrevent = () =>
      window.removeEventListener("beforeunload", listener); // beforeunload 이벤트 제거
    return { enablePrevent, disablePrevent }; //두 함수를 return
  };