const fomrLove = document.querySelector('.form-love');
const showErrow = document.querySelectorAll('.show-errow');
const inputvalue = document.querySelectorAll('.form-control');

fomrLove.addEventListener('submit', (e) => {
  e.preventDefault();
  let obj = [];
  inputvalue.forEach((item, index) => {
    console.log(item.type);
    const value = item.value;
    if (value.trim() === '') {
      obj.fullName = 'Vui lòng nhập mã đơn hàng';
      obj.password = 'Vui lòng nhập email / số điện thoại';
      showErrow[index].textContent = obj.fullName;
      if (item.type == 'password') {
        showErrow[index].textContent = obj.password;
      }
    }
  });
});
inputvalue.forEach((item, index) => {
  item.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value) {
      showErrow[index].textContent = '';
    }
  });
});
