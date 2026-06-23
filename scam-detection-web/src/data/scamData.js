export const keywordPatterns = [
  "otp",
  "password",
  "urgent",
  "verify",
  "bank",
  "winner",
  "reward",
  "prize",
  "claim",
  "click",
  "limited",
  "account",
  "suspended",
  "download",
  "apk",
  "transfer",
  "payment",
  "login",
  "free",
];

export const highRiskTerms = ["otp", "password", "urgent", "suspended", "apk", "download", "transfer", "verify"];
export const suspiciousDomains = ["bit.ly", "tinyurl", "free", "gift", "claim", "login", "verify", "apk"];

export const tabs = [
  { key: "text", label: "Text", icon: "file-text" },
  { key: "image", label: "Image", icon: "image" },
  { key: "voice", label: "Voice", icon: "mic" },
  { key: "url", label: "URL", icon: "link" },
];

export const featureCards = [
  {
    icon: "message-square",
    title: "Text Analysis",
    text: "Analyze text messages and emails for potential scam content.",
    tone: "blue",
  },
  {
    icon: "image",
    title: "Image Scanning",
    text: "Detect scam activity in images such as fake receipts and documents.",
    tone: "green",
  },
  {
    icon: "mic",
    title: "Voice Recognition",
    text: "Scan suspicious voice messages and detect scam patterns.",
    tone: "purple",
  },
  {
    icon: "link",
    title: "URL Verification",
    text: "Check suspicious links to reveal scam websites and phishing attempts.",
    tone: "orange",
  },
];

export const scamTypes = [
  { id: "romance", icon: "heart-handshake", title: "Romance Scam", text: "Scammers build fake emotional relationships to gain trust and ask for money." },
  { id: "bank", icon: "landmark", title: "Bank Scam", text: "Fraudsters impersonate bank staff through calls, text messages, or fake alerts." },
  { id: "phishing", icon: "mail", title: "Phishing", text: "Fake emails, texts, or websites are used to steal login credentials and personal data." },
  { id: "shopping", icon: "shopping-cart", title: "Shopping Scam", text: "Fake online shops offer attractive deals but deliver nothing or poor-quality items." },
  { id: "customer-service", icon: "shield-alert", title: "Customer Service Scam", text: "Fraudsters pose as support teams or fake sellers to trick users into making payments." },
  { id: "delivery", icon: "truck", title: "Delivery Scams", text: "Fake shipping notifications ask victims to pay fees or install malicious software." },
  { id: "lottery", icon: "ticket", title: "Lottery", text: "Victims are told they won a prize but must pay fees or provide details first." },
  { id: "charity", icon: "hand-heart", title: "Charity", text: "Scammers exploit sympathy by pretending to raise funds for emergencies or relief efforts." },
];

