const btn = document.querySelector("#btn");

// btn.addEventListener('click', function() {
//   alert('hello help man');
// });

//よりベターなのは関数を変数に入れて引数に持たせる方法
// const hello = function() {alert('hello help man');};

function hello() {
  alert("hello");
}

function changecolor() {
  this.style.color = 'red';
}

// btn.addEventListener('click', hello);
// btn.addEventListener('mouseenter', hello);
btn.addEventListener('click', changecolor);
