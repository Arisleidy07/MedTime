// ========================================
// LOCAL STORAGE MANAGEMENT
// ========================================

const STORAGE_KEYS = {
  MEDICATIONS: "medtime_medications",
  HISTORY: "medtime_history",
};

let medications = [];
let history = [];

function loadFromLocalStorage() {
  const storedMedications = localStorage.getItem(STORAGE_KEYS.MEDICATIONS);
  const storedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);

  medications = storedMedications ? JSON.parse(storedMedications) : [];
  history = storedHistory ? JSON.parse(storedHistory) : [];
}

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEYS.MEDICATIONS, JSON.stringify(medications));
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
}

function getMedications() {
  return medications;
}

function getHistory() {
  return history;
}

function addMedication(medication) {
  medications.push(medication);
  saveToLocalStorage();
}

function updateMedication(id, updates) {
  const index = medications.findIndex((m) => m.id === id);
  if (index !== -1) {
    medications[index] = { ...medications[index], ...updates };
    saveToLocalStorage();
  }
}

function deleteMedicationById(id) {
  medications = medications.filter((m) => m.id !== id);
  saveToLocalStorage();
}

function addToHistory(entry) {
  history.unshift(entry);
  saveToLocalStorage();
}