export const scamTypeDetails = {
  romance: {
    title: "Romance Scam",
    summary: "Scammers build fake emotional relationships to gain trust and ask for money.",
    details: [
      "The scammer pretends to be caring, loving, and serious about the relationship.",
      "They often avoid real-life meetings or video calls and create excuses.",
      "After trust is built, they ask for money due to emergencies, travel issues, or investments.",
      "Victims are pressured to act quickly and keep the relationship private.",
    ],
  },
  phishing: {
    title: "Phishing",
    summary: "Fake emails, texts, or websites are used to steal login credentials and personal data.",
    details: [
      "Messages often look official and may copy trusted brands or services.",
      "They ask you to click a link, verify an account, or update payment information.",
      "The fake page is designed to capture usernames, passwords, or card details.",
      "Always check the sender, URL, and spelling before interacting.",
    ],
  },
  "customer-service": {
    title: "Customer Service Scam",
    summary: "Fraudsters pose as support teams or fake sellers to trick users into making payments.",
    details: [
      "They claim there is a problem with your order or account.",
      "They may ask you to pay extra fees, share OTP codes, or install remote apps.",
      "The message often looks urgent to stop you from thinking carefully.",
      "Always verify directly through the official app or website.",
    ],
  },
  lottery: {
    title: "Lottery",
    summary: "Victims are told they won a prize but must pay fees or provide details first.",
    details: [
      "You are informed that you won a lottery or reward you never entered.",
      "The scammer asks for processing fees, tax payments, or personal information.",
      "The goal is to steal money or sensitive identity data.",
      "Legitimate prize providers do not usually require advance payment to claim winnings.",
    ],
  },
  bank: {
    title: "Bank Scam",
    summary: "Fraudsters impersonate bank staff through calls, text messages, or fake alerts.",
    details: [
      "They claim your account is blocked, hacked, or involved in suspicious activity.",
      "They create urgency and ask for OTP, TAC, password, or banking details.",
      "Some send fake links that look like official bank websites.",
      "Real banks do not ask for sensitive credentials through random calls or messages.",
    ],
  },
  shopping: {
    title: "Shopping Scam",
    summary: "Fake online shops offer attractive deals but deliver nothing or poor-quality items.",
    details: [
      "Scammers use very low prices to attract buyers quickly.",
      "They may use stolen product images and fake reviews.",
      "Payment is usually requested through risky or irreversible methods.",
      "After payment, the seller may disappear, delay shipping, or send the wrong item.",
    ],
  },
  delivery: {
    title: "Delivery Scams",
    summary: "Fake shipping notifications ask victims to pay fees or install malicious software.",
    details: [
      "You may receive a message saying your parcel cannot be delivered.",
      "It often includes a suspicious link to pay a small fee or confirm delivery.",
      "Some links lead to phishing pages or malware downloads.",
      "Check delivery status only through the courier's official website or app.",
    ],
  },
  charity: {
    title: "Charity",
    summary: "Scammers exploit sympathy by pretending to raise funds for emergencies or relief efforts.",
    details: [
      "They use emotional stories, disaster relief claims, or fake medical cases.",
      "Photos and stories may be stolen from real situations.",
      "Victims are pressured to donate immediately without checking authenticity.",
      "Always verify the charity or fundraiser through trusted official channels.",
    ],
  },
};

export const guideCards = {
  platform: [
    {
      id: "whatsapp",
      icon: "message-circle",
      tone: "green",
      title: "WhatsApp Security Guides",
      bullets: ["Enable two-step verification.", "Scan images for suspicious content.", "Ignore group invites from unknown contacts."],
    },
    {
      id: "sms",
      icon: "message-square",
      tone: "orange",
      title: "SMS Fraud Prevention",
      bullets: ["Detect phishing links.", "Verify service notifications.", "Do not share verification codes."],
    },
    {
      id: "social",
      icon: "users",
      tone: "blue",
      title: "Social Media Account Safety",
      bullets: ["Watch for impersonation scams.", "Check login activity.", "Enable enhanced privacy settings."],
    },
    {
      id: "email",
      icon: "mail",
      tone: "brown",
      title: "Email Phishing Defense",
      bullets: ["Inspect sender address.", "Scan all attachments.", "Recognize common red flags."],
    },
  ],
  banking: [
    {
      id: "banking-login",
      icon: "landmark",
      tone: "blue",
      title: "Online Banking Login Safety",
      bullets: ["Use only official apps or websites.", "Avoid login links from messages.", "Check account activity notifications."],
    },
    {
      id: "card-protection",
      icon: "credit-card",
      tone: "orange",
      title: "Card & Transaction Protection",
      bullets: ["Review transactions regularly.", "Enable spending alerts.", "Never share PIN or CVV."],
    },
    {
      id: "loan-investment",
      icon: "wallet",
      tone: "purple",
      title: "Loan & Investment Scam Awareness",
      bullets: ["Question guaranteed returns.", "Verify financial institutions.", "Avoid upfront processing fees."],
    },
    {
      id: "bank-call",
      icon: "phone",
      tone: "brown",
      title: "Bank Call & OTP Scam Defense",
      bullets: ["Do not share OTP over calls.", "Verify the caller independently.", "Report suspicious banking calls."],
    },
  ],
};

