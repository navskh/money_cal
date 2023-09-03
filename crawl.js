let thisList2 = [];
document.querySelectorAll('li[class="E2jtL yxVGX"]').forEach(ele => {
  let thisEle = {};
  const thisPrice = ele.querySelector('div[class="GXS1X"]').innerText;
  const thisName = ele.querySelector('div[class="yQlqY"]').innerText;

  thisEle = {
    name: thisName,
    price: thisPrice,
  };

  thisList2.push(thisEle);

  console.log(JSON.stringify(thisList2));
});
