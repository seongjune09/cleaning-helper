# 🏫 우리 학교 청소 도우미
<img width="2940" height="1662" alt="image" src="https://github.com/user-attachments/assets/60653be2-4ac2-46a6-939b-7a8ac9737f11" /> <br>


📅 2025.07.06 ~ 2025.07.16

교내 웹페이지 개발 대회에 출품한 작품으로, 기숙사 생활을 시작한 학생들이 청소 방법을 몰라 겪는 어려움을 해결하기 위해 기획한 웹 기반 <br> 청소 가이드 플랫폼입니다. 

클론 코딩이 아닌 자체 기획 및 디자인으로 순수 HTML, CSS, JavaScript만을 활용하여 개발했으며, 청소 장소별로 방법을 제공하여구나 쉽게 <br> 따라할 수 있도록 했습니다. 

실제 기숙사 생활에서 겪었던 경험을 바탕으로, 같은 고민을 가진 학우들에게 실질적인 도움을 주고자 제작했습니다.

---

# 기술적 구현 

### (1) 이벤트 처리 시스템

**클릭 이벤트**
- 버튼 클릭 시 `addEventListener('click')`를 활용한 페이지 전환 구현
- 모달창 열기/닫기 제어

**키보드 이벤트**
- 이름 입력 후 Enter 키 감지(`keypress` / `keydown`)로 즉시 다음 페이지 이동
- 사용자 편의성 향상을 위한 키보드 인터랙션

---

### (2) CSS 애니메이션 및 인터랙션

**Hover 효과**
- 청소 카드에 `:hover` 적용으로 시각적 피드백 제공
- `transition` 속성으로 부드러운 효과 구현

---

### (3) 모달 시스템
- 배경 딤 처리(`backdrop`)와 중앙 정렬 레이아웃
- 닫기 버튼 및 외부 클릭 시 모달 종료 기능
- `display` 또는 `opacity` 제어를 통한 표시/숨김 처리
```javascript
Object.keys(modalContent).forEach(key => {
  element.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = modalContent[key].src;
    modalText.textContent = modalContent[key].text;
  });
});
```

---

# ‼️ 트러블 슈팅

**문제 상황**
- 프로젝트 특성상 청소 구역별 가이드 이미지를 다수 사용했으나, 개발 초기 파일 관리 경험 부족으로 문제 발생
- 이미지 파일명에 일관된 네이밍 규칙이 없어 파일 검색 및 관리가 어려웠음
- 같은 청소 구역에 속한 이미지들을 폴더로 분류하지 않아 파일 구조가 복잡해졌음
- 이미지 경로 참조 시 파일을 찾는 데 시간이 소요되고 유지보수가 어려웠음

**해결 방법**
- 구역명_순서.확장자 형식으로 통일 (예: whiteboard_01.png)
- 소문자와 언더스코어(_) 사용으로 가독성 향상
- 순서를 나타내는 숫자를 01, 02 형태로 작성하여 정렬 용이

---

# 🍀 배운점 및 느낀 점
- CSS 레이아웃과 JavaScript 이벤트 처리에 대한 실무 경험을 쌓았습니다.특히 사용자 인터랙션 구현을 통해 동적 웹페이지 개발 역량을 향상시켰습니다. <br> 첫 개인 프로젝트로서 기획, 디자인, 개발 전 과정을 독립적으로 
  수행하며 문제 해결 능력을 키웠습니다. 실제 사용자의 니즈를 파악하고 솔루션을 구현하는 <br> 과정에서 사용자 중심 개발의 중요성을 체감했습니다.

---

# 기술 스택

<img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg" /><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg" /><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />

---

# [▶ 시연 영상 확인하기](https://www.youtube.com/watch?v=tt6ZB3-Vpd4)

