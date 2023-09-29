new Sortable(sortableList, {
  group: 'shared',
  animation: 150,
  swapThreshold: 0.2,
  forceFallback: true,
  scroll: false,
  delay: 200, // 클릭 후 드래그 시작까지의 시간 (200ms)
  touchStartThreshold: 10, // 터치 디바이스에서 드래그 시작 최소 거리 (10px)
  onEnd(evt) {
    const draggedEl = evt.item;
    let closestItem = null;
    let closestDistance = Infinity;
    // // 모든 항목을 순회하면서 마우스 위치와의 거리를 계산
    sortableList.querySelectorAll('li').forEach(item => {
      const rect = item.getBoundingClientRect();
      let clientY;
      if (evt.originalEvent.touches && evt.originalEvent.touches.length) {
        clientY = evt.originalEvent.touches[0].clientY;
      } else if (
        evt.originalEvent.changedTouches &&
        evt.originalEvent.changedTouches.length
      ) {
        clientY = evt.originalEvent.changedTouches[0].clientY;
      } else {
        clientY = evt.originalEvent.clientY;
      }
      const distance = Math.abs(rect.top + rect.height / 2 - clientY);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestItem = item;
      }
    });
    if (closestItem && closestItem !== draggedEl) {
      mergeList(closestItem, draggedEl);
    }
  },
});

function mergeList(target, dragged) {
  const targetSeq = target.id.split('_')[1];
  const draggedSeq = dragged.id.split('_')[1];
  const targetBroName = target.querySelector(`#broName_${targetSeq}`).innerText;
  const draggedBroName = dragged.querySelector(
    `#broName_${draggedSeq}`,
  ).innerText;

  const dragObject = thisBroList.find(bro => bro.name === draggedBroName);
  const draggedMenu = dragObject.menu;
  const draggedPrice = dragObject.price;
  console.log(draggedMenu, draggedPrice);

  if (targetBroName === draggedBroName) return;
  else {
    thisBroList.forEach((bro, index) => {
      if (bro.name === targetBroName) {
        bro.name += `, ${draggedBroName}`;
        if (draggedMenu !== '') {
          bro.menu.push(...draggedMenu);
          bro.price.push(...draggedPrice);
        }
      }
    });
    thisBroList.splice(
      thisBroList.findIndex(bro => bro.name === draggedBroName),
      1,
    );

    makeList();

    console.log(thisBroList);
  }
}
