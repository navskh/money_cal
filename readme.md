정산 관련 서비스를 빠르게 만들어보자.

1. 매주 김가네 정산을 진행한다.
  일단, 김가네 메뉴가 json 파일로 저장이 되어 있어야 한다.

2. 그러면, 어떤 메뉴를 선택했을 때, 관련 금액이 나오면 되고
3. 또 메뉴가 종합이 되면, 총 메뉴 결과를 보여주면 된다.
4. 또 어떤 사람, 어떤 사람이 같이 메뉴를 고르기도 한다. (묶기 기능이 있어야 한다.)

기본 화면은 어때야 할까
일단 autocomplete 형식이면 좋겠다.

기본 사람 명단이 쭉 나와야 한다. 
사람 명단은 다음과 같다.
[임세범, 강민, 이상호, 이형호, 조일현, 이준우, 성영훈, 정석훈, 정명현, 이정현, 최진명, 김승우, 이성민, 장준형]

총 15명이고, 

15명 명단이 쭉 나온다. 
사람 이름 옆에는 + 버튼이 있어야 한다.

더하기 버튼을 누르면, 형제를 추가할 수 있다.
형제가 추가되면, 해당 형제가 갖고 있는 행은 삭제 된다.

그리고 메뉴를 선택할 수 있는 란이 있어야 한다.
이 역시 메뉴를 선택하고 + 버튼이 있어서 메뉴를 추가로 선택할 수 있어야 한다.

메뉴를 선택하면, 메뉴에 대한 금액이 나오고,

최종 메뉴 결산된 내역이 나와야 한다.

바뀔 때마다, localStorage에 저장하여 보여줘야한다.

