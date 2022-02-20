'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Word', [{
        word: "be",
        is_verb: 1,
        is_noun: 0,
        length: 2
      },
      {
        word: "have",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "do",
        is_verb: 1,
        is_noun: 0,
        length: 2
      },
      {
        word: "would",
        is_verb: 1,
        is_noun: 0,
        length: 5
      },
      {
        word: "will",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "can",
        is_verb: 1,
        is_noun: 0,
        length: 3
      },
      {
        word: "know",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "see",
        is_verb: 1,
        is_noun: 0,
        length: 3
      },
      {
        word: "may",
        is_verb: 1,
        is_noun: 0,
        length: 3
      },
      {
        word: "should",
        is_verb: 1,
        is_noun: 0,
        length: 6
      },
      {
        word: "get",
        is_verb: 1,
        is_noun: 0,
        length: 3
      },
      {
        word: "think",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "go",
        is_verb: 1,
        is_noun: 1,
        length: 2
      },
      {
        word: "make",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "must",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "take",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "come",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "say",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "put",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "want",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "give",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "look",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "find",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "need",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "like",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "set",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "use",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "become",
        is_verb: 1,
        is_noun: 0,
        length: 6
      },
      {
        word: "tell",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "keep",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "help",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "work",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "let",
        is_verb: 1,
        is_noun: 0,
        length: 3
      },
      {
        word: "feel",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "provide",
        is_verb: 1,
        is_noun: 0,
        length: 7
      },
      {
        word: "believe",
        is_verb: 1,
        is_noun: 0,
        length: 7
      },
      {
        word: "try",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "shall",
        is_verb: 1,
        is_noun: 0,
        length: 5
      },
      {
        word: "ask",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "remember",
        is_verb: 1,
        is_noun: 0,
        length: 8
      },
      {
        word: "leave",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "show",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "pay",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "run",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "read",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "seem",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "include",
        is_verb: 1,
        is_noun: 0,
        length: 7
      },
      {
        word: "bring",
        is_verb: 1,
        is_noun: 0,
        length: 5
      },
      {
        word: "understand",
        is_verb: 1,
        is_noun: 0,
        length: 10
      },
      {
        word: "does",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "knows",
        is_verb: 1,
        is_noun: 0,
        length: 5
      },
      {
        word: "sees",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "gets",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "thinks",
        is_verb: 1,
        is_noun: 0,
        length: 6
      },
      {
        word: "goes",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "makes",
        is_verb: 1,
        is_noun: 0,
        length: 5
      },
      {
        word: "takes",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "comes",
        is_verb: 1,
        is_noun: 0,
        length: 5
      },
      {
        word: "says",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "puts",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "wants",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "gives",
        is_verb: 1,
        is_noun: 0,
        length: 5
      },
      {
        word: "looks",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "finds",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "needs",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "likes",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "sets",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "uses",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "becomes",
        is_verb: 1,
        is_noun: 0,
        length: 7
      },
      {
        word: "tells",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "keeps",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "helps",
        is_verb: 1,
        is_noun: 0,
        length: 5
      },
      {
        word: "works",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "lets",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "feels",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "provides",
        is_verb: 1,
        is_noun: 0,
        length: 8
      },
      {
        word: "believes",
        is_verb: 1,
        is_noun: 0,
        length: 8
      },
      {
        word: "tries",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "asks",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "remembers",
        is_verb: 1,
        is_noun: 0,
        length: 9
      },
      {
        word: "leaves",
        is_verb: 1,
        is_noun: 1,
        length: 6
      },
      {
        word: "protect",
        is_verb: 1,
        is_noun: 1,
        length: 7
      },
      {
        word: "identify",
        is_verb: 1,
        is_noun: 0,
        length: 8
      },
      {
        word: "visit",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "care",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "enable",
        is_verb: 1,
        is_noun: 0,
        length: 6
      },
      {
        word: "affect",
        is_verb: 1,
        is_noun: 0,
        length: 6
      },
      {
        word: "claim",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "note",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "obtain",
        is_verb: 1,
        is_noun: 0,
        length: 6
      },
      {
        word: "represent",
        is_verb: 1,
        is_noun: 0,
        length: 9
      },
      {
        word: "contain",
        is_verb: 1,
        is_noun: 0,
        length: 7
      },
      {
        word: "beat",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "spread",
        is_verb: 1,
        is_noun: 1,
        length: 6
      },
      {
        word: "worry",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "bear",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "shut",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "wonder",
        is_verb: 1,
        is_noun: 1,
        length: 6
      },
      {
        word: "afford",
        is_verb: 1,
        is_noun: 0,
        length: 6
      },
      {
        word: "fit",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "kill",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "regard",
        is_verb: 1,
        is_noun: 1,
        length: 6
      },
      {
        word: "describe",
        is_verb: 1,
        is_noun: 0,
        length: 8
      },
      {
        word: "place",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "drive",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "wear",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "argue",
        is_verb: 1,
        is_noun: 0,
        length: 5
      },
      {
        word: "involve",
        is_verb: 1,
        is_noun: 0,
        length: 7
      },
      {
        word: "lie",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "contact",
        is_verb: 1,
        is_noun: 1,
        length: 7
      },
      {
        word: "catch",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "assume",
        is_verb: 1,
        is_noun: 0,
        length: 6
      },
      {
        word: "indicate",
        is_verb: 1,
        is_noun: 0,
        length: 8
      },
      {
        word: "operate",
        is_verb: 1,
        is_noun: 0,
        length: 7
      },
      {
        word: "manage",
        is_verb: 1,
        is_noun: 0,
        length: 6
      },
      {
        word: "cope",
        is_verb: 1,
        is_noun: 0,
        length: 4
      },
      {
        word: "remove",
        is_verb: 1,
        is_noun: 0,
        length: 6
      },
      {
        word: "determine",
        is_verb: 1,
        is_noun: 0,
        length: 9
      },
      {
        word: "fight",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "time",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "way",
        is_verb: 0,
        is_noun: 1,
        length: 3
      },
      {
        word: "year",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "work",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "government",
        is_verb: 0,
        is_noun: 1,
        length: 10
      },
      {
        word: "day",
        is_verb: 0,
        is_noun: 1,
        length: 3
      },
      {
        word: "man",
        is_verb: 0,
        is_noun: 1,
        length: 3
      },
      {
        word: "world",
        is_verb: 0,
        is_noun: 1,
        length: 5
      },
      {
        word: "life",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "part",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "house",
        is_verb: 0,
        is_noun: 1,
        length: 5
      },
      {
        word: "course",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "case",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "system",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "place",
        is_verb: 0,
        is_noun: 1,
        length: 5
      },
      {
        word: "end",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "group",
        is_verb: 0,
        is_noun: 1,
        length: 5
      },
      {
        word: "company",
        is_verb: 0,
        is_noun: 1,
        length: 7
      },
      {
        word: "party",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "information",
        is_verb: 0,
        is_noun: 1,
        length: 11
      },
      {
        word: "school",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "fact",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "money",
        is_verb: 0,
        is_noun: 1,
        length: 5
      },
      {
        word: "point",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "example",
        is_verb: 1,
        is_noun: 1,
        length: 7
      },
      {
        word: "state",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "business",
        is_verb: 0,
        is_noun: 1,
        length: 8
      },
      {
        word: "night",
        is_verb: 0,
        is_noun: 1,
        length: 5
      },
      {
        word: "area",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "water",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "thing",
        is_verb: 0,
        is_noun: 1,
        length: 5
      },
      {
        word: "family",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "head",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "hand",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "order",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "john",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "side",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "home",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "development",
        is_verb: 0,
        is_noun: 1,
        length: 11
      },
      {
        word: "week",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "power",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "country",
        is_verb: 0,
        is_noun: 1,
        length: 7
      },
      {
        word: "council",
        is_verb: 1,
        is_noun: 1,
        length: 7
      },
      {
        word: "use",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "service",
        is_verb: 1,
        is_noun: 1,
        length: 7
      },
      {
        word: "room",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "market",
        is_verb: 1,
        is_noun: 1,
        length: 6
      },
      {
        word: "problem",
        is_verb: 0,
        is_noun: 1,
        length: 7
      },
      {
        word: "court",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "lot",
        is_verb: 0,
        is_noun: 1,
        length: 3
      },
      {
        word: "a",
        is_verb: 0,
        is_noun: 1,
        length: 1
      },
      {
        word: "war",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "police",
        is_verb: 1,
        is_noun: 1,
        length: 6
      },
      {
        word: "interest",
        is_verb: 0,
        is_noun: 1,
        length: 8
      },
      {
        word: "car",
        is_verb: 0,
        is_noun: 1,
        length: 3
      },
      {
        word: "law",
        is_verb: 0,
        is_noun: 1,
        length: 3
      },
      {
        word: "road",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "form",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "face",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "education",
        is_verb: 0,
        is_noun: 1,
        length: 9
      },
      {
        word: "policy",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "research",
        is_verb: 1,
        is_noun: 1,
        length: 8
      },
      {
        word: "sort",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "office",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "body",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "person",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "health",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "mother",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "question",
        is_verb: 1,
        is_noun: 1,
        length: 8
      },
      {
        word: "period",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "name",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "book",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "level",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "child",
        is_verb: 0,
        is_noun: 1,
        length: 5
      },
      {
        word: "control",
        is_verb: 1,
        is_noun: 1,
        length: 7
      },
      {
        word: "society",
        is_verb: 0,
        is_noun: 1,
        length: 7
      },
      {
        word: "minister",
        is_verb: 0,
        is_noun: 1,
        length: 8
      },
      {
        word: "view",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "door",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "line",
        is_verb: 1,
        is_noun: 1,
        length: 4
      },
      {
        word: "community",
        is_verb: 0,
        is_noun: 1,
        length: 9
      },
      {
        word: "south",
        is_verb: 0,
        is_noun: 1,
        length: 5
      },
      {
        word: "city",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "god",
        is_verb: 0,
        is_noun: 1,
        length: 3
      },
      {
        word: "father",
        is_verb: 1,
        is_noun: 1,
        length: 6
      },
      {
        word: "centre",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "effect",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "staff",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "position",
        is_verb: 0,
        is_noun: 1,
        length: 8
      },
      {
        word: "kind",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "job",
        is_verb: 0,
        is_noun: 1,
        length: 3
      },
      {
        word: "woman",
        is_verb: 0,
        is_noun: 1,
        length: 5
      },
      {
        word: "action",
        is_verb: 1,
        is_noun: 1,
        length: 6
      },
      {
        word: "management",
        is_verb: 0,
        is_noun: 1,
        length: 10
      },
      {
        word: "act",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "process",
        is_verb: 1,
        is_noun: 1,
        length: 7
      },
      {
        word: "north",
        is_verb: 0,
        is_noun: 1,
        length: 5
      },
      {
        word: "age",
        is_verb: 1,
        is_noun: 1,
        length: 3
      },
      {
        word: "evidence",
        is_verb: 0,
        is_noun: 1,
        length: 8
      },
      {
        word: "idea",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "west",
        is_verb: 0,
        is_noun: 1,
        length: 4
      },
      {
        word: "support",
        is_verb: 1,
        is_noun: 1,
        length: 7
      },
      {
        word: "moment",
        is_verb: 0,
        is_noun: 1,
        length: 6
      },
      {
        word: "sense",
        is_verb: 1,
        is_noun: 1,
        length: 5
      },
      {
        word: "report",
        is_verb: 1,
        is_noun: 1,
        length: 6
      },
      {
        word: "mind",
        is_verb: 1,
        is_noun: 1,
        length: 4
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('word', null, {});
  }
};
