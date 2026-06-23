export const HISTORY_KEY = "scam-detection-history";
export const LATEST_RESULT_KEY = "veto-latest-result";

export function getHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return parsed.filter((item) => item.id !== "seed-1");
  } catch {
    return [];
  }
}

export function saveHistory(items) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
}

export function getLatestResult() {
  try {
    const raw = localStorage.getItem(LATEST_RESULT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveLatestResult(result) {
  localStorage.setItem(LATEST_RESULT_KEY, JSON.stringify(result));
}
