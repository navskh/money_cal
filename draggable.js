new Sortable(sortableList, {
  group: 'shared',
  animation: 150,
  swapThreshold: 0.0,
  forceFallback: true,
  scroll: false,
  onEnd(evt) {
    const draggedEl = evt.item;

    let closestItem = null;
    let closestDistance = Infinity;

    // 모든 항목을 순회하면서 마우스 위치와의 거리를 계산
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

    console.log(closestItem);

    if (closestItem && closestItem !== draggedEl) {
      closestItem.innerHTML =
        draggedEl.textContent + '<br> ' + closestItem.innerHTML;
      draggedEl.remove();
    }
  },
});
