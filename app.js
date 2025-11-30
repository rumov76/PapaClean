// PapaClean - logique principale

const CREATION_DATE = "2025-11-25";
const STORAGE_KEY = "papaclean_tasks_v1";

const INITIAL_TASKS = [
  {
    "id": "Cp_draps",
    "room": "chambre parents",
    "roomCode": "Cp",
    "name": "draps",
    "duration": 10,
    "frequencyDays": 21
  },
  {
    "id": "Cp_aspirateur",
    "room": "chambre parents",
    "roomCode": "Cp",
    "name": "aspirateur",
    "duration": 10,
    "frequencyDays": 14
  },
  {
    "id": "Cp_poussière",
    "room": "chambre parents",
    "roomCode": "Cp",
    "name": "poussière",
    "duration": 20,
    "frequencyDays": 84
  },
  {
    "id": "Cs_draps",
    "room": "chambre Simon",
    "roomCode": "Cs",
    "name": "draps",
    "duration": 10,
    "frequencyDays": 21
  },
  {
    "id": "Cs_aspirateur",
    "room": "chambre Simon",
    "roomCode": "Cs",
    "name": "aspirateur",
    "duration": 10,
    "frequencyDays": 14
  },
  {
    "id": "Cs_poussière",
    "room": "chambre Simon",
    "roomCode": "Cs",
    "name": "poussière",
    "duration": 20,
    "frequencyDays": 84
  },
  {
    "id": "Cn_draps",
    "room": "chambre Noémi",
    "roomCode": "Cn",
    "name": "draps",
    "duration": 10,
    "frequencyDays": 21
  },
  {
    "id": "Cn_aspirateur",
    "room": "chambre Noémi",
    "roomCode": "Cn",
    "name": "aspirateur",
    "duration": 10,
    "frequencyDays": 14
  },
  {
    "id": "Cn_poussière",
    "room": "chambre Noémi",
    "roomCode": "Cn",
    "name": "poussière",
    "duration": 20,
    "frequencyDays": 84
  },
  {
    "id": "Cu_four",
    "room": "cuisine",
    "roomCode": "Cu",
    "name": "four",
    "duration": 10,
    "frequencyDays": 364
  },
  {
    "id": "Cu_tiroir",
    "room": "cuisine",
    "roomCode": "Cu",
    "name": "tiroir",
    "duration": 20,
    "frequencyDays": 168
  },
  {
    "id": "Cu_frigo",
    "room": "cuisine",
    "roomCode": "Cu",
    "name": "frigo",
    "duration": 20,
    "frequencyDays": 84
  },
  {
    "id": "Cu_aspirateur",
    "room": "cuisine",
    "roomCode": "Cu",
    "name": "aspirateur",
    "duration": 10,
    "frequencyDays": 14
  },
  {
    "id": "Cu_évier",
    "room": "cuisine",
    "roomCode": "Cu",
    "name": "évier",
    "duration": 10,
    "frequencyDays": 28
  },
  {
    "id": "Cu_bouche_aération",
    "room": "cuisine",
    "roomCode": "Cu",
    "name": "bouche aération",
    "duration": 10,
    "frequencyDays": 168
  },
  {
    "id": "Sdb_aspirateur",
    "room": "salle de bain",
    "roomCode": "Sdb",
    "name": "aspirateur",
    "duration": 10,
    "frequencyDays": 14
  },
  {
    "id": "Sdb_baignoire",
    "room": "salle de bain",
    "roomCode": "Sdb",
    "name": "baignoire",
    "duration": 20,
    "frequencyDays": 28
  },
  {
    "id": "Sdb_lavabo",
    "room": "salle de bain",
    "roomCode": "Sdb",
    "name": "lavabo",
    "duration": 10,
    "frequencyDays": 28
  },
  {
    "id": "Sdb_sol",
    "room": "salle de bain",
    "roomCode": "Sdb",
    "name": "sol",
    "duration": 10,
    "frequencyDays": 168
  },
  {
    "id": "Sdb_plafond",
    "room": "salle de bain",
    "roomCode": "Sdb",
    "name": "plafond",
    "duration": 20,
    "frequencyDays": 168
  },
  {
    "id": "Sdb_bouche_aération",
    "room": "salle de bain",
    "roomCode": "Sdb",
    "name": "bouche aération",
    "duration": 10,
    "frequencyDays": 168
  },
  {
    "id": "T_cuvette",
    "room": "toilettes",
    "roomCode": "T",
    "name": "cuvette",
    "duration": 10,
    "frequencyDays": 14
  },
  {
    "id": "T_lavabo",
    "room": "toilettes",
    "roomCode": "T",
    "name": "lavabo",
    "duration": 10,
    "frequencyDays": 28
  },
  {
    "id": "T_aspirateur",
    "room": "toilettes",
    "roomCode": "T",
    "name": "aspirateur",
    "duration": 10,
    "frequencyDays": 14
  },
  {
    "id": "T_sol",
    "room": "toilettes",
    "roomCode": "T",
    "name": "sol",
    "duration": 10,
    "frequencyDays": 168
  },
  {
    "id": "T_bouche_aération",
    "room": "toilettes",
    "roomCode": "T",
    "name": "bouche aération",
    "duration": 10,
    "frequencyDays": 168
  },
  {
    "id": "H_aspirateur",
    "room": "hall",
    "roomCode": "H",
    "name": "aspirateur",
    "duration": 10,
    "frequencyDays": 14
  },
  {
    "id": "H_sol",
    "room": "hall",
    "roomCode": "H",
    "name": "sol",
    "duration": 10,
    "frequencyDays": 168
  },
  {
    "id": "S_aspirateur",
    "room": "salon",
    "roomCode": "S",
    "name": "aspirateur",
    "duration": 10,
    "frequencyDays": 14
  },
  {
    "id": "S_sol",
    "room": "salon",
    "roomCode": "S",
    "name": "sol",
    "duration": 10,
    "frequencyDays": 168
  },
  {
    "id": "S_poussière",
    "room": "salon",
    "roomCode": "S",
    "name": "poussière",
    "duration": 20,
    "frequencyDays": 84
  },
  {
    "id": "S_plantes",
    "room": "salon",
    "roomCode": "S",
    "name": "plantes",
    "duration": 10,
    "frequencyDays": 2
  },
  {
    "id": "R_aspirateur",
    "room": "réduit",
    "roomCode": "R",
    "name": "aspirateur",
    "duration": 10,
    "frequencyDays": 14
  },
  {
    "id": "R_sol",
    "room": "réduit",
    "roomCode": "R",
    "name": "sol",
    "duration": 10,
    "frequencyDays": 168
  },
  {
    "id": "B_plantes",
    "room": "balcon",
    "roomCode": "B",
    "name": "plantes",
    "duration": 10,
    "frequencyDays": 2
  },
  {
    "id": "B_aspirateur",
    "room": "balcon",
    "roomCode": "B",
    "name": "aspirateur",
    "duration": 10,
    "frequencyDays": 14
  }
];