export const guideDetails = {
  whatsapp: {
    title: "WhatsApp Security Guides",
    summary: "Learn how to reduce scam risks on WhatsApp by improving privacy settings, recognizing suspicious media, and avoiding contact-based tricks.",
    details: [
      "Enable two-step verification to reduce the risk of account takeover.",
      "Be careful with unknown images, links, and forwarded messages that create urgency.",
      "Ignore group invites from unknown contacts or suspicious business accounts.",
      "Do not share OTP codes, verification codes, or account recovery messages with anyone.",
      "Always verify payment requests or urgent stories through another trusted channel.",
    ],
  },
  social: {
    title: "Social Media Account Safety",
    summary: "Protect your social media accounts from impersonation, fake giveaways, account takeover attempts, and suspicious login activity.",
    details: [
      "Watch for impersonation scams that copy friend, influencer, or brand accounts.",
      "Review recent login activity and remove devices you do not recognize.",
      "Use strong passwords and enable extra security settings like two-factor authentication.",
      "Be careful with giveaway links, fake support accounts, and DM-based payment requests.",
      "Avoid logging into social platforms through unknown third-party links.",
    ],
  },
  sms: {
    title: "SMS Fraud Prevention",
    summary: "Understand common SMS scam tactics such as fake delivery alerts, account warnings, and phishing links that try to steal personal or banking details.",
    details: [
      "Do not click links in unexpected SMS messages, especially those claiming account issues or parcel delays.",
      "Check the sender carefully because scammers often imitate official names.",
      "Never share verification codes, TAC numbers, or banking login details through SMS or chat.",
      "Be cautious with urgent language like 'account suspended' or 'immediate action required'.",
      "When in doubt, open the official app or contact the real company directly.",
    ],
  },
  email: {
    title: "Email Phishing Defense",
    summary: "Learn how to detect phishing emails, suspicious attachments, fake sender identities, and social engineering attempts in your inbox.",
    details: [
      "Check the sender address carefully because fake emails often look similar to trusted domains.",
      "Avoid opening unexpected attachments, especially invoices, password-protected files, or urgent documents.",
      "Do not trust emails that pressure you to act immediately or threaten account suspension.",
      "Hover over links before clicking and verify the domain destination.",
      "Report suspicious emails and confirm sensitive requests with the official organization.",
    ],
  },
  "banking-login": {
    title: "Online Banking Login Safety",
    summary: "Stay safe when logging into online banking by avoiding fake login pages, insecure devices, and suspicious urgent prompts.",
    details: [
      "Always access online banking from the official app or by typing the bank website yourself.",
      "Do not log in through links sent by SMS, email, or chat messages.",
      "Check for suspicious design differences, unusual URLs, and missing security details.",
      "Avoid using public Wi-Fi or shared devices for banking access.",
      "Enable transaction notifications so you can spot unusual account activity quickly.",
    ],
  },
  "loan-investment": {
    title: "Loan & Investment Scam Awareness",
    summary: "Recognize fake loan offers, guaranteed investment returns, and scam messages pretending to be from licensed financial institutions.",
    details: [
      "Be suspicious of guaranteed profits, instant approvals, or offers with no verification process.",
      "Check whether the company is properly registered before sending any payment or documents.",
      "Do not pay upfront processing fees for loans or investment releases.",
      "Avoid sharing payslips, IC details, banking details, or selfies with unknown agents.",
      "Contact the financial institution directly through official channels to verify the offer.",
    ],
  },
  "card-protection": {
    title: "Card & Transaction Protection",
    summary: "Reduce the risk of card fraud by protecting card details, reviewing transactions, and spotting unauthorized charges early.",
    details: [
      "Do not save card details on unknown or suspicious websites.",
      "Review your transaction history regularly for unfamiliar purchases or small test charges.",
      "Turn on spending alerts and instant transaction notifications.",
      "Never share CVV numbers, PINs, or TAC codes with anyone.",
      "Freeze or block your card immediately if you suspect misuse.",
    ],
  },
  "bank-call": {
    title: "Bank Call & OTP Scam Defense",
    summary: "Prevent social engineering fraud where scammers pretend to be bank officers and pressure victims into revealing OTP or account details.",
    details: [
      "Banks do not ask for OTP, TAC, PIN, or full password over phone calls or chat messages.",
      "Be cautious if the caller uses fear tactics about suspicious transactions or account blocking.",
      "Hang up and call the bank back using the official number from the website or app.",
      "Do not approve device binding, app reset, or transfer requests unless you initiated them yourself.",
      "Report suspicious calls immediately and secure your account if any details were exposed.",
    ],
  },
};

