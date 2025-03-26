
export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export interface QuizResult {
  scoreRange: [number, number];
  title: string;
  description: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Ein Freund bietet dir ein geheimnisvolles Gras in einem Ziploc-Beutel an. Du:",
    options: [
      {
        id: "q1-a",
        text: "lehnst höflich ab und stellst deine Freundschaft in Frage.",
        isCorrect: true
      },
      {
        id: "q1-b",
        text: "sagst „Gras ist Gras" und nimmst es gerne an.",
        isCorrect: false
      },
      {
        id: "q1-c",
        text: "nimmst es, aber verurteilst denjenigen insgeheim.",
        isCorrect: false
      },
      {
        id: "q1-d",
        text: "sagst ja und verkaufst es dann sofort weiter.",
        isCorrect: false
      }
    ],
    feedbackCorrect: "Mystery Weed? Ernsthaft? Das ist ja süß.",
    feedbackIncorrect: "Mystery Weed? Ernsthaft? Das ist ja süß."
  },
  {
    id: "q2",
    question: "Der Unterschied zwischen Indica und Sativa ist:",
    options: [
      {
        id: "q2-a",
        text: "Indica macht dich zum Couchpotato, Sativa macht dich gesellig.",
        isCorrect: false
      },
      {
        id: "q2-b",
        text: "Die eine Sorte wird draußen angebaut, die andere drinnen.",
        isCorrect: false
      },
      {
        id: "q2-c",
        text: "Hauptsächlich ein Marketing-Gag, es geht um Terpene und Cannabinoide.",
        isCorrect: true
      },
      {
        id: "q2-d",
        text: "Moment, gibt es da einen Unterschied?",
        isCorrect: false
      }
    ],
    feedbackCorrect: "Willkommen im 21. Jahrhundert des Cannabis.",
    feedbackIncorrect: "Willkommen im 21. Jahrhundert des Cannabis."
  },
  {
    id: "q3",
    question: "Terpene sind wichtig, weil:",
    options: [
      {
        id: "q3-a",
        text: "Terp-wer?",
        isCorrect: false
      },
      {
        id: "q3-b",
        text: "Sie klingen schick.",
        isCorrect: false
      },
      {
        id: "q3-c",
        text: "Sie beeinflussen natürlich die Wirkung und das Geschmacksprofil.",
        isCorrect: true
      },
      {
        id: "q3-d",
        text: "Mein Dealer hat mal etwas darüber gesagt.",
        isCorrect: false
      }
    ],
    feedbackCorrect: "Du machst uns stolz.",
    feedbackIncorrect: "Du machst uns stolz."
  },
  {
    id: "q4",
    question: "Was antwortest du, wenn jemand sagt: „Gras schmeckt doch immer gleich."?",
    options: [
      {
        id: "q4-a",
        text: "„Da stimme ich voll und ganz zu, Bruder."",
        isCorrect: false
      },
      {
        id: "q4-b",
        text: "Folge ihm sofort nicht mehr und blockiere ihn.",
        isCorrect: true
      },
      {
        id: "q4-c",
        text: "„Na ja, irgendwie stimmt das schon."",
        isCorrect: false
      },
      {
        id: "q4-d",
        text: "Nicke leise, aber plane eine Intervention.",
        isCorrect: false
      }
    ],
    feedbackCorrect: "Man kann nicht vorsichtig genug mit seinem sozialen Umfeld sein.",
    feedbackIncorrect: "Man kann nicht vorsichtig genug mit seinem sozialen Umfeld sein."
  },
  {
    id: "q5",
    question: "Was ist für dich am schlimmsten?",
    options: [
      {
        id: "q5-a",
        text: "Mischungen verschiedener Sorten in derselben Tüte.",
        isCorrect: false
      },
      {
        id: "q5-b",
        text: "Jede Sorte „Kush" nennen.",
        isCorrect: false
      },
      {
        id: "q5-c",
        text: "Der Satz „Gras ist Gras".",
        isCorrect: false
      },
      {
        id: "q5-d",
        text: "Alle der oben genannten Dinge machen mich körperlich krank.",
        isCorrect: true
      }
    ],
    feedbackCorrect: "Wir entschuldigen uns für das Trauma, das durch das Lesen dieser Fragen verursacht wird.",
    feedbackIncorrect: "Wir entschuldigen uns für das Trauma, das durch das Lesen dieser Fragen verursacht wird."
  },
  {
    id: "q6",
    question: "Du besuchst eine Ausgabestelle. Was ist deine erste Frage?",
    options: [
      {
        id: "q6-a",
        text: "„Was ist das Günstigste, das ihr habt?"",
        isCorrect: false
      },
      {
        id: "q6-b",
        text: "‚Was ist gut?"",
        isCorrect: false
      },
      {
        id: "q6-c",
        text: "'Welche Terpene sind in euren Top-Sorten enthalten?"",
        isCorrect: true
      },
      {
        id: "q6-d",
        text: "\"Verkauft ihr hier Snacks?\"",
        isCorrect: false
      }
    ],
    feedbackCorrect: "Richtig. Du bist der Kunde, vor dem sich die Budtender fürchten (und respektieren).",
    feedbackIncorrect: "Richtig. Du bist der Kunde, vor dem sich die Budtender fürchten (und respektieren)."
  },
  {
    id: "q7",
    question: "Beende den Satz: Cannabis sollte immer ...",
    options: [
      {
        id: "q7-a",
        text: "„... billig und reichlich vorhanden sein."",
        isCorrect: false
      },
      {
        id: "q7-b",
        text: "\"... sorgfältig ausgewählt und beschafft werden.\"",
        isCorrect: true
      },
      {
        id: "q7-c",
        text: "„Was auch immer ich bekommen kann."",
        isCorrect: false
      },
      {
        id: "q7-d",
        text: "‚Es ist wirklich egal."",
        isCorrect: false
      }
    ],
    feedbackCorrect: "Genau. Standards sind wichtig.",
    feedbackIncorrect: "Genau. Standards sind wichtig."
  },
  {
    id: "q8",
    question: "Wenn dein Dealer „Feuer" simst, ist dein erster Gedanke:",
    options: [
      {
        id: "q8-a",
        text: "„Oh gut, klingt echt."",
        isCorrect: false
      },
      {
        id: "q8-b",
        text: "„Toll. Noch eine bedeutungslose Beschreibung."",
        isCorrect: true
      },
      {
        id: "q8-c",
        text: "‚Zeit, in großen Mengen zu kaufen!"",
        isCorrect: false
      },
      {
        id: "q8-d",
        text: "'Das ist ein cooler Sortenname."",
        isCorrect: false
      }
    ],
    feedbackCorrect: "‚Fire' sagt dir absolut nichts. Respektiere dich selbst.",
    feedbackIncorrect: "‚Fire' sagt dir absolut nichts. Respektiere dich selbst."
  },
  {
    id: "q9",
    question: "Das Beste an Weed.de ist:",
    options: [
      {
        id: "q9-a",
        text: "Es ist eine weitere Weed-App, denke ich?",
        isCorrect: false
      },
      {
        id: "q9-b",
        text: "Meistens gute Preise.",
        isCorrect: false
      },
      {
        id: "q9-c",
        text: "Wer weiß? Ich habe es noch nicht ausprobiert.",
        isCorrect: false
      },
      {
        id: "q9-d",
        text: "Endlose Auswahl, Live-Bestand und Apothekenfreiheit – wenn du klug genug bist, damit umzugehen.",
        isCorrect: true
      }
    ],
    feedbackCorrect: "Genau. Wir hätten es selbst nicht besser sagen können (aber wir haben es getan).",
    feedbackIncorrect: "Genau. Wir hätten es selbst nicht besser sagen können (aber wir haben es getan)."
  }
];

export const quizResults: QuizResult[] = [
  {
    scoreRange: [0, 3],
    title: "Halte dich an die „Feuer"-Angebote deines Dealers.",
    description: "Unsere App könnte dich erschreckend weit fortgeschritten finden."
  },
  {
    scoreRange: [4, 6],
    title: "Fast respektabel, aber immer noch fragwürdig.",
    description: "Du hast Potenzial, aber Weed.de könnte dich überfordern."
  },
  {
    scoreRange: [7, 9],
    title: "Du bist offiziell ein Cannabis-Snob. Willkommen zu Hause.",
    description: "Du wirst dich hier wohlfühlen – betrachte Weed.de als dein neues Cannabis-Hauptquartier."
  }
];
