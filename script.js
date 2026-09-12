// Tab switching
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;

    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".category-section").forEach(sec => {
      sec.classList.toggle("active", sec.id === target);
    });
  });
});

// Load jobs.json
async function loadJobs() {
  try {
    const response = await fetch("jobs.json");
    const jobs = await response.json();
    renderJobs(jobs);
  } catch (err) {
    console.error("Could not load jobs.json", err);
  }
}

// Render jobs
function renderJobs(jobs) {
  document.querySelectorAll(".job-list").forEach(list => {
    const cat = list.dataset.category;
    list.innerHTML = "";

    const filtered =
      cat === "all" ? jobs : jobs.filter(j => j.category === cat);

    if (filtered.length === 0) {
      list.innerHTML = "<p>No jobs available.</p>";
      return;
    }

    filtered.forEach(job => {
      const card = document.createElement("div");
      card.className = "job-card";
      card.innerHTML = `
        <div class="job-title">${job.title}</div>
        <div class="job-meta">${job.organization} · ${job.location}</div>
        <a class="job-link" href="${job.url}" target="_blank">View job</a>
      `;
      list.appendChild(card);
    });
  });
}

loadJobs();