export const faqItems = [
  {
    icon: "circle-help",
    tag: "General Question",
    tone: "blue",
    question: "How does Veto's scam detection work?",
    answer: "Veto analyzes submitted content such as text, links, images, and voice transcripts to detect scam-related patterns. It checks for suspicious language, phishing indicators, urgency cues, impersonation attempts, and known fraud signals before returning a risk-based result.",
  },
  {
    icon: "lock",
    tag: "Security & Privacy",
    tone: "cyan",
    question: "Is my data safe with Veto?",
    answer: "Yes. Veto is designed with privacy in mind. Submitted content is processed securely, and access to results is restricted to the user. Sensitive information should still be shared carefully, and users should avoid uploading unnecessary personal data whenever possible.",
  },
  {
    icon: "file-text",
    tag: "General Question",
    tone: "blue",
    question: "What types of content can Veto analyze?",
    answer: "Veto can analyze suspicious text, links, screenshots, documents, and transcribed voice content. The system is designed to support common scam-reporting formats and help users review content before they take action.",
  },
  {
    icon: "wrench",
    tag: "Technical",
    tone: "purple",
    question: "Can Veto be integrated with my existing platforms?",
    answer: "Yes. Integration support depends on your use case. Veto can be adapted for internal workflows, enterprise screening processes, and external verification flows depending on product scope and implementation requirements.",
  },
  {
    icon: "circle-help",
    tag: "General Question",
    tone: "blue",
    question: "How accurate are the results?",
    answer: "Veto provides risk-based guidance, not a legal or absolute judgment. Accuracy depends on the quality and completeness of the submitted content. Users should use the result together with common sense and official verification channels.",
  },
];

export const privacySections = [
  ["Introduction", "This Privacy Policy explains how the Scam Detection System collects, uses, and protects your information when you use our service. We are committed to maintaining the privacy and security of your data."],
  ["Information We Collect", "We collect information that you voluntarily provide when using our scam detection service, including text content, uploaded images, voice recordings, and URLs submitted for analysis. We may also collect usage data and analytics to improve our service."],
  ["How We Use Information", "The information you submit is used solely for scam detection and analysis purposes. We use machine learning algorithms to analyze patterns and identify potential threats. Your data helps us improve our detection accuracy and train our models."],
  ["File Uploads and Analysis Data", "When you upload files for analysis, they are processed on our secure servers. Uploaded content is analyzed in real-time and is not permanently stored unless required for system testing, improvement, or legal compliance. Images are processed using OCR technology, and voice files are converted to text using speech-to-text services."],
  ["Data Storage and Retention", "Analysis history is stored locally in your browser using local storage. We do not permanently store your submitted content on our servers after analysis is complete, unless you explicitly save it or it's required for improving our detection algorithms with your consent."],
  ["Security Measures", "We implement industry-standard security measures to protect your data, including encryption during transmission, secure server infrastructure, and access controls. However, no method of transmission over the internet is 100% secure."],
  ["Third-Party Services", "Our service may utilize third-party APIs for OCR, speech-to-text, and URL analysis. These services are carefully selected and comply with data protection standards. We do not share your personal information with third parties for marketing purposes."],
  ["User Rights", "You have the right to access, correct, or delete your data. Since most data is stored locally in your browser, you can clear your history at any time. For any server-side data, please contact us to exercise your rights."],
  ["Contact Information", "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@scamdetection.system or through our support page."],
];

