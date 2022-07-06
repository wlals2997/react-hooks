export const useConfirm=(message="",onConfirm,onCancel)=>{
    if(!onConfirm || typeof onConfirm !== "function"){//매개변수 onConfirm가 없거나 onConfirm이 함수가 아나라면 return 실행
      return;
    }
    if(!onCancel || typeof onCancel !== "function"){ //onCancle은 필수요소는 아님
      return;
    }
    const confirmAction=()=>{ //// confirm창의 응답에 따른 이벤트 실행 함수
    if(confirm(message)){//confirm function이 message를 가지고 있다면
      onConfirm();
    }else{
      onCancel();
    }
    }
    return confirmAction;
    }