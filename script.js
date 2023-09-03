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

const data = menu;

function autocomplete(man, seq) {
  const autoComplete = `
  <li>
    ${man}
    <div class="autocomplete-container" id="container_${seq}">
      <input type="text" class="autocomplete-input" id="input_${seq}" oninput="inputComplete(${seq}, this)" placeholder="메뉴를 선택하세요">
      <div id="result_${seq}" class="autocomplete-results"></div>
      <button id="addBtn_${seq}" class="add-button" onclick="addRow(${seq})">+</button>
    </div>
  </li>
  `;

  return autoComplete;
}

function addRow(seq) {
  $(`#addBtn_${seq}`).before(`
        <input type="text" class="autocomplete-input" id="input_${seq}_${seq}" oninput="inputComplete('${seq}_${seq}', this)" placeholder="메뉴를 선택하세요">
        <div id="result_${seq}_${seq}" class="autocomplete-results"></div>
  `);
}

function inputComplete(seq, element) {
  const value = $(element).val();
  $(`#result_${seq}`).empty();

  if (value) {
    const matchedData = $.grep(data, function (item) {
      return item.name.includes(value);
    });

    $.each(matchedData, function (index, item) {
      const div = $('<div>').text(`${item.name}, ${item.price}`);
      $(`#result_${seq}`).append(div);
    });

    $(`#result_${seq}`).show();
    $(`#result_${seq}`).on('click', 'div', function () {
      $(`#input_${seq}`).val($(this).text());
      $(`#result_${seq}`).empty();
    });
  } else {
    $(`#result_${seq}`).empty();
  }
}

function makeList() {
  broList.forEach((bro, index) => {
    $('#sortableList').append(autocomplete(bro, index));
  });
}

$(document).ready(function () {
  makeList();

  $(document).on('click', function (event) {
    const thisId = $(event.target).attr('id');
    if (!thisId || thisId.indexOf('input') === -1) {
      $('[id^=result]').empty();
    }
  });
});
