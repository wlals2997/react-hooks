export const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
      //useTabs를 사용할 때 두번째 매개변수를 주지 않거나 두번째 매개변수가 배열이 아니라면 return (에러페이지뜨지않게)
      return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };