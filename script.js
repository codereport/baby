const icons = {
  feed: "icon-bottle",
  care: "icon-heart",
  awake: "icon-heart",
  routine: "icon-lamp",
  sleep: "icon-moon",
};

const standardRows = (careNote = "burp · diaper · cuddle") => [
  ["7", "am", "10", "am", "7:00–7:45"],
  ["10", "am", "1", "pm", "10:00–10:45"],
  ["1", "pm", "4", "pm", "1:00–1:45"],
  ["4", "pm", "7", "pm", "4:00–4:45"],
  ["7", "pm", "10", "pm", "7:00–7:45"],
].map(([start, startMeridiem, end, endMeridiem, feedTime], index) => ({
  start,
  startMeridiem,
  end,
  endMeridiem,
  segments: [
    { type: "feed", label: "Feed", note: feedTime, weight: 29 },
    { type: "care", label: index === 4 ? "Care" : "Care", note: index === 4 ? "quiet · dim lights" : careNote, weight: 29 },
    { type: "sleep", label: "Sleep", note: "until next feed", weight: 42 },
  ],
}));

const guidedRows = (finalNap = "5:00–6:00 nap") => [
  { start: "7", startMeridiem: "am", end: "10", endMeridiem: "am", segments: [
    { type: "feed", label: "Feed", note: "7:00", weight: 24 },
    { type: "awake", label: "Play", note: "7:30–8:30", weight: 34 },
    { type: "sleep", label: "Nap", note: "8:30–10:00", weight: 42 },
  ]},
  { start: "10", startMeridiem: "am", end: "1", endMeridiem: "pm", segments: [
    { type: "feed", label: "Feed", note: "10:00", weight: 28 },
    { type: "care", label: "Settle", note: "brief care", weight: 24 },
    { type: "sleep", label: "Nap", note: "11:00–1:00", weight: 48 },
  ]},
  { start: "1", startMeridiem: "pm", end: "4", endMeridiem: "pm", segments: [
    { type: "feed", label: "Feed", note: "1:00", weight: 24 },
    { type: "awake", label: "Play", note: "1:30–2:30", weight: 34 },
    { type: "sleep", label: "Nap", note: "2:30–4:00", weight: 42 },
  ]},
  { start: "4", startMeridiem: "pm", end: "7", endMeridiem: "pm", segments: [
    { type: "feed", label: "Feed", note: "4:00", weight: 23 },
    { type: "awake", label: "Play", note: "4:30", weight: 23 },
    { type: "sleep", label: "Nap", note: finalNap, weight: 28 },
    { type: "routine", label: "Bath", note: "6:45", weight: 26 },
  ]},
  { start: "7", startMeridiem: "pm", end: "10", endMeridiem: "pm", segments: [
    { type: "feed", label: "Feed", note: "7:00", weight: 30 },
    { type: "routine", label: "Bedtime", note: "7:30", weight: 28 },
    { type: "sleep", label: "Sleep", note: "until dream feed", weight: 42 },
  ]},
];

