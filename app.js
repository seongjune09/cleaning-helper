const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");

const modalContent = {
  general: {
    src: 'general.jpeg',
    text: '일반쓰레기는 잘 구분하고 분리배출합니다. 저희반은 비닐을 3일에 한번 씩 교체하고 구분하기 어려운 쓰레기는 반장, 부반장님께 물어봅니다.'
  },
  plastic: {
    src: 'plastic.jpeg',
    text: '플라스틱은 내용물을 비우고 라벨은 제거하여 일반쓰레기에 버립니다 가끔 내용물이 비워져있지 않아 내용물을 흘린다면 쓰레기통을 씻어야합니다.'
  },
  paper: {
    src: 'paper.jpeg',
    text: '주로 종이를 버리지만 택배상자 같은 박스류는 테이프를 제거한 후 분리수거 통 옆에 놔두면 분리수거 도우미가 같이 수거하여 버립니다.'
  },
  whiteboard: {
    src: 'whiteboard2.jpeg',
    text: '칠판은 다양한 포스터,공지사항,생일,홍보물 등을 개시하고있습니다. 바람에 날려 날아가지 않도록 자석으로 잘 고정해 정리합니다.'
  },
  duster: {
    src: 'duster2.jpeg',
    text: '밀대는 물을 충분히 적신 후 버튼을 누르고 아래로 내려 물을 빼줍니다. 가끔 앞 부분이 딱딱한 밀대는 물을 1분 정도 적셔주어야 합니다.'
  },
  mop1: {
    src: 'mop.jpeg',
    text: '대걸레는 물을 충분히 적신 후 통에 넣고 발로 밟아 물기를 완전히 빼줍니다 사용후에는 거꾸로 뒤집어서 잘 말려둡니다.'
  },
  refrigerator: {
    src: 'refrigerator2.jpeg',
    text: '냉장고에 음식물을 보관할 때에는 유통기한을 잘 엄수합니다. 공용이므로 이름을 잘 적고, 공간을 차지하지 않도록 합니다.'
  },
  ball: {
    src: 'ball1.jpeg',
    text: '사용한 배구공과 골프공은 원래 상태로 잘 정리해둡니다'
  },
  golf: {
    src: 'golf1.jpeg',
    text: '사용한 골프공은 골프공 상자에 넣어둡니다. 친구가 밝아서 다치지 않도록 사용후 바로바로 정리하여줍니다.'
  },
  minton: {
    src: 'minton1.jpeg',
    text: '배드민턴 채와 콕은 사용한 후 정리대에 잘 정리하도록 합니다.'
  },
  whiteborad: {
    src: 'whiteborad(gym)',
    text: '체육관에 배치되어 있는 칠판은 체육 선생님(설동상)이외에 사용하지 않도록 합니다. 사용이 적발되면 벌점을 받을 수도 있습니다.'
  }


};

// ✅ 이미지 클릭 시 모달창 열기
Object.keys(modalContent).forEach(key => {
  const element = document.querySelector(`.${key}`);
  if (element) {
    element.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = modalContent[key].src;
      modalText.textContent = modalContent[key].text;
    });
  }
});

// ✅ 모달 외부 클릭 시 닫기
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ✅ 이름 입력 후 다음 페이지 이동
function goToGreetingPage() {
  const name = document.getElementById("nameinput").value.trim();
  if (name) {
    location.href = `hello.html?name=${encodeURIComponent(name)}`;
  } else {
    alert("이름을 입력해주세요.");
  }
}

// ✅ Enter 키 처리
document.getElementById("nameinput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    goToGreetingPage();
  }
});