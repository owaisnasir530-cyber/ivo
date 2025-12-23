import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Chciałbym ustalić krąg spadkobierców w mojej sprawie. Jakich informacji potrzebujesz?",
    prompt: "Chciałbym ustalić krąg spadkobierców w mojej sprawie. Jakich informacji potrzebujesz?",
    icon: "circle-question",
  },
  {
    label: "Na czym polega wydziedziczenie?",
    prompt: "Na czym polega wydziedziczenie?",
    icon: "circle-question",
  },
  {
    label: "Czy należy mi się zachowek?",
    prompt: "Czy należy mi się zachowek?",
    icon: "circle-question",
  },
  {
    label: "Jak mam sporządzić testament?",
    prompt: "Jak mam sporządzić testament?",
    icon: "circle-question",
  },
  {
    label: "Czy muszę zapłacić podatek od spadku?",
    prompt: "Czy muszę zapłacić podatek od spadku?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Czekam na pytanie...";

export const GREETING = "W czym mogę Ci pomóc?";

// export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
//   color: {
//     grayscale: {
//       hue: 220,
//       tint: 6,
//       shade: theme === "dark" ? -1 : -4,
//     },
//     accent: {
//       primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
//       level: 1,
//     },
//   },
//   radius: "round",
//   // Add other theme options here
//   // chatkit.studio/playground to explore config options
// });


// change 1
// export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
//   color: {
//     grayscale: {
//       hue: 210,
//       tint: 5,
//       shade: theme === "dark" ? -2 : -4,
//     },
//     accent: {
//       primary: theme === "dark" ? "#60a5fa" : "#2563eb",
//       level: 1,
//     },
//   },
//   radius: "soft",
// });




export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 0,
      tint: 0,
      shade: 0,
    },
    accent: {
      primary: "#013362",  // Your dark blue
      level: 1,
    },
  },
  radius: "soft",
});