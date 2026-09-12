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

// Demo jobs (replace with crawler output later)
const demoJobs = [
  { title: "Biodefense Analyst", org: "Defense Lab", location: "EU", url: "#", category: "bio" },
  { title: "Chemical Safety Officer", org: "Industrial Plant", location: "Germany", url: "#", category: "chem" },
  { title: "Radiological Control Tech", org: "Nuclear Facility", location: "NL", url: "#", category: "rad" },
  { title: "Nuclear Security Analyst", org: "IAEA", location: "Vienna", url: "#", category: "nuc" },
  { title: "EOD Specialist", org: "Defense Contractor", location: "Global", url: "#", category: "exp" }
];

function renderJobs() {
  document.querySelectorAll(".job-list").forEach(list => {
    const cat = list.dataset.category;
    list.innerHTML = "";

    const jobs = cat === "all" ? demoJobs : demoJobs.filter(j => j.category === cat);

    jobs.forEach(job => {
      const card = document.createElement("div");
      card.className = "job-card";
      card.innerHTML = `
        <div class="job-title">${job.title}</div>
        <div class="job-meta">${job.org} · ${job.location}</div>
        <a href="${job.url}" target="_blank">View job</a>
      `;
      list.appendChild(card);
    });
  });
}

renderJobs();