const ROOM_LABELS = {
  "Cp": "Ch. parents",
  "Cs": "Ch. Simon",
  "Cn": "Ch. Noémi",
  "Cu": "Cuisine",
  "Sdb": "Salle de bain",
  "T": "Toilettes",
  "H": "Hall",
  "S": "Salon",
  "R": "Réduit",
  "B": "Balcon"
};

let state = {
  view: "plan",           // "home" | "plan"
  tasks: [],
  selectedTaskId: null,
  selectedRoomCode: null
};

let pendingTaskId = null;

function getTodayISO() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(isoDate, days) {
  const [y, m, d] = isoDate.split("-").map(Number);
  const date = new Date(y, m - 1, d + days);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatFrenchDate(isoDate) {
  if (!isoDate) return "";
  const [y, m, d] = isoDate.split("-").map(Number);
  return `${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}.${y}`;
}

function computeStatus(task, todayIso) {
  const last = task.lastDone || CREATION_DATE;
  const deadline = addDays(last, task.frequencyDays);
  const today = todayIso || getTodayISO();
  const dDeadline = new Date(deadline);
  const dToday = new Date(today);
  const diffMs = dToday - dDeadline;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  let label, cssClass;
  if (diffDays <= 0) {
    label = "dans les temps";
    cssClass = "status-on-time";
  } else if (diffDays <= 28) {
    label = "en retard";
    cssClass = "status-late";
  } else {
    label = "très en retard";
    cssClass = "status-very-late";
  }

  return {
    label,
    cssClass,
    deadline,
    daysLate: diffDays
  };
}

// --- PERSISTENCE ---
function loadTasks() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return INITIAL_TASKS.map((t) => ({
        ...t,
        lastDone: CREATION_DATE
      }));
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      throw new Error("Format invalide");
    }

    const baseById = new Map(INITIAL_TASKS.map((t) => [t.id, t]));

    return parsed.map((stored) => {
      const base = baseById.get(stored.id) || {};
      return {
        ...base,
        ...stored
      };
    });
  } catch (e) {
    console.warn("PapaClean: impossible de charger les données, réinitialisation.", e);
    return INITIAL_TASKS.map((t) => ({
      ...t,
      lastDone: CREATION_DATE
    }));
  }
}