const schedules = {
  1: {
    themeKicker: "The goal",
    theme: "A simple rhythm",
    principles: [
      ["Day feels like day", "Light and normal household sounds."],
      ["Feed every 2–3 hours", "Follow hunger cues and your clinician’s plan."],
      ["Feed, care, sleep", "Keep awake time brief and gentle."],
      ["Night feels like night", "Low light, low voices, back to sleep."],
    ],
    dayLabel: "Daytime cycle", dayRange: "7 am–10 pm", stat: ["2–3", "hour rhythm"],
    rows: standardRows(),
    nightRange: "10 pm–7 am", anchorTime: "10:00", anchorMeridiem: "pm", anchorLabel: "Feed", anchorText: "Begin the overnight rhythm",
    nightRule: ["Continue feeding every 2–3 hours", "Feed sooner when baby shows hunger cues. Don’t try to stretch sleep in week one."],
    nightItems: [
      ["routine", "Keep lights low", "Help distinguish night from day."],
      ["care", "Keep care quiet", "Feed, burp, and change if needed."],
      ["sleep", "Back to safe sleep", "On baby’s back, firm flat surface, clear crib."],
    ],
    statBottom: ["8–12", "feeds in 24 hours is common"],
    noteOne: ["Responsive, not rigid.", "The daytime bars visualize a 3-hour cycle; breastfed babies may feed closer to every 2½ hours."],
    noteTwo: ["Parent care belongs in the schedule.", "When baby sleeps, prioritize rest, food, water, and accepting help."],
  },
  2: {
    themeKicker: "Honeymoon week",
    theme: "Protect the rhythm",
    principles: [
      ["Keep feeds regular", "About every 2½–3 hours through the day."],
      ["Wake a sleepy feeder", "Gentle stimulation can help complete a feed."],
      ["Differentiate night", "Make daytime social and nighttime quiet."],
      ["Keep 10 pm steady", "This becomes the dream-feed anchor."],
    ],
    dayLabel: "Daytime cycle", dayRange: "7 am–10 pm", stat: ["2½–3", "hour rhythm"],
    rows: standardRows("burp · diaper · connect"),
    nightRange: "10 pm–7 am", anchorTime: "10:00", anchorMeridiem: "pm", anchorLabel: "Anchor feed", anchorText: "Keep this time consistent",
    nightRule: ["Longer stretches may begin", "The book’s samples keep overnight feeds: roughly 1 and 4 a.m. for nursing, or 2 and 6 a.m. for formula."],
    nightItems: [
      ["routine", "Day and night cues", "Bright and social by day; dim and quiet overnight."],
      ["feed", "Feed effectively", "Wake gently if baby is too sleepy to finish."],
      ["sleep", "Return to sleep", "Burp, settle, and use a safe sleep space."],
    ],
    statBottom: ["2½–3", "hours between daytime feeds"],
    noteOne: ["The 10 p.m. anchor matters.", "Other times may shift slightly, but the book keeps this feed consistent."],
    noteTwo: ["Watch output and weight.", "Diapers and weight gain help show whether feeding is effective."],
  },
  3: {
    themeKicker: "It’s time to sleep",
    theme: "Eat · awake · sleep",
    principles: [
      ["Start the day at 7", "A consistent morning anchors the whole day."],
      ["Move to three hours", "The daytime feeds settle at 7, 10, 1, 4, and 7."],
      ["Add brief play", "Keep baby awake a little after daytime feeds."],
      ["Separate food and sleep", "Practice settling without feeding to sleep."],
    ],
    dayLabel: "Eat · awake · sleep", dayRange: "7 am–10 pm", stat: ["3", "hour rhythm"],
    rows: standardRows("awake · brief play"),
    nightRange: "10 pm–7 am", anchorTime: "10:00", anchorMeridiem: "pm", anchorLabel: "Dream feed", anchorText: "Feed, then settle quietly",
    nightRule: ["Aim for the first 4-hour stretch", "The book’s sample continues with a 2 a.m. feed, then a shorter early-morning feed around 5–6 a.m."],
    nightItems: [
      ["routine", "Minimal interaction", "Keep the room dim and talking to a minimum."],
      ["care", "Pause before feeding early", "Briefly resettle if waking well before the planned feed."],
      ["sleep", "Swaddle and settle", "Always place baby on their back to sleep."],
    ],
    statBottom: ["7–8", "feeds in the sample day"],
    noteOne: ["A 20-minute window is okay.", "Respond to hunger and move the rest of the day gently when needed."],
    noteTwo: ["Awake time stays short.", "Try a little talking, cuddling, or supervised tummy time."],
  },
  4: {
    themeKicker: "Coming together",
    theme: "Shape the naps",
    principles: [
      ["Keep five day feeds", "Feed at 7, 10, 1, 4, and 7."],
      ["Notice sleepy cues", "Use yawning and fussiness to guide nap timing."],
      ["Add an evening catnap", "A short 5:30–6:30 nap protects bedtime."],
      ["Begin a night routine", "Bath around 6:45, feed at 7, then bed."],
    ],
    dayLabel: "Feed · play · nap", dayRange: "7 am–10 pm", stat: ["3", "hour rhythm"],
    rows: [
      { start: "7", startMeridiem: "am", end: "10", endMeridiem: "am", segments: [
        { type: "feed", label: "Feed", note: "7:00", weight: 24 }, { type: "awake", label: "Awake", note: "until about 9", weight: 38 }, { type: "sleep", label: "Nap", note: "until 10", weight: 38 },
      ]},
      { start: "10", startMeridiem: "am", end: "1", endMeridiem: "pm", segments: [
        { type: "feed", label: "Feed", note: "10:00", weight: 30 }, { type: "care", label: "Settle", note: "brief care", weight: 25 }, { type: "sleep", label: "Nap", note: "until 1", weight: 45 },
      ]},
      { start: "1", startMeridiem: "pm", end: "4", endMeridiem: "pm", segments: [
        { type: "feed", label: "Feed", note: "1:00", weight: 24 }, { type: "awake", label: "Awake", note: "until about 2", weight: 34 }, { type: "sleep", label: "Nap", note: "2:00–4:00", weight: 42 },
      ]},
      { start: "4", startMeridiem: "pm", end: "7", endMeridiem: "pm", segments: [
        { type: "feed", label: "Feed", note: "4:00", weight: 22 }, { type: "awake", label: "Play", note: "until 5:30", weight: 27 }, { type: "sleep", label: "Nap", note: "5:30–6:30", weight: 27 }, { type: "routine", label: "Bath", note: "6:45", weight: 24 },
      ]},
      { start: "7", startMeridiem: "pm", end: "10", endMeridiem: "pm", segments: [
        { type: "feed", label: "Feed", note: "7:00", weight: 30 }, { type: "routine", label: "Bedtime", note: "after feed", weight: 28 }, { type: "sleep", label: "Sleep", note: "until dream feed", weight: 42 },
      ]},
    ],
    nightRange: "10 pm–7 am", anchorTime: "10:00", anchorMeridiem: "pm", anchorLabel: "Dream feed", anchorText: "Feed well, then back to bed",
    nightRule: ["Next feed around 3 a.m.—if awake", "If baby is still asleep at 3 a.m., the book says to let them sleep. Feed and settle quietly when they wake."],
    nightItems: [
      ["routine", "No talking", "Keep the overnight feed as quiet as possible."],
      ["care", "Help baby resettle", "Pause and listen before rushing in."],
      ["sleep", "Return to safe sleep", "Back, firm flat surface, clear crib."],
    ],
    statBottom: ["5", "anchored daytime feeds"],
    noteOne: ["Nap times are a guide.", "Adjust for your baby’s sleepy cues while protecting the feed anchors."],
    noteTwo: ["The evening gets a sequence.", "Short nap, bath, feed, and bed become repeatable cues."],
  },
  5: {
    themeKicker: "Nap week",
    theme: "Protect the daytime",
    principles: [
      ["Keep the feed anchors", "Continue 7, 10, 1, 4, 7, and 10."],
      ["Build three main naps", "Morning, midday, and afternoon rest."],
      ["Limit awake stretches", "Try not to exceed about 90 minutes."],
      ["Expect some fussiness", "Keep the evening routine calm and familiar."],
    ],
    dayLabel: "Week 5 nap schedule", dayRange: "7 am–10 pm", stat: ["3", "hour rhythm"],
    rows: guidedRows("5:00–6:00 nap"),
    nightRange: "10 pm–7 am", anchorTime: "10:00", anchorMeridiem: "pm", anchorLabel: "Dream feed", anchorText: "A full feed before the long stretch",
    nightRule: ["Next feed around 4 a.m.", "Feed, burp, and return to sleep. Begin the next day again with the 7 a.m. feed."],
    nightItems: [
      ["routine", "Keep bedtime familiar", "Bath, night clothes, music, feed, bed."],
      ["care", "Expect a bumpy week", "More fussiness can happen around week five."],
      ["sleep", "Protect naps", "Use cues; don’t keep baby awake much beyond 90 minutes."],
    ],
    statBottom: ["4 am", "target overnight feed"],
    noteOne: ["The feed schedule stays firm.", "Nap times remain flexible and can move with your baby’s needs."],
    noteTwo: ["Recovery still matters.", "Ask for help and speak with a clinician if you feel persistently overwhelmed."],
  },
  6: {
    themeKicker: "Proud parents",
    theme: "The full-day flow",
    principles: [
      ["Start at seven", "Wake, feed, and greet the day consistently."],
      ["Play after key feeds", "Morning, early afternoon, and late afternoon."],
      ["Use scheduled naps", "8:30, 11:00, 2:30, and a short 5:00 nap."],
      ["Keep the dream feed", "The 10 p.m. feed supports the long stretch."],
    ],
    dayLabel: "Week 6 schedule", dayRange: "7 am–10 pm", stat: ["3", "hour rhythm"],
    rows: guidedRows("5:00–5:30 nap"),
    nightRange: "10 pm–7 am", anchorTime: "10:00", anchorMeridiem: "pm", anchorLabel: "Dream feed", anchorText: "Feed and return to sleep",
    nightRule: ["Next feed around 5 a.m.", "The goal is a longer first stretch. Feed at 5 a.m., then begin the day again with the 7 a.m. feed."],
    nightItems: [
      ["routine", "Repeat the bedtime cues", "6:45 bath, 7:00 feed, 7:30 bed."],
      ["care", "Keep 5 a.m. quiet", "This may be a smaller, sleepy feed."],
      ["sleep", "Start the day at seven", "The morning anchor keeps bedtime on track."],
    ],
    statBottom: ["5 am", "target overnight feed"],
    noteOne: ["Use this as a guide.", "Some babies sleep a little more or less; stay responsive and adjust."],
    noteTwo: ["A long stretch means 6–8 hours.", "At this age, it does not usually mean 7 p.m. to 7 a.m."],
  },
};

