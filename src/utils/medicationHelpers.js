// Generate unique ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Add medication
export const addMedication = (medications, setMedications, data) => {
  const newMedication = {
    id: generateId(),
    ...data,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  setMedications([...medications, newMedication]);
  return newMedication;
};

// Edit medication
export const editMedication = (medications, setMedications, id, newData) => {
  const updated = medications.map((med) =>
    med.id === id ? { ...med, ...newData } : med
  );
  setMedications(updated);
};

// Delete medication
export const deleteMedication = (medications, setMedications, id) => {
  const filtered = medications.filter((med) => med.id !== id);
  setMedications(filtered);
};

// Mark as taken
export const markAsTaken = (
  medications,
  setMedications,
  history,
  setHistory,
  id
) => {
  const medication = medications.find((med) => med.id === id);
  if (!medication) return;

  // Update medication status
  const updated = medications.map((med) =>
    med.id === id
      ? { ...med, status: "taken", takenAt: new Date().toISOString() }
      : med
  );
  setMedications(updated);

  // Add to history
  const historyEntry = {
    id: generateId(),
    medicationId: id,
    medicationName: medication.name,
    dose: medication.dose,
    takenAt: new Date().toISOString(),
  };
  setHistory([historyEntry, ...history]);
};

// Get medications
export const getMedications = (medications) => {
  return medications;
};

// Get history
export const getHistory = (history) => {
  return history;
};

// Reset medication status (for daily reset)
export const resetMedicationStatus = (medications, setMedications, id) => {
  const updated = medications.map((med) =>
    med.id === id ? { ...med, status: "pending", takenAt: null } : med
  );
  setMedications(updated);
};