function saveTasks() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks));
  } catch (e) {
    console.warn("PapaClean: impossible d'enregistrer les données.", e);
  }
}

function setView(view, options = {}) {
  state.view = view;
  if (options.selectedRoomCode !== undefined) {
    state.selectedRoomCode = options.selectedRoomCode;
  }
  render();
}

function withStatus(tasks, todayIso) {
  const today = todayIso || getTodayISO();
  return tasks.map((t) => {
    return {
      ...t,
      status: computeStatus(t, today)
    };
  });
}

function getOrderedTasks(tasksWithStatus) {
  const overdue = tasksWithStatus
    .filter((t) => t.status.daysLate > 0)
    .sort((a, b) => b.status.daysLate - a.status.daysLate);

  const onTime = tasksWithStatus
    .filter((t) => t.status.daysLate <= 0)
    .sort((a, b) => a.status.deadline.localeCompare(b.status.deadline));

  return overdue.concat(onTime);
}

function getRoomStatus(roomCode) {
  const today = getTodayISO();
  const tasksForRoom = state.tasks.filter((t) => t.roomCode === roomCode);
  if (!tasksForRoom.length) {
    return { label: "Aucune tâche", cssClass: "empty" };
  }
  const withSt = tasksForRoom.map((t) => computeStatus(t, today));
  const labels = withSt.map((s) => s.label);
  if (labels.includes("très en retard")) {
    return { label: "très en retard", cssClass: "status-very-late" };
  }
  if (labels.includes("en retard")) {
    return { label: "en retard", cssClass: "status-late" };
  }
  return { label: "dans les temps", cssClass: "status-on-time" };
}

function selectNextTask() {
  const today = getTodayISO();
  const tasksWithStatus = withStatus(state.tasks, today);
  const ordered = getOrderedTasks(tasksWithStatus);
  if (!ordered.length) return;

  if (!state.selectedTaskId) {
    state.selectedTaskId = ordered[0].id;
    return;
  }

  const currentIndex = ordered.findIndex((t) => t.id === state.selectedTaskId);
  const nextIndex = currentIndex === -1 || currentIndex === ordered.length - 1
    ? 0
    : currentIndex + 1;
  state.selectedTaskId = ordered[nextIndex].id;
}

function getSelectedTask() {
  const today = getTodayISO();
  const tasksWithStatus = withStatus(state.tasks, today);
  if (!state.selectedTaskId) {
    const ordered = getOrderedTasks(tasksWithStatus);
    return ordered.length ? ordered[0] : null;
  }
  const found = tasksWithStatus.find((t) => t.id === state.selectedTaskId);
  if (!found) {
    const ordered = getOrderedTasks(tasksWithStatus);
    return ordered.length ? ordered[0] : null;
  }
  return found;
}

function openModal(taskId) {
  pendingTaskId = taskId;
  const modal = document.getElementById("confirmModal");
  const label = document.getElementById("modalTaskName");
  const t = state.tasks.find((x) => x.id === taskId);
  label.textContent = t ? `${t.name} – ${t.room}` : "";
  modal.classList.remove("hidden");
}