const byId = (id) => document.getElementById(id);

function renderSegments(segments) {
  return segments.map(({ type, label, note, weight }) => `
    <div class="segment ${type}-segment" style="flex:${weight} 1 0">
      <svg aria-hidden="true"><use href="#${icons[type]}" /></svg>
      <p><strong>${label}</strong><span>${note}</span></p>
    </div>
  `).join("");
}

function renderWeek(weekNumber, updateHistory = true) {
  const week = schedules[weekNumber] || schedules[1];
  document.title = `Cherish · Daily Schedule · Week ${weekNumber}`;
  byId("page-title").textContent = `Week ${weekNumber}`;
  byId("themeKicker").textContent = week.themeKicker;
  byId("principles-title").textContent = week.theme;
  byId("principlesList").innerHTML = week.principles.map(([title, text], index) => `
    <li><span>0${index + 1}</span><p><strong>${title}</strong>${text}</p></li>
  `).join("");
  byId("dayLabel").textContent = week.dayLabel;
  byId("day-title").textContent = week.dayRange;
  byId("panelStat").innerHTML = `<strong>${week.stat[0]}</strong><span>${week.stat[1]}</span>`;
  byId("schedule").innerHTML = week.rows.map((row, index) => `
    <article class="schedule-row ${index === week.rows.length - 1 ? "evening-row" : ""}">
      <div class="row-time"><strong>${row.start}</strong><span>${row.startMeridiem}</span></div>
      <div class="row-cycle">${renderSegments(row.segments)}</div>
      <div class="row-end">${row.end}<span>${row.endMeridiem}</span></div>
    </article>
  `).join("");
  byId("night-title").textContent = week.nightRange;
  byId("nightAnchor").innerHTML = `
    <span class="dream-time">${week.anchorTime} <small>${week.anchorMeridiem}</small></span>
    <div><strong>${week.anchorLabel}</strong><p>${week.anchorText}</p></div>
  `;
  byId("nightRule").innerHTML = `<strong>${week.nightRule[0]}</strong><p>${week.nightRule[1]}</p>`;
  byId("nightList").innerHTML = week.nightItems.map(([type, title, text]) => `
    <li><svg aria-hidden="true"><use href="#${icons[type]}" /></svg><p><strong>${title}</strong>${text}</p></li>
  `).join("");
  byId("numberBlock").innerHTML = `<strong>${week.statBottom[0]}</strong><span>${week.statBottom[1]}</span>`;
  byId("bottomNoteOne").innerHTML = `<strong>${week.noteOne[0]}</strong> ${week.noteOne[1]}`;
  byId("bottomNoteTwo").innerHTML = `<strong>${week.noteTwo[0]}</strong> ${week.noteTwo[1]}`;

  document.querySelectorAll("[data-week]").forEach((button) => {
    const active = Number(button.dataset.week) === Number(weekNumber);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
    button.style.backgroundColor = "#ffffff";
    button.style.borderColor = active ? "#f18745" : "#c9dedc";
    button.style.color = "#133c61";
    button.style.boxShadow = active ? "0 0 0 2px #f18745" : "none";
    button.setAttribute("aria-label", `Show week ${button.dataset.week}${active ? ", currently selected" : ""}`);
  });

  if (updateHistory) {
    const url = new URL(window.location.href);
    url.searchParams.set("week", weekNumber);
    window.history.replaceState({}, "", url);
  }
}

document.querySelectorAll("[data-week]").forEach((button) => {
  button.addEventListener("click", () => renderWeek(Number(button.dataset.week)));
});

const requestedWeek = Math.min(6, Math.max(1, Number(new URLSearchParams(window.location.search).get("week")) || 1));
renderWeek(requestedWeek, false);

const printButton = byId("printButton");
if (printButton) printButton.addEventListener("click", () => window.print());
