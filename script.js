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

// 存档相关元素
const saveBtn = document.getElementById('save-btn');
const loadBtn = document.getElementById('load-btn');
const saveModal = document.getElementById('save-modal');
const loadModal = document.getElementById('load-modal');
const saveCloseBtn = document.getElementById('save-close-btn');
const loadCloseBtn = document.getElementById('load-close-btn');
const saveSlots = document.getElementById('save-slots');
const loadSlots = document.getElementById('load-slots');

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
    const inv = gameState.inventory;
    // 调整后的合理阈值
    if (st.demon >= 45 && inv.includes("幻影镜")) return "ending_demon_lord";
    if (st.honor >= 60 && inv.includes("天狐玉") && inv.includes("幻影镜")) return "ending_harem";
    if (st.honor >= 50) return "ending_good_fly";
    if (st.demon > 30) return "ending_alone_demon";
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

// ==================== 存档系统 ====================
function saveGame(slot) {
  const saveData = {
    slot: slot,
    timestamp: new Date().toLocaleString(),
    gameState: JSON.parse(JSON.stringify(gameState)),
    currentNode: gameState.currentNode,
    gameStarted: gameStarted,
  };
  localStorage.setItem(`xiuxian_save_${slot}`, JSON.stringify(saveData));
  alert(`存档 ${slot} 保存成功！`);
  renderSaveSlots();
}

function loadGame(slot) {
  const saveStr = localStorage.getItem(`xiuxian_save_${slot}`);
  if (!saveStr) {
    alert('该存档位为空。');
    return;
  }
  if (!confirm('确定要读取该存档吗？当前未保存的进度会丢失。')) return;

  const saveData = JSON.parse(saveStr);
  Object.assign(gameState, saveData.gameState);
  gameState.currentNode = saveData.currentNode;
  gameStarted = saveData.gameStarted;

  currentNodeHasAutoNext = null;
  hideChoices();

  updateAttributesDisplay();
  updateInventoryDisplay();

  if (gameStarted) {
    startBtn.style.display = 'none';
    dialogueBox.style.display = 'flex';
    loadNode(gameState.currentNode);
  } else {
    dialogueBox.style.display = 'flex';
    startBtn.style.display = 'block';
    dialogueText.textContent = '点击屏幕开始修仙之旅';
  }
  loadModal.style.display = 'none';
  alert('读档成功！');
}

function renderSaveSlots() {
  saveSlots.innerHTML = '';
  for (let i = 1; i <= 3; i++) {
    const saveStr = localStorage.getItem(`xiuxian_save_${i}`);
    const btn = document.createElement('button');
    btn.className = 'save-slot-btn';
    if (saveStr) {
      const data = JSON.parse(saveStr);
      btn.innerHTML = `存档 ${i} <span class="slot-time">${data.timestamp} - ${data.gameState.attributes.cultivation}修为</span>`;
    } else {
      btn.innerHTML = `存档 ${i} <span class="slot-time">空</span>`;
    }
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`覆盖存档 ${i}？`)) {
        saveGame(i);
        saveModal.style.display = 'none';
      }
    });
    saveSlots.appendChild(btn);
  }
}

function renderLoadSlots() {
  loadSlots.innerHTML = '';
  for (let i = 1; i <= 3; i++) {
    const saveStr = localStorage.getItem(`xiuxian_save_${i}`);
    const btn = document.createElement('button');
    btn.className = 'load-slot-btn';
    if (saveStr) {
      const data = JSON.parse(saveStr);
      btn.innerHTML = `存档 ${i} <span class="slot-time">${data.timestamp} - 修为${data.gameState.attributes.cultivation}</span>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        loadGame(i);
      });
    } else {
      btn.innerHTML = `存档 ${i} <span class="slot-time">空</span>`;
      btn.disabled = true;
    }
    loadSlots.appendChild(btn);
  }
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

// 背包
bagBtn.addEventListener("click", () => { bagModal.style.display = "flex"; });
bagCloseBtn.addEventListener("click", () => { bagModal.style.display = "none"; });
bagModal.addEventListener("click", (e) => { if (e.target === bagModal) bagModal.style.display = "none"; });

// 存档
saveBtn.addEventListener("click", () => {
  if (!gameStarted) {
    alert('游戏还没开始呢，先踏上仙途吧！');
    return;
  }
  renderSaveSlots();
  saveModal.style.display = "flex";
});
loadBtn.addEventListener("click", () => {
  renderLoadSlots();
  loadModal.style.display = "flex";
});
saveCloseBtn.addEventListener("click", () => { saveModal.style.display = "none"; });
loadCloseBtn.addEventListener("click", () => { loadModal.style.display = "none"; });
saveModal.addEventListener("click", (e) => { if (e.target === saveModal) saveModal.style.display = "none"; });
loadModal.addEventListener("click", (e) => { if (e.target === loadModal) loadModal.style.display = "none"; });

// 初始显示
updateAttributesDisplay();
updateInventoryDisplay();