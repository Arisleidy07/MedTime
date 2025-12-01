// ========================================
// UI UTILITIES
// ========================================

function checkEmptyStates() {
  const medicationsList = document.getElementById("medicationsList");
  const emptyState = document.getElementById("emptyState");
  const historyList = document.getElementById("historyList");
  const emptyHistory = document.getElementById("emptyHistory");

  const activeMedications = getMedications().filter((med) => !med.taken);

  if (medicationsList && emptyState) {
    if (activeMedications.length === 0) {
      medicationsList.style.display = "none";
      emptyState.style.display = "block";
    } else {
      medicationsList.style.display = "grid";
      emptyState.style.display = "none";
    }
  }

  const historyData = getHistory();

  if (historyList && emptyHistory) {
    if (historyData.length === 0) {
      historyList.style.display = "none";
      emptyHistory.style.display = "block";
    } else {
      historyList.style.display = "flex";
      emptyHistory.style.display = "none";
    }
  }
}

function showSuccessMessage() {
  const successMsg = document.getElementById("successMsg");

  if (!successMsg) return;

  successMsg.classList.add("show");

  setTimeout(() => {
    successMsg.classList.remove("show");
  }, 3000);
}
