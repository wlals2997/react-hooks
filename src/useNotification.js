export const useNotification = (title, options) => {
    if (!("notification" in window)) {
      return;
    }
    const fireNotification=()=>{
   if(Notification.permission !=='granted'){//알림받기를 거부했다면
  Notification.requestPermission().then(permission =>{
    if(permission === "granted"){
      new Notification(title,options);
    }else{
      return;
    }
  })   //시스템 알람이 울리도록 권한을 요청할 때 사용하는 메소드
  }else{
      new Notification(title,options)
    }
  }
    return fireNotification;
  };
  