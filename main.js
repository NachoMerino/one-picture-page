$(document).ready(() => {
  let numPict = 0;

  $('main').css(('margin-top'), $('.navbar').outerHeight());

  $.getJSON('https://picsum.photos/list', (data) => {
    objPictures = data;
    numPict = Object.keys(objPictures).length;
  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function loadPicts(rndNum) {
    $('body').css('background-image', 'url(https://picsum.photos/1920/1080?image=' + rndNum + ')');
  }

  const rnd = getRandomInt(0, 10);
  loadPicts(rnd);

  $('#reload').click(((e) => {
    e.preventDefault();
    const randomNumber = getRandomInt(0, numPict);
    loadPicts(randomNumber);
  }));

});
