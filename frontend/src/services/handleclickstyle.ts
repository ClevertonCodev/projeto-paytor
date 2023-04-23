 function handleClickStyle (event: any){
    const input = event.currentTarget;
    const label = input.previousElementSibling as HTMLLabelElement;
    if (input.value.length > 0) {
        label.classList.add('volume');
        return 
    } 
    
     label.classList.remove('volume');
    
  }

export default handleClickStyle