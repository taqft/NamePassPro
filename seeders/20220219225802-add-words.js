'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Word', [{
        word: "be",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "have",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "do",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "would",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "will",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "can",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "know",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "see",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "may",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "should",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "get",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "think",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "go",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "make",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "must",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "take",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "come",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "say",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "put",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "want",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "give",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "look",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "find",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "need",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "like",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "set",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "use",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "become",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "tell",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "keep",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "help",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "work",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "let",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "feel",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "provide",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "believe",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "try",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "shall",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "ask",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "remember",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "leave",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "show",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "pay",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "run",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "read",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "seem",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "include",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "bring",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "understand",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "does",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "knows",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "sees",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "gets",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "thinks",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "goes",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "makes",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "takes",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "comes",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "says",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "puts",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "wants",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "gives",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "looks",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "finds",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "needs",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "likes",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "sets",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "uses",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "becomes",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "tells",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "keeps",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "helps",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "works",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "lets",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "feels",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "provides",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "believes",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "tries",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "asks",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "remembers",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "leaves",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "protect",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "identify",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "visit",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "care",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "enable",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "affect",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "claim",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "note",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "obtain",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "represent",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "contain",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "beat",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "spread",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "worry",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "bear",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "shut",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "wonder",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "afford",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "fit",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "kill",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "regard",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "describe",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "place",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "drive",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "wear",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "argue",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "involve",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "lie",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "contact",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "catch",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "assume",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "indicate",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "operate",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "manage",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "cope",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "remove",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "determine",
        is_verb: 1,
        is_noun: 0
      },
      {
        word: "fight",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "time",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "way",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "year",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "work",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "government",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "day",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "man",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "world",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "life",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "part",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "house",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "course",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "case",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "system",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "place",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "end",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "group",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "company",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "party",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "information",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "school",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "fact",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "money",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "point",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "example",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "state",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "business",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "night",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "area",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "water",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "thing",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "family",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "head",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "hand",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "order",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "john",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "side",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "home",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "development",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "week",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "power",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "country",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "council",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "use",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "service",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "room",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "market",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "problem",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "court",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "lot",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "a",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "war",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "police",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "interest",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "car",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "law",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "road",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "form",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "face",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "education",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "policy",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "research",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "sort",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "office",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "body",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "person",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "health",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "mother",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "question",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "period",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "name",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "book",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "level",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "child",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "control",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "society",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "minister",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "view",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "door",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "line",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "community",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "south",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "city",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "god",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "father",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "centre",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "effect",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "staff",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "position",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "kind",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "job",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "woman",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "action",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "management",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "act",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "process",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "north",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "age",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "evidence",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "idea",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "west",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "support",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "moment",
        is_verb: 0,
        is_noun: 1
      },
      {
        word: "sense",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "report",
        is_verb: 1,
        is_noun: 1
      },
      {
        word: "mind",
        is_verb: 1,
        is_noun: 1
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('word', null, {});
  }
};
