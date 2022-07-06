export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
      const {
        target: { value }
      } = e;
      let willUpdate = true;
      if (typeof validator === "function") {
        //validator 가 function 이 아니라 다른 타입이 들어오면 validator(value) 이 부분에서 타입에러 발생
        willUpdate = validator(value); //validator의 결과를 업데이트한다.
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };