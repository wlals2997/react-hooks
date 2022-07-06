export const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
      loading: true,
      error: null,
      data: null,
    });
    const [trigger, setTrigger] = useState(0);
    if (!opts.url) {
      return;
    }
    const refetch = () => {
      setState({
        ...state,
        loading: true,
      });
      setTrigger(Date.now()); // 현재 시각으로 state를 업데이트해서 리렌더링
    };
    // trigger가 업데이트 될 때마다 실행
    useEffect(() => {
      axiosInstance(opts)
        .then((data) => {
          setState({
            ...state,
            loading: false,
            data,
          });
        })
        .catch((error) => {
          setState({ ...state, loading: false, error });
        });
    }, [trigger]);
    return { ...state, refetch };
  };