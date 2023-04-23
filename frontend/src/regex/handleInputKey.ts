function handleInputkey(event: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLTextAreaElement>) {
    const input = event.currentTarget;
    if (/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

export default  handleInputkey