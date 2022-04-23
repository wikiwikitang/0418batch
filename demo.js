const btn = document.getElementById('test-id');
btn.onclick = () => {
  debugger;
  console.log('This is a conflict');
  alert('This is a Test');
};

// btn.addEventListener('click', () => {
//   alert('This is a Test');
// });
