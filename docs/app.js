const csvData = `Date, Transaction ID, Currency, Amount, Description
2023-01-01, 1001, USD, 150.00, Einkauf von Büromaterial
2023-01-02, 1002, EUR, 200.00, Verkauf von Produkten
2023-01-03, 1003, GBP, 300.00, Zahlung
2023-01-04, 1004, USD, 400.00, Rückerstattung
2023-01-05, 1005, EUR, 500.00, Gehaltszahlung
2023-01-06, 1006, GBP, 600.00, Miete
2023-01-07, 1007, USD, 700.00, Versicherung
2023-01-08, 1008, EUR, 800.00, Marketingkosten
2023-01-09, 1009, GBP, 900.00, Reisekosten
2023-01-10, 1010, USD, 1000.00, Büroausstattung
2023-02-01, 1011, EUR, 245.50, Überweisung für Büromaterial
2023-02-04, 1012, USD, 780.00, Überweisung an Lieferant
2023-02-07, 1013, GBP, 125.75, Überweisung für Fahrtkosten
2023-02-10, 1014, EUR, 1500.00, Überweisung der Monatsmiete
2023-02-13, 1015, USD, 320.40, Überweisung für Softwarelizenz
2023-02-16, 1016, GBP, 95.00, Überweisung für Telefonkosten
2023-02-19, 1017, EUR, 640.25, Überweisung an Dienstleister
2023-02-22, 1018, USD, 210.00, Überweisung für Marketing
2023-02-25, 1019, GBP, 875.90, Überweisung für Reisekosten
2023-02-28, 1020, EUR, 450.00, Überweisung für Weiterbildung
2023-03-01, 1021, USD, 550.00, Überweisung an Lieferant
2023-03-04, 1022, EUR, 120.80, Überweisung für Büromaterial
2023-03-07, 1023, GBP, 925.00, Überweisung der Monatsmiete
2023-03-10, 1024, USD, 360.45, Überweisung für Reisekosten
2023-03-13, 1025, EUR, 715.30, Überweisung an Dienstleister
2023-03-16, 1026, GBP, 180.00, Überweisung für Versicherung
2023-03-19, 1027, USD, 2450.00, Überweisung für Gehaltszahlung
2023-03-22, 1028, EUR, 89.99, Überweisung für Softwarelizenz
2023-03-25, 1029, GBP, 430.60, Überweisung für Marketing
2023-03-28, 1030, USD, 675.25, Überweisung für Weiterbildung
2023-04-01, 1031, GBP, 325.00, Überweisung für Büromaterial
2023-04-04, 1032, USD, 840.50, Überweisung an Lieferant
2023-04-07, 1033, EUR, 215.75, Überweisung für Reisekosten
2023-04-10, 1034, GBP, 1500.00, Überweisung der Monatsmiete
2023-04-13, 1035, USD, 475.20, Überweisung für Softwarelizenz
2023-04-16, 1036, EUR, 130.00, Überweisung für Telefonkosten
2023-04-19, 1037, GBP, 690.85, Überweisung an Dienstleister
2023-04-22, 1038, USD, 285.00, Überweisung für Marketing
2023-04-25, 1039, EUR, 920.40, Überweisung für Reisekosten
2023-04-28, 1040, GBP, 510.00, Überweisung für Weiterbildung
2023-05-01, 1041, EUR, 625.00, Überweisung an Lieferant
2023-05-04, 1042, GBP, 175.80, Überweisung für Büromaterial
2023-05-07, 1043, USD, 950.00, Überweisung der Monatsmiete
2023-05-10, 1044, EUR, 410.25, Überweisung für Reisekosten
2023-05-13, 1045, GBP, 735.60, Überweisung an Dienstleister
2023-05-16, 1046, USD, 195.00, Überweisung für Versicherung
2023-05-19, 1047, EUR, 2450.00, Überweisung für Gehaltszahlung
2023-05-22, 1048, GBP, 105.99, Überweisung für Softwarelizenz
2023-05-25, 1049, USD, 520.40, Überweisung für Marketing
2023-05-28, 1050, EUR, 385.75, Überweisung für Weiterbildung
2023-06-01, 1051, USD, 290.00, Überweisung für Büromaterial
2023-06-04, 1052, EUR, 780.35, Überweisung an Lieferant
2023-06-07, 1053, GBP, 145.50, Überweisung für Fahrtkosten
2023-06-10, 1054, USD, 1500.00, Überweisung der Monatsmiete
2023-06-13, 1055, EUR, 560.25, Überweisung für Softwarelizenz
2023-06-16, 1056, GBP, 115.00, Überweisung für Telefonkosten
2023-06-19, 1057, USD, 805.90, Überweisung an Dienstleister
2023-06-22, 1058, EUR, 315.00, Überweisung für Marketing
2023-06-25, 1059, GBP, 690.45, Überweisung für Reisekosten
2023-06-28, 1060, USD, 470.00, Überweisung für Weiterbildung
2023-07-01, 1061, GBP, 435.00, Überweisung an Lieferant
2023-07-04, 1062, USD, 210.75, Überweisung für Büromaterial
2023-07-07, 1063, EUR, 925.00, Überweisung der Monatsmiete
2023-07-10, 1064, GBP, 385.40, Überweisung für Reisekosten
2023-07-13, 1065, USD, 640.30, Überweisung an Dienstleister
2023-07-16, 1066, EUR, 175.00, Überweisung für Versicherung
2023-07-19, 1067, GBP, 2450.00, Überweisung für Gehaltszahlung
2023-07-22, 1068, USD, 125.99, Überweisung für Softwarelizenz
2023-07-25, 1069, EUR, 570.60, Überweisung für Marketing
2023-07-28, 1070, GBP, 725.25, Überweisung für Weiterbildung`;

