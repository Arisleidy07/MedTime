// ========================================
// FORM & MODAL MANAGEMENT
// ========================================

function setupFormHandlers() {
  const addMedicationBtn = document.getElementById("addMedicationBtn");
  if (addMedicationBtn) {
    addMedicationBtn.addEventListener("click", openModal);
  }

  const closeModalBtn = document.getElementById("closeModal");
  const cancelBtn = document.getElementById("cancelBtn");
  const modalOverlay = document.getElementById("modalOverlay");

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  const medicationForm = document.getElementById("medicationForm");
  if (medicationForm) {
    medicationForm.addEventListener("submit", handleFormSubmit);
  }

  setupCustomInputs();
}

function setupCustomInputs() {
  const doseSelect = document.getElementById("dose");
  const customDoseInput = document.getElementById("customDose");

  if (doseSelect && customDoseInput) {
    doseSelect.addEventListener("change", () => {
      if (doseSelect.value === "personalizada") {
        customDoseInput.style.display = "block";
        customDoseInput.required = true;
      } else {
        customDoseInput.style.display = "none";
        customDoseInput.required = false;
      }
    });
  }

  const scheduleSelect = document.getElementById("schedule");
  const customScheduleInput = document.getElementById("customSchedule");

  if (scheduleSelect && customScheduleInput) {
    scheduleSelect.addEventListener("change", () => {
      if (scheduleSelect.value === "personalizado") {
        customScheduleInput.style.display = "block";
        customScheduleInput.required = true;
      } else {
        customScheduleInput.style.display = "none";
        customScheduleInput.required = false;
      }
    });
  }
}

function openModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  const medicationForm = document.getElementById("medicationForm");

  if (modalOverlay) {
    modalOverlay.classList.add("show");
  }

  if (medicationForm) {
    medicationForm.reset();
    document.getElementById("customDose").style.display = "none";
    document.getElementById("customSchedule").style.display = "none";
  }
}

function closeModal() {
  const modalOverlay = document.getElementById("modalOverlay");

  if (modalOverlay) {
    modalOverlay.classList.remove("show");
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  let doseValue = formData.get("dose");
  if (doseValue === "personalizada") {
    doseValue = formData.get("customDose");
  }

  let scheduleValue = formData.get("schedule");
  if (scheduleValue === "personalizado") {
    scheduleValue = formData.get("customSchedule");
  }

  if (!formData.get("name") || !doseValue || !scheduleValue) {
    alert("Por favor completa todos los campos requeridos");
    return;
  }

  const medication = {
    id: Date.now(),
    name: formData.get("name"),
    dose: doseValue,
    schedule: scheduleValue,
    frequency: formData.get("frequency") || "diaria",
    notes: formData.get("notes") || "",
    taken: false,
    createdAt: new Date().toISOString(),
  };

  addMedication(medication);
  renderMedications();
  closeModal();
  checkEmptyStates();
}
