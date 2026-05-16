// ==================== 合并剧情数据 ====================
const storyData = {};
if (typeof storyChapter1 !== 'undefined') Object.assign(storyData, storyChapter1);
if (typeof storyChapter2 !== 'undefined') Object.assign(storyData, storyChapter2);
if (typeof storyChapter3 !== 'undefined') Object.assign(storyData, storyChapter3);

// ==================== DOM 元素 ====================
const bgm = document.getElementById('bgm');
const startBtn = document.getElementById('start-btn');
const dialogueText = document.getElementById('dialogue-text');
const dialogueBox = document.getElementById('dialogue-box');
const bgImage = document.getElementById('bg-image');
const charImage = document.getElementById('char-image');
const bagBtn = document.getElementById('bag-btn');
const bagModal = document.getElementById('bag-modal');
const bagCloseBtn = document.getElementById('bag-close-btn');
const bagItemList = document.getElementById('bag-item-list');
const bagCountSpan = document.getElementById('bag-count');

// ==================== 游戏状态 ====================
let gameStarted = false;
let currentNodeHasAutoNext = null;

const gameState = {
  currentNode: "start",
  attributes: { cultivation:0, honor:0, spirit:0, demon:0 },
  inventory: []
};

// ==================== 结局映射 ====================
const endingMap = {
  check_endings: function() {
    const st = gameState.attributes;
    if (st.demon >= 80 && gameState.inventory.includes("幻影镜")) return "ending_demon_lord";
    if (st.honor >= 60 && gameState.inventory.includes("狐族玉佩") && gameState.inventory.includes("幻影镜")) return "ending_harem";
    if (st.honor >= 50) return "ending_good_fly";
    if (st.demon > 50) return "ending_alone_demon";
    return "ending_alone_good";
  }
};

// ==================== 核心函数 ====================
function loadNode(nodeId) {
  if (nodeId === "check_endings") nodeId = endingMap.check_endings();
  const node = storyData[nodeId];
  if (!node) {
    dialogueText.textContent = "（剧情暂时告一段落，后续敬请期待……）";
    hideChoices(); currentNodeHasAutoNext = null; return;
  }
  gameState.currentNode = nodeId;
  if (node.bg) bgImage.src = node.bg;
  if (node.char) { charImage.src = node.char; charImage.style.display = "block"; }
  else { charImage.style.display = "none"; }
  dialogueText.textContent = node.text;
  if (node.effect) {
    for (let attr in node.effect) {
      if (gameState.attributes.hasOwnProperty(attr)) gameState.attributes[attr] += node.effect[attr];
    }
    updateAttributesDisplay();
  }
  if (node.gainItem) {
    gameState.inventory.push(node.gainItem);
    updateInventoryDisplay();
    dialogueText.textContent += `\n（获得道具：${node.gainItem}）`;
  }
  if (node.choices) { showChoices(node.choices); currentNodeHasAutoNext = null; }
  else if (node.next) { currentNodeHasAutoNext = node.next; }
  else { currentNodeHasAutoNext = null; }
}

function showChoices(choices) {
  dialogueBox.classList.add("has-choices");
  const container = document.createElement("div");
  container.id = "choices-container";
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (choice.effect) {
        for (let attr in choice.effect) {
          if (gameState.attributes.hasOwnProperty(attr)) gameState.attributes[attr] += choice.effect[attr];
        }
        updateAttributesDisplay();
      }
      const cont = document.getElementById("choices-container");
      if (cont) cont.remove();
      dialogueBox.classList.remove("has-choices");
      loadNode(choice.next);
    });
    container.appendChild(btn);
  });
  dialogueBox.appendChild(container);
}

function hideChoices() {
  const cont = document.getElementById("choices-container");
  if (cont) cont.remove();
  dialogueBox.classList.remove("has-choices");
}

function updateAttributesDisplay() {
  document.getElementById("cultivation-val").textContent = gameState.attributes.cultivation;
  document.getElementById("honor-val").textContent = gameState.attributes.honor;
  document.getElementById("spirit-val").textContent = gameState.attributes.spirit;
  document.getElementById("demon-val").textContent = gameState.attributes.demon;
}

function updateInventoryDisplay() {
  const count = gameState.inventory.length;
  bagCountSpan.textContent = count;
  bagItemList.innerHTML = count === 0 ? "空空如也" : gameState.inventory.map(item => `· ${item}`).join('<br>');
}

// ==================== 事件绑定 ====================
startBtn.addEventListener("click", () => {
  if (!gameStarted) {
    gameStarted = true;
    bgm.play().catch(e => console.log("BGM需交互"));
    startBtn.remove();
    loadNode("start");
  }
});
dialogueBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("choice-btn")) return;
  if (!gameStarted) return;
  if (dialogueBox.classList.contains("has-choices")) return;
  if (currentNodeHasAutoNext) loadNode(currentNodeHasAutoNext);
});
bagBtn.addEventListener("click", () => { bagModal.style.display = "flex"; });
bagCloseBtn.addEventListener("click", () => { bagModal.style.display = "none"; });
bagModal.addEventListener("click", (e) => { if (e.target === bagModal) bagModal.style.display = "none"; });

updateAttributesDisplay();
updateInventoryDisplay();