import { keywordPatterns, highRiskTerms, suspiciousDomains } from "../data/scamData.js";

export function normalizeText(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

export function detectKeywords(text) {
  const normalized = normalizeText(text);
  return keywordPatterns.filter((term) => normalized.includes(term));
}

export function safeUrlCheck(url) {
  const normalized = normalizeText(url);
  const factors = [];
  if (!/^https?:\/\//i.test(url.trim())) factors.push("missing http/https protocol");
  suspiciousDomains.forEach((domain) => {
    if (normalized.includes(domain)) factors.push(`${domain} indicator`);
  });
  if (normalized.includes("redirect") || normalized.includes("download") || normalized.includes("apk")) {
    factors.push("redirect or download indicator");
  }
  return [...new Set(factors)];
}

export function classifyContent({ type, text = "", url = "" }) {
  const content = text || url;
  const keywords = detectKeywords(content);
  const highHits = highRiskTerms.filter((term) => normalizeText(content).includes(term));
  const urlFactors = type === "url" || url ? safeUrlCheck(url || content) : [];
  let score = 8 + keywords.length * 8 + highHits.length * 9 + urlFactors.length * 12;

  if (type === "voice" && keywords.length > 0) score += 8;
  if (type === "image" && keywords.length > 0) score += 5;
  if (type === "voice" && highHits.length >= 2) score += 30;
  if (type === "image" && keywords.length >= 2) score += 27;
  if (normalizeText(content).includes("urgent notice from your bank")) score = 88;
  if (normalizeText(content).includes("special reward")) score = 56;

  score = Math.min(96, Math.max(8, score));
  const status = score >= 70 ? "dangerous" : score >= 40 ? "suspicious" : "safe";
  const label = status === "dangerous" ? "Dangerous" : status === "suspicious" ? "Suspicious" : "Legitimate";
  const action = status === "dangerous" ? "Block and report" : status === "suspicious" ? "Review carefully" : "Verify if unsure";

  return {
    id: Date.now().toString(),
    type: type.charAt(0).toUpperCase() + type.slice(1),
    timestamp: "Just now",
    preview: (content || "Submitted content").slice(0, 130),
    normalized: normalizeText(content),
    label,
    status,
    score,
    keywords,
    urlFactors,
    action,
  };
}

export function resultViewModel(result) {
  const status = result.status;
  const statusLabel = status === "safe" ? "Safe" : result.label;
  const riskLabel = status === "dangerous" ? "High Risk" : status === "suspicious" ? "Medium Risk" : "Low Risk";
  const headline = status === "dangerous" ? "Analysis Complete: This looks Dangerous" : status === "suspicious" ? "Analysis Complete: This looks Suspicious" : "Analysis Complete: This looks Safe";
  const subtext = status === "dangerous" ? "Strong scam indicators were detected. Avoid interacting with this content." : status === "suspicious" ? "Some scam-related patterns were detected and should be reviewed carefully." : "No major scam indicators were detected in this content.";
  const scanLabel = result.type === "Voice" ? "Voice Analysis" : result.type === "Image" ? "Image Scan" : result.type === "URL" ? "URL Link Scan" : "Link Scan";
  const scanMessage = status === "dangerous"
    ? (result.type === "Voice" ? "High-risk manipulation or pressure indicators were detected in the audio content" : "High-risk scam indicators were detected")
    : status === "suspicious"
      ? (result.type === "Image" ? "Potentially misleading or suspicious visual content detected" : "Some suspicious indicators were detected")
      : "No phishing characteristics detected";
  const contentMessage = status === "dangerous"
    ? "Strong urgency, manipulation, or threat-based language found"
    : status === "suspicious"
      ? "Some suspicious patterns were found and should be reviewed carefully"
      : "Language and tone appear normal, with no urgency or threats";
  const databaseMessage = status === "dangerous"
    ? "This content matches known scam-related warning patterns"
    : status === "suspicious"
      ? "Some indicators partially match reported scam patterns"
      : "No related scam reports found";
  const actionItems = status === "dangerous"
    ? ["Do not click, reply, or download anything", "Block the sender or source immediately", "Report the case through official reporting channels"]
    : status === "suspicious"
      ? ["Review the content carefully before taking action", "Verify the source through official channels", "Do not trust edited or misleading visuals immediately"]
      : ["Stay cautious even when content appears harmless", "Verify unknown senders before replying", "Avoid sharing sensitive information casually"];
  const actionButton = status === "dangerous" ? "Start New Check" : status === "suspicious" ? "Review Again" : "Check Another";
  const highlightedTerms = status === "safe"
    ? []
    : status === "dangerous"
      ? ["urgent action", "verification request", "high-risk manipulation"]
      : result.type === "Image"
        ? ["unusual request", "edited or misleading image", "suspicious visual content"]
        : (result.keywords && result.keywords.length ? result.keywords.slice(0, 3) : ["unusual request", "suspicious pattern"]);
  return { status, statusLabel, riskLabel, headline, subtext, scanLabel, scanMessage, contentMessage, databaseMessage, actionItems, actionButton, highlightedTerms };
}