function setupModal() {
  const modal = document.getElementById("confirmModal");
  const cancelBtn = document.getElementById("modalCancelBtn");
  const confirmBtn = document.getElementById("modalConfirmBtn");

  cancelBtn.addEventListener("click", () => {
    pendingTaskId = null;
    modal.classList.add("hidden");
  });

  confirmBtn.addEventListener("click", () => {
    if (pendingTaskId) {
      markTaskDone(pendingTaskId);
    }
    pendingTaskId = null;
    modal.classList.add("hidden");
  });
}

function markTaskDone(taskId) {
  const today = getTodayISO();
  state.tasks = state.tasks.map((t) =>
    t.id === taskId ? { ...t, lastDone: today } : t
  );
  saveTasks();
  render();
}

function renderHome(container) {
  const selected = getSelectedTask();

  if (!selected) {
    container.innerHTML = `
      <section class="card home-card">
        <div class="home-actions">
          <button class="btn primary" id="randomTaskBtn">Nouvelle tâche</button>
        </div>
        <p class="helper-text">Aucune tâche trouvée.</p>

        <div class="home-footer">
          <button class="btn link" id="backToPlanBtn">Retour à l'accueil</button>
        </div>
      </section>
    `;
  } else {
    const today = getTodayISO();
    const taskWithStatus = {
      ...selected,
      status: computeStatus(selected, today)
    };

    container.innerHTML = `
      <section class="card home-card">
        <div class="home-actions">
          <button class="btn primary" id="randomTaskBtn">Nouvelle tâche</button>
        </div>

        <div class="task-highlight">
          <h2 class="task-title">${taskWithStatus.name}</h2>
          <p class="task-room">${taskWithStatus.room}</p>

          <div class="task-meta">
            <span><strong>Temps&nbsp;:</strong> ${taskWithStatus.duration} min</span>
            <span><strong>Fréquence&nbsp;:</strong> tous les ${taskWithStatus.frequencyDays} jours</span>
            <span><strong>Dernière itération&nbsp;:</strong> ${formatFrenchDate(taskWithStatus.lastDone || CREATION_DATE)}</span>
            <span><strong>Délai&nbsp;:</strong> ${formatFrenchDate(taskWithStatus.status.deadline)}</span>
          </div>

          <span class="status-pill ${taskWithStatus.status.cssClass}">
            ${taskWithStatus.status.label}
          </span>

          <div class="home-task-actions">
            <button class="btn success" id="doneBtn">Tâche effectuée</button>
            <button class="btn secondary" id="nextTaskBtn">Autre tâche</button>
          </div>

          <p class="helper-text">
            Le bouton "Nouvelle tâche" propose la tâche la plus en retard (ou la plus urgente).
          </p>

          <div class="home-footer">
            <button class="btn link" id="backToPlanBtn">Retour à l'accueil</button>
          </div>
        </div>
      </section>
    `;
  }

  const randomBtn = container.querySelector("#randomTaskBtn");
  const doneBtn = container.querySelector("#doneBtn");
  const nextTaskBtn = container.querySelector("#nextTaskBtn");
  const backToPlanBtn = container.querySelector("#backToPlanBtn");

  if (randomBtn) {
    randomBtn.addEventListener("click", () => {
      selectNextTask();
      render();
    });
  }

  if (doneBtn) {
    doneBtn.addEventListener("click", () => {
      const selected = getSelectedTask();
      if (selected) {
        openModal(selected.id);
      }
    });
  }

  if (nextTaskBtn) {
    nextTaskBtn.addEventListener("click", () => {
      selectNextTask();
      render();
    });
  }

  if (backToPlanBtn) {
    backToPlanBtn.addEventListener("click", () => {
      setView("plan");
    });
  }
}