const months = [
  { key: "2023-01", name: "Januar", short: "Jan" },
  { key: "2023-02", name: "Februar", short: "Feb" },
  { key: "2023-03", name: "März", short: "Mär" },
  { key: "2023-04", name: "April", short: "Apr" },
  { key: "2023-05", name: "Mai", short: "Mai" },
  { key: "2023-06", name: "Juni", short: "Jun" },
  { key: "2023-07", name: "Juli", short: "Jul" },
];
const currencies = ["EUR", "USD", "GBP"];
const currencyNames = { EUR: "Euro", USD: "US-Dollar", GBP: "Britische Pfund" };
const currencyColors = { EUR: "eur", USD: "usd", GBP: "gbp" };
const numberFormatter = new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const monthFormatter = new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit" });
const yearMonthFormatter = new Intl.DateTimeFormat("de-DE", { month: "long", year: "numeric" });

function parseCsvRow(line) {
  const cells = [];
  const pattern = /(?:^|,)(?:"((?:[^"]|"")*)"|([^,]*))/g;
  for (const match of line.matchAll(pattern)) {
    cells.push((match[1] ?? match[2]).replaceAll('""', '"').trim());
  }
  return cells;
}

const transactions = csvData
  .split(/\r?\n/)
  .slice(1)
  .filter((line) => line.trim())
  .map((line) => {
    const [date, id, currency, amount, description] = parseCsvRow(line);
    if (!date || !id || !currencies.includes(currency) || !Number.isFinite(Number(amount))) {
      throw new Error(`Ungültiger Datensatz: ${line}`);
    }
    return { date, id, currency, amount: Number(amount), description, month: date.slice(0, 7) };
  })
  .sort((a, b) => a.date.localeCompare(b.date) || Number(a.id) - Number(b.id));

if (transactions.length === 0) {
  throw new Error("Der Transaktionsdatensatz ist leer.");
}

const totalsByCurrency = Object.fromEntries(currencies.map((currency) => [currency, 0]));
const monthGroups = new Map(months.map((month) => [month.key, []]));
for (const transaction of transactions) {
  totalsByCurrency[transaction.currency] += transaction.amount;
  if (!monthGroups.has(transaction.month)) {
    monthGroups.set(transaction.month, []);
  }
  monthGroups.get(transaction.month).push(transaction);
}

let selectedMonth = "all";
let currentPage = 1;
const pageSize = 10;