export const termsSections = [
  ["Acceptance of Terms", "By accessing and using the Scam Detection System, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service."],
  ["Use of the Service", "The Scam Detection System is provided as a tool to help users identify potential scams and fraudulent content. The service analyzes text, images, voice recordings, and URLs to provide risk assessments and guidance. You may use this service for personal, educational, and informational purposes."],
  ["User Responsibilities", "You are responsible for the content you submit for analysis. You must not submit content that violates laws, infringes on intellectual property rights, or contains malicious code. You should not rely solely on our analysis for critical decisions and should verify suspicious content through multiple sources."],
  ["Prohibited Use", "You may not use this service to: (a) engage in any illegal activity, (b) attempt to bypass or manipulate the detection system, (c) submit an excessive volume of requests that could harm the service, (d) reverse engineer or copy our technology, or (e) use the service for any malicious purpose."],
  ["Accuracy of Results", "While we strive to provide accurate scam detection, the system provides analysis for informational purposes only and does not guarantee that all scams or malicious content will be detected. False positives and false negatives may occur. Users should exercise their own judgment and verify suspicious content before taking action."],
  ["Intellectual Property", "All content, features, and functionality of the Scam Detection System are owned by the project creators and are protected by copyright, trademark, and other intellectual property laws. The machine learning models, algorithms, and design are proprietary."],
  ["Limitation of Liability", "The Scam Detection System is provided 'as is' without warranties of any kind. We shall not be liable for any damages arising from your use of the service, including but not limited to direct, indirect, incidental, or consequential damages. This is an academic project and should not be used as the sole basis for important decisions."],
  ["Service Availability", "We do not guarantee that the service will be available at all times or free from errors. We reserve the right to modify, suspend, or discontinue the service at any time without notice, especially considering this is a Final Year Project with limited resources."],
  ["Changes to Terms", "We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the service after changes are posted constitutes acceptance of the modified terms."],
  ["Contact Information", "If you have questions about these Terms of Service, please contact us at support@scamdetection.system or through our support page."],
];

export const cookieSections = [
  ["Essential Browser Storage", "VETO uses local browser storage to remember scam check history and keep the prototype usable without requiring an account. This storage stays on your device and can be cleared from the History page or browser settings."],
  ["Analysis Preferences", "The system may remember interface preferences such as selected tabs or reviewed extracted text during the current session. These preferences support the checking workflow and do not require marketing cookies."],
  ["Clearing Your Data", "You can clear local history using the Clear All button on the Check History page. You can also clear browser site data from your browser settings to remove stored prototype data."],
  ["Third-Party Services", "If OCR, speech-to-text, or URL checking services are connected in a future backend version, those services may apply their own cookie or telemetry policies. This prototype keeps that scope minimal."],
  ["Contact Information", "For cookie or browser storage questions, contact support@scamdetection.system."],
];

export const aiSections = [
  ["Purpose", "This system demonstrates a safe scam checking workflow for Final Year Project scope. It supports manual text, OCR text from images, STT transcripts from voice recordings, and non-executing URL checks."],
  ["AI and Safety", "The intended backend model uses a single machine learning text classifier across all converted text inputs. URL inspection focuses on safe indicators such as suspicious formats, redirect patterns, and download hints without opening risky pages."],
  ["Limitations", "Results are risk predictions and user guidance only. Users should still verify senders, avoid sharing sensitive information, and report suspicious content through trusted channels."],
];
