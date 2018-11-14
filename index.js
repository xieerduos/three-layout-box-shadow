let left = document.querySelector('.left');
let closeBtn = document.querySelector('.close');
let main = document.querySelector('main');
let content = document.querySelector('.content');
main.style.borderRightColor = '#fff';

console.log('left.style.display :', left.style.display);
if (left.style.display === 'block') {
  main.style.position = 'relative';
  main.style.left = '-5px';
}
closeBtn.onclick = event => {
  // show
  if (left.style.display === 'block') {
    main.style.position = 'relative';
    main.style.borderRightColor = '#ccc';
    main.style.left = '0';
  } else {
    // close
    main.style.position = 'relative';
    main.style.left = '-5px';
    main.style.borderRightColor = '#fff';
  }
  let leftDisplay = left.style.display;
  left.style.display = leftDisplay === 'none' ? 'block' : 'none';
};
// main.style.width = main.offsetWidth + '15px';