const elements = {
  totalTransactions: document.querySelector("#total-transactions"),
  monthGrid: document.querySelector("#month-grid"),
  chart: document.querySelector("#monthly-chart"),
  search: document.querySelector("#search-input"),
  monthFilter: document.querySelector("#month-filter"),
  currencyFilter: document.querySelector("#currency-filter"),
  sortFilter: document.querySelector("#sort-filter"),
  rows: document.querySelector("#transaction-rows"),
  resultCount: document.querySelector("#result-count"),
  pageStatus: document.querySelector("#page-status"),
  previousPage: document.querySelector("#previous-page"),
  nextPage: document.querySelector("#next-page"),
  emptyState: document.querySelector("#empty-state"),
  dialog: document.querySelector("#transaction-dialog"),
  details: document.querySelector("#transaction-details"),
};

function formatAmount(amount) {
  return numberFormatter.format(amount);
}

function formatCurrency(amount, currency) {
  return `${formatAmount(amount)} ${currency}`;
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(year, month - 1, day));
}

function totalsFor(items) {
  const totals = Object.fromEntries(currencies.map((currency) => [currency, 0]));
  for (const item of items) {
    totals[item.currency] += item.amount;
  }
  return totals;
}

function initOverview() {
  elements.totalTransactions.textContent = String(transactions.length);
  document.querySelector("#hero-transaction-count").textContent = String(transactions.length);
  for (const currency of currencies) {
    document.querySelector(`#total-${currency}`).textContent = formatAmount(totalsByCurrency[currency]);
  }

  for (const month of months) {
    const option = document.createElement("option");
    option.value = month.key;
    option.textContent = month.name;
    elements.monthFilter.append(option);
  }
}

function renderMonths() {
  const availableMonths = months.filter((month) => monthGroups.has(month.key));
  elements.monthGrid.replaceChildren();

  for (const month of availableMonths) {
    const items = monthGroups.get(month.key);
    const totals = totalsFor(items);
    const firstDate = items[0].date;
    const lastDate = items.at(-1).date;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `month-card${selectedMonth === month.key ? " selected" : ""}`;
    button.dataset.month = month.key;
    button.setAttribute("aria-pressed", String(selectedMonth === month.key));
    button.setAttribute("aria-label", `${month.name} 2023, ${items.length} Transaktionen`);

    const top = document.createElement("span");
    top.className = "month-card-top";
    const name = document.createElement("span");
    name.className = "month-name";
    name.textContent = month.name;
    const count = document.createElement("span");
    count.className = "month-count";
    count.textContent = `${items.length} Buchungen`;
    top.append(name, count);

    const bookingCount = document.createElement("div");
    bookingCount.className = "month-total";
    bookingCount.textContent = `${items.length} Transaktionen`;

    const breakdown = document.createElement("div");
    breakdown.className = "month-breakdown";
    for (const currency of currencies) {
      const row = document.createElement("div");
      row.className = "month-breakdown-row";
      const label = document.createElement("span");
      label.className = `currency-mark ${currencyColors[currency]}`;
      label.textContent = currency;
      const amount = document.createElement("span");
      amount.textContent = formatAmount(totals[currency]);
      row.append(label, amount);
      breakdown.append(row);
    }

    const range = document.createElement("div");
    range.className = "month-range";
    range.textContent = `${monthFormatter.format(new Date(`${firstDate}T00:00:00`))} – ${monthFormatter.format(new Date(`${lastDate}T00:00:00`))}`;

    button.append(top, bookingCount, breakdown, range);
    elements.monthGrid.append(button);
  }
}

