class Brother {
  constructor(name, menu, price) {
    this.name = name;
    this.menu = menu;
    this.price = price;
  }
}

function createBrother(name, menu, price) {
  return new Brother(name, menu, price);
}

const broList = [
  '임세범',
  '강민',
  '이상호',
  '이형호',
  '조일현',
  '이준우',
  '성영훈',
  '정석훈',
  '정명현',
  '이정현',
  '최진명',
  '김승우',
  '이성민',
  '장준형',
];

thisBroList = [];

function makeBroObject() {
  let returnObjectList = [];
  broList.forEach((bro, index) => {
    returnObjectList.push(createBrother(bro, [''], [0]));
  });

  return returnObjectList;
}

const data = menu;

function ListComponent(bro, seq) {
  const ListComponent = `
  <li id='list_${seq}'>
    <span id='broName_${seq}'>
    ${bro.name}
    </span>
    <div class="autocomplete-container" id="container_${seq}">
      ${AutoComplete(bro, seq)}
    </li>
  </div>
  `;

  return ListComponent;
}

function AutoComplete(bro, seq) {
  let autocomplete = '';
  bro.menu.forEach((menu, index) => {
    autocomplete += `
      <input 
        type="text" 
        class="autocomplete-input" 
        id="input_${seq}_${index}" 
        oninput="inputComplete('${seq}_${index}', this)" 
        value="${menu ? menu : ''}"
        placeholder="메뉴를 선택하세요"
      />
      <div id="result_${seq}_${index}" class="autocomplete-results"></div>
    `;
  });
  return autocomplete;
}

function inputComplete(idx, element) {
  const value = $(element).val();
  const seq = idx.split('_')[0];
  $(`#result_${idx}`).empty();

  if (value) {
    const matchedData = $.grep(data, function (item) {
      return item.name.includes(value);
    });

    $.each(matchedData, function (index, item) {
      const div = $('<div>').text(`${item.name}, ${item.price}`);
      div.on('click', function (e) {
        const thisMenu = $(this).text().split(', ')[0];
        const thisPrice = parseInt(
          $(this).text().split(', ')[1].replace(',', '').replace('원', ''),
        );
        const thisBro = $(`#broName_${seq}`).text().trim();
        updateBroList(thisBro, thisMenu, thisPrice, idx);

        $(`#input_${idx}`).val(thisMenu);
        $(`#result_${idx}`).empty();
      });
      $(`#result_${idx}`).append(div);
    });

    $(`#result_${idx}`).show();
  } else {
    $(`#result_${idx}`).empty();
  }
}

function updateBroList(target, menu, price, idx) {
  console.log(target, menu, price, idx);
  const thisIndex = idx.split('_')[0];
  const thisInputIndex = idx.split('_')[1];
  thisBroList[thisIndex].menu[thisInputIndex] = menu;
  thisBroList[thisIndex].price[thisInputIndex] = price;
  console.log(thisBroList);
}

function makeList() {
  $('#sortableList').empty();
  thisBroList.forEach((bro, index) => {
    $('#sortableList').append(ListComponent(bro, index));
  });
}

$(document).ready(function () {
  const initStore = JSON.parse(localStorage.getItem('broList'));
  console.log(initStore);
  if (initStore) {
    thisBroList = initStore;
  } else {
    thisBroList = makeBroObject();
  }
  makeList();

  $(document).on('click', function (event) {
    const thisId = $(event.target).attr('id');
    if (!thisId || thisId.indexOf('input') === -1) {
      $('[id^=result]').empty();
    }
  });
});
