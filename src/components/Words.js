var programming_languages = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby",
  "fortran",
];

function randomWord() {
  return programming_languages[
    Math.floor(Math.random() * programming_languages.length)
  ];
}
console.log("h");
export { randomWord };
