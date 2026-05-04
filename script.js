/* ============================================
   ABRAR HASAN — PORTFOLIO LOGIC
   ============================================ */

// ---------- DATA ----------
const courses = [
  { code: "CSE", name: "Machine Learning", tag: "AI / Data", desc: "Supervised, unsupervised, and deep methods — with hands-on model building." },
  { code: "SWE", name: "Software Engineering", tag: "Process", desc: "Requirements, architecture, agile methodology, and software lifecycle." },
  { code: "CSE", name: "Structured Programming Lab", tag: "Foundations", desc: "C programming fundamentals — control flow, functions, pointers, memory." },
  { code: "MAT", name: "Discrete Mathematics", tag: "Theory", desc: "Logic, sets, graphs, combinatorics — the mathematics under computer science." },
  { code: "CSE", name: "Data Structures", tag: "Foundations", desc: "Arrays, lists, trees, graphs, hashing — choosing the right tool for each problem." },
  { code: "CSE", name: "Algorithms", tag: "Theory", desc: "Design and analysis: greedy, DP, divide-and-conquer, complexity." },
  { code: "CSE", name: "Object-Oriented Programming", tag: "Programming", desc: "Encapsulation, inheritance, polymorphism — designing with OOP principles." },
  { code: "CSE", name: "Computational Thinking & Problem Solving", tag: "Foundations", desc: "Decomposition, abstraction, pattern recognition — thinking like a computer scientist." },
  { code: "ICT", name: "ICT and Computer Application", tag: "General", desc: "Practical computing literacy and tools for non-CS students." }
];

const projects = [
  {
    name: "Safe Road · YOLOv4 Traffic Sign Detection",
    desc: "Two-part project: an Android app for live route monitoring and vehicle tracking, paired with a YOLOv4-trained traffic sign detector.",
    stack: ["Android", "YOLOv4", "Computer Vision"]
  },
  {
    name: "Modified Checkers · Minimax AI",
    desc: "An AI-powered multiplayer checkers game built with Pygame, featuring a minimax algorithm with adversarial search.",
    stack: ["Python", "Pygame", "Minimax"]
  },
  {
    name: "Mini Compiler",
    desc: "A working compiler that transforms a custom language into executable C — built from scratch with Flex and Bison.",
    stack: ["Flex", "Bison", "C"]
  },
  {
    name: "Tuition Finder iOS",
    desc: "An iOS app connecting students and tutors — search, apply, and manage tuition opportunities natively in Swift.",
    stack: ["Swift", "iOS"]
  },
  {
    name: "Stock Market Database",
    desc: "Oracle 10G Express database for stock holdings analysis — SQL queries for max prices, profit/loss, and ownership.",
    stack: ["Oracle", "SQL", "Database"]
  },
  {
    name: "Cardiac Recorder",
    desc: "A simple, friendly Android app to monitor heart rate, BMI, and blood pressure — synced to Firebase.",
    stack: ["Android", "Java", "Firebase"]
  },
  {
    name: "Railway Station Design",
    desc: "A modeled railway station rendered in OpenGL 3.3 — geometry, lighting, and shaders from scratch.",
    stack: ["OpenGL", "C++", "Graphics"]
  },
  {
    name: "Auto Irrigation & Water Tank System",
    desc: "An Arduino-based automated system using sensors and motors for irrigation and water tank refilling.",
    stack: ["Arduino", "Sensors", "Embedded"]
  },
  {
    name: "Stock Value Finder",
    desc: "An Android app that fetches live stock prices for renowned companies via API integration.",
    stack: ["Android", "Java", "API"]
  }
];

// ---------- INJECT COURSES ----------
const courseGrid = document.getElementById("courseGrid");
courses.forEach((c, i) => {
  const el = document.createElement("article");
  el.className = "course-card reveal";
  el.style.transitionDelay = (i * 0.04) + "s";
  el.innerHTML = `
    <span class="course-num">Course / ${String(i + 1).padStart(2, "0")}</span>
    <h3 class="course-name">${c.name}</h3>
    <span class="course-tag">${c.tag}</span>
    <p class="course-desc">${c.desc}</p>
  `;
  courseGrid.appendChild(el);
});

// ---------- INJECT PROJECTS ----------
const projectList = document.getElementById("projectList");
projects.forEach((p, i) => {
  const el = document.createElement("article");
  el.className = "project reveal";
  el.innerHTML = `
    <span class="project-num">${String(i + 1).padStart(2, "0")} —</span>
    <div class="project-content">
      <h3 class="project-name">${p.name}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-stack">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
    </div>
    <span class="project-arrow">→</span>
  `;
  projectList.appendChild(el);
});

// ---------- THEME TOGGLE ----------
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
root.setAttribute("data-theme", initialTheme);

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ---------- SCROLL REVEAL ----------
const revealEls = () => document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

const observeReveal = () => {
  revealEls().forEach(el => io.observe(el));
  // Auto-attach .reveal to common section content
  document.querySelectorAll(".section .display, .section .section-sub, .about-body, .stats-strip, .paper, .timeline-item, .contact-terminal, .contact-headline, .teaching-philosophy")
    .forEach(el => {
      if (!el.classList.contains("reveal")) {
        el.classList.add("reveal");
        io.observe(el);
      }
    });
};
observeReveal();

// ---------- STAT COUNTERS ----------
const animateStat = (el) => {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || "";
  const duration = 1600;
  const start = performance.now();
  const isFloat = target % 1 !== 0 || suffix === ".0";

  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const current = target * eased;
    el.textContent = isFloat ? current.toFixed(1) : Math.round(current).toLocaleString();
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = isFloat ? target.toFixed(1) : target.toLocaleString();
  };
  requestAnimationFrame(tick);
};

const statIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateStat(e.target);
      statIO.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll(".stat-num").forEach(el => statIO.observe(el));

// ---------- CUSTOM CURSOR ----------
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");
const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (supportsHover) {
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    cursorDot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  const lerp = () => {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(lerp);
  };
  lerp();

  document.querySelectorAll("a, button, .paper, .course-card, .project, .timeline-item")
    .forEach(el => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
}

// ---------- FOOTER YEAR ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- ACTIVE NAV ON SCROLL ----------
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const navIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navLinks.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + id);
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => navIO.observe(s));