function renderChart() {
  const monthlyTotals = months.map((month) => ({
    ...month,
    totals: totalsFor(monthGroups.get(month.key) ?? []),
  }));
  const currencyMax = Object.fromEntries(currencies.map((currency) => [
    currency,
    Math.max(1, ...monthlyTotals.map((month) => month.totals[currency])),
  ]));
  elements.chart.replaceChildren();

  for (const month of monthlyTotals) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chart-month${selectedMonth === month.key ? " selected" : ""}`;
    button.dataset.month = month.key;
    button.setAttribute("aria-label", `${month.name}: ${currencies.map((currency) => formatCurrency(month.totals[currency], currency)).join(", ")}`);

    const bars = document.createElement("span");
    bars.className = "chart-bars";
    for (const currency of currencies) {
      const bar = document.createElement("span");
      bar.className = `chart-bar ${currencyColors[currency]}`;
      const height = monthGroups.has(month.key) ? Math.max(2, (month.totals[currency] / currencyMax[currency]) * 116) : 2;
      bar.style.height = `${height}px`;
      bar.title = `${month.name}: ${formatCurrency(month.totals[currency], currency)}`;
      bars.append(bar);
    }

    const label = document.createElement("span");
    label.className = "chart-label";
    label.textContent = month.short;
    button.append(bars, label);
    elements.chart.append(button);
  }
}

function getFilteredTransactions() {
  const query = elements.search.value.trim().toLocaleLowerCase("de");
  const currency = elements.currencyFilter.value;
  const month = elements.monthFilter.value;
  const filtered = transactions.filter((transaction) => {
    const matchesMonth = month === "all" || transaction.month === month;
    const matchesCurrency = currency === "all" || transaction.currency === currency;
    const searchable = `${transaction.id} ${transaction.date} ${transaction.description} ${transaction.currency}`.toLocaleLowerCase("de");
    return matchesMonth && matchesCurrency && searchable.includes(query);
  });
  const sortOrder = elements.sortFilter.value;
  filtered.sort((a, b) => {
    if (sortOrder === "date-desc") {
      return b.date.localeCompare(a.date) || Number(b.id) - Number(a.id);
    }
    if (sortOrder === "id-asc") {
      return Number(a.id) - Number(b.id);
    }
    if (sortOrder === "id-desc") {
      return Number(b.id) - Number(a.id);
    }
    if (sortOrder === "amount-asc" || sortOrder === "amount-desc") {
      const currencyOrder = a.currency.localeCompare(b.currency);
      const amountOrder = sortOrder === "amount-asc" ? a.amount - b.amount : b.amount - a.amount;
      return currencyOrder || amountOrder || a.date.localeCompare(b.date);
    }
    return a.date.localeCompare(b.date) || Number(a.id) - Number(b.id);
  });
  return filtered;
}

function addCell(row, className, text) {
  const cell = document.createElement("td");
  if (className) {
    cell.className = className;
  }
  cell.textContent = text;
  row.append(cell);
  return cell;
}

function renderTransactions() {
  const filtered = getFilteredTransactions();
  const pageCount = Math.ceil(filtered.length / pageSize);
  currentPage = Math.min(currentPage, Math.max(pageCount, 1));
  const pageItems = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const fragment = document.createDocumentFragment();

  for (const transaction of pageItems) {
    const row = document.createElement("tr");
    addCell(row, "", formatDate(transaction.date));
    addCell(row, "id-cell", `#${transaction.id}`);
    addCell(row, "description-cell", transaction.description);

    const currencyCell = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = `currency-badge ${transaction.currency}`;
    badge.textContent = transaction.currency;
    currencyCell.append(badge);
    row.append(currencyCell);

    addCell(row, "amount-cell", formatCurrency(transaction.amount, transaction.currency));
    const actionCell = document.createElement("td");
    const action = document.createElement("button");
    action.className = "row-action";
    action.type = "button";
    action.dataset.detailId = transaction.id;
    action.setAttribute("aria-label", `Details zu Transaktion ${transaction.id} anzeigen`);
    action.textContent = "›";
    actionCell.append(action);
    row.append(actionCell);
    fragment.append(row);
  }

  elements.rows.replaceChildren(fragment);
  elements.emptyState.hidden = filtered.length > 0;
  elements.resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "Buchung" : "Buchungen"} gefunden`;
  elements.pageStatus.textContent = filtered.length
    ? `${(currentPage - 1) * pageSize + 1}–${Math.min(currentPage * pageSize, filtered.length)} von ${filtered.length}`
    : "0 Buchungen";
  elements.previousPage.disabled = currentPage <= 1;
  elements.nextPage.disabled = currentPage >= pageCount;
}

function renderAll() {
  renderMonths();
  renderChart();
  renderTransactions();
}

function selectMonth(month, scrollToTable = false) {
  selectedMonth = month;
  elements.monthFilter.value = month;
  currentPage = 1;
  renderAll();
  if (scrollToTable) {
    document.querySelector("#transactions").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function showDetails(id) {
  const transaction = transactions.find((item) => item.id === id);
  if (!transaction) {
    throw new Error(`Transaktion ${id} wurde nicht gefunden.`);
  }

  document.querySelector("#dialog-title").textContent = `Transaktion #${transaction.id}`;
  const values = [
    ["Datum", formatDate(transaction.date), false],
    ["Transaktions-ID", transaction.id, false],
    ["Währung", currencyNames[transaction.currency], false],
    ["Betrag", formatCurrency(transaction.amount, transaction.currency), false],
    ["Beschreibung", transaction.description, true],
  ];
  const fragment = document.createDocumentFragment();
  for (const [labelText, valueText, wide] of values) {
    const item = document.createElement("div");
    item.className = `detail-item${wide ? " wide" : ""}`;
    const label = document.createElement("span");
    label.className = "detail-label";
    label.textContent = labelText;
    const value = document.createElement("span");
    value.className = "detail-value";
    value.textContent = valueText;
    item.append(label, value);
    fragment.append(item);
  }
  elements.details.replaceChildren(fragment);
  elements.dialog.showModal();
}

