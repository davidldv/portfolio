const formData = new FormData();
formData.append('access_key', 'd5632d61-1862-461e-b1d6-079c3ee29b12');
formData.append('name', 'Test User');
formData.append('email', 'test@test.com');
formData.append('message', 'Hello World');
fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  body: formData
}).then(res => res.json()).then(console.log);
