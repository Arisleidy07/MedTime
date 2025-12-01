// ========================================
// MEDICATIONS MANAGEMENT
// ========================================

function renderMedications() {
  const medicationsList = document.getElementById("medicationsList");

  if (!medicationsList) return;

  medicationsList.innerHTML = "";

  const activeMedications = getMedications().filter((med) => !med.taken);

  if (activeMedications.length === 0) {
    checkEmptyStates();
    return;
  }

  activeMedications.forEach((medication) => {
    const card = createMedicationCard(medication);
    medicationsList.appendChild(card);
  });
}

function createMedicationCard(medication) {
  const card = document.createElement("div");
  card.className = "medication-card";

  const frequencyLabels = {
    diaria: "Diaria",
    "cada-4-horas": "Cada 4 horas",
    "cada-6-horas": "Cada 6 horas",
    "cada-8-horas": "Cada 8 horas",
    "cada-12-horas": "Cada 12 horas",
    "dia-por-medio": "Día por medio",
    "lunes-a-viernes": "Lunes a Viernes",
    "fines-de-semana": "Fines de semana",
    "segun-necesidad": "Según necesidad",
  };

  const frequencyLabel =
    frequencyLabels[medication.frequency] || medication.frequency;

  card.innerHTML = `
    <div class="medication-header">
      <h3 class="medication-name">${medication.name}</h3>
      <span class="medication-status pending">Pendiente</span>
    </div>
    <div class="medication-info">
      <div class="medication-info-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        <span>Dosis: ${medication.dose}</span>
      </div>
      <div class="medication-info-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        <span>Horario: ${medication.schedule}</span>
      </div>
      <div class="medication-info-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span>Frecuencia: ${frequencyLabel}</span>
      </div>
      ${
        medication.notes
          ? `
        <div class="medication-info-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
          <span>${medication.notes}</span>
        </div>
      `
          : ""
      }
    </div>
    <div class="medication-actions">
      <button class="btn-take" onclick="markAsTaken(${medication.id})">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span>Tomado</span>
      </button>
      <button class="btn-delete" onclick="deleteMedication(${medication.id})">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </button>
    </div>
  `;

  return card;
}

function markAsTaken(medicationId) {
  const medications = getMedications();
  const medication = medications.find((med) => med.id === medicationId);

  if (!medication) return;

  const historyEntry = {
    id: Date.now(),
    medicationId: medication.id,
    name: medication.name,
    dose: medication.dose,
    schedule: medication.schedule,
    takenAt: new Date().toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  addToHistory(historyEntry);
  updateMedication(medicationId, { taken: true });

  renderMedications();
  renderHistory();
  checkEmptyStates();
  showSuccessMessage();
}

function deleteMedication(medicationId) {
  if (!confirm("¿Estás seguro de que quieres eliminar este medicamento?")) {
    return;
  }

  deleteMedicationById(medicationId);
  renderMedications();
  checkEmptyStates();
}
