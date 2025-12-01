// ========================================
// HISTORY MANAGEMENT
// ========================================

function renderHistory() {
  const historyList = document.getElementById("historyList");

  if (!historyList) return;

  historyList.innerHTML = "";

  const historyData = getHistory();

  if (historyData.length === 0) {
    checkEmptyStates();
    return;
  }

  historyData.forEach((item) => {
    const historyItem = createHistoryItem(item);
    historyList.appendChild(historyItem);
  });
}

function createHistoryItem(item) {
  const div = document.createElement("div");
  div.className = "history-item";

  div.innerHTML = `
    <div class="history-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    </div>
    <div class="history-details">
      <div class="history-name">${item.name}</div>
      <div class="history-dose">${item.dose} - ${item.schedule}</div>
    </div>
    <div class="history-time">${item.takenAt}</div>
  `;

  return div;
}