function renderPlan(container) {
  const selectedRoom = state.selectedRoomCode;

  const roomOrder = ["Cp", "Cs", "Cn", "Sdb", "T", "Cu", "S", "H", "R", "B"];

  const blocksHtml = roomOrder
    .map((code) => {
      const status = getRoomStatus(code);
      const label = ROOM_LABELS[code] || code;
      const extraClass = status.cssClass ? status.cssClass : "";
      return `
        <button class="plan-room ${extraClass}" data-room-code="${code}">
          <span class="room-code">${code}</span>
          <span class="room-name">${label}</span>
        </button>
      `;
    })
    .join("");

  const selectedRoomLabel = selectedRoom ? (ROOM_LABELS[selectedRoom] || selectedRoom) : null;

  let roomTasksHtml = "";
  if (selectedRoom) {
    const today = getTodayISO();
    const tasksForRoom = state.tasks
      .filter((t) => t.roomCode === selectedRoom)
      .map((t) => ({
        ...t,
        status: computeStatus(t, today)
      }));

    if (!tasksForRoom.length) {
      roomTasksHtml = `
        <div class="room-tasks">
          <h3>${selectedRoomLabel}</h3>
          <p class="helper-text">Aucune tâche pour cette pièce.</p>
        </div>
      `;
    } else {
      const items = tasksForRoom
        .map((t) => {
          return `
            <li class="room-task-item">
              <div class="room-task-header">
                <span class="room-task-name">${t.name}</span>
                <span class="status-pill ${t.status.cssClass}">${t.status.label}</span>
              </div>
              <div class="room-task-meta">
                Temps&nbsp;: ${t.duration} min · Fréquence&nbsp;: tous les ${t.frequencyDays} jours
                <br>
                Dernière&nbsp;: ${formatFrenchDate(t.lastDone || CREATION_DATE)} · Délai&nbsp;: ${formatFrenchDate(t.status.deadline)}
              </div>
              <div class="room-task-footer">
                <button class="btn success" data-done-task-id="${t.id}">Tâche effectuée</button>
              </div>
            </li>
          `;
        })
        .join("");

      roomTasksHtml = `
        <div class="room-tasks">
          <h3>${selectedRoomLabel}</h3>
          <ul class="room-tasks-list">
            ${items}
          </ul>
        </div>
      `;
    }
  } else {
    roomTasksHtml = `
      <div class="room-tasks">
        <h3>Choisis une pièce</h3>
        <p class="helper-text">
          Clique sur une pièce pour voir la liste des tâches assignées avec leur statut.
        </p>
      </div>
    `;
  }

  container.innerHTML = `
    <section class="card plan-layout">
      <div class="plan-header">
        <h2>Plan de l'appartement</h2>
      </div>
      <div class="plan-grid">
        ${blocksHtml}
      </div>
      ${roomTasksHtml}
    </section>
  `;

  const roomButtons = container.querySelectorAll(".plan-room");
  roomButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-room-code");
      state.selectedRoomCode = code;
      render();
    });
  });

  const doneButtons = container.querySelectorAll("[data-done-task-id]");
  doneButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-done-task-id");
      openModal(id);
    });
  });
}

function render() {
  const root = document.getElementById("app-root");
  const isPlan = state.view === "plan";

  root.innerHTML = `
    <section class="card hero-card">
      <div class="hero-header">
        <div class="hero-title-block">
          <h2 class="hero-title">Ton plan ménage pour l'appart</h2>
          <p class="hero-subtitle">
            PapaClean t'aide à savoir quoi faire, où et quand, sans te prendre la tête.
          </p>
        </div>
        <div class="hero-emoji" aria-hidden="true">🧽</div>
      </div>

    </section>

    <div class="tab-bar">
      <button class="tab ${isPlan ? "active" : ""}" id="tab-plan">Plan appartement</button>
      <button class="tab ${!isPlan ? "active" : ""}" id="tab-random">Tâche aléatoire</button>
    </div>

    <div id="view-container"></div>
  `;

  const viewContainer = document.getElementById("view-container");
  if (isPlan) {
    renderPlan(viewContainer);
  } else {
    renderHome(viewContainer);
  }

  const tabPlan = document.getElementById("tab-plan");
  const tabRandom = document.getElementById("tab-random");

  if (tabPlan) {
    tabPlan.addEventListener("click", () => {
      setView("plan");
    });
  }

  if (tabRandom) {
    tabRandom.addEventListener("click", () => {
      setView("home");
    });
  }
}

// Enregistrement du service worker pour PapaClean (PWA)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .catch((err) => {
        console.log("PapaClean service worker registration failed:", err);
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  state.tasks = loadTasks();
  setupModal();
  render();
});