elements.monthGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-month]");
  if (button) {
    selectMonth(button.dataset.month, true);
  }
});
elements.chart.addEventListener("click", (event) => {
  const button = event.target.closest("[data-month]");
  if (button) {
    selectMonth(button.dataset.month, true);
  }
});
elements.rows.addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail-id]");
  if (button) {
    showDetails(button.dataset.detailId);
  }
});
document.querySelector(".overview-grid").addEventListener("click", (event) => {
  const card = event.target.closest("[data-currency]");
  if (!card) {
    return;
  }
  elements.search.value = "";
  elements.monthFilter.value = "all";
  elements.currencyFilter.value = card.dataset.currency;
  selectedMonth = "all";
  currentPage = 1;
  renderAll();
  document.querySelector("#transactions").scrollIntoView({ behavior: "smooth", block: "start" });
});
elements.search.addEventListener("input", () => {
  currentPage = 1;
  renderTransactions();
});
elements.currencyFilter.addEventListener("change", () => {
  currentPage = 1;
  renderTransactions();
});
elements.sortFilter.addEventListener("change", () => {
  currentPage = 1;
  renderTransactions();
});
elements.monthFilter.addEventListener("change", () => {
  selectedMonth = elements.monthFilter.value;
  currentPage = 1;
  renderMonths();
  renderChart();
  renderTransactions();
});
elements.previousPage.addEventListener("click", () => {
  currentPage -= 1;
  renderTransactions();
});
elements.nextPage.addEventListener("click", () => {
  currentPage += 1;
  renderTransactions();
});
document.querySelector("#show-all-months").addEventListener("click", () => selectMonth("all", true));
let scrollUpdateScheduled = false;
function updateScrollProgress() {
  if (scrollUpdateScheduled) {
    return;
  }
  scrollUpdateScheduled = true;
  window.requestAnimationFrame(() => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
    const depth = Math.min(window.scrollY / 18, 30);
    document.querySelector("#scroll-progress").style.height = `${progress}%`;
    document.documentElement.style.setProperty("--canopy-drift", `${depth}px`);
    scrollUpdateScheduled = false;
  });
}
window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

if ("IntersectionObserver" in window) {
  const navigationLinks = [...document.querySelectorAll(".nav-link")];
  const sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue;
      }
      for (const link of navigationLinks) {
        link.classList.toggle("active", link.hash === `#${entry.target.id}`);
      }
    }
  }, { rootMargin: "-25% 0px -65% 0px" });
  for (const link of navigationLinks) {
    const section = document.querySelector(link.hash);
    if (section) {
      sectionObserver.observe(section);
    }
  }
}
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase("de") === "k") {
    event.preventDefault();
    elements.search.focus();
  }
});

initOverview();
renderAll();
