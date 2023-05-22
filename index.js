const convertMarkdownToHtml = () => {
  const markdownText = document.getElementById('markdown-text').value;
  let html = marked.parse(markdownText);
  html = DOMPurify.sanitize(html);
  countWords(markdownText);
  document.getElementById('text').innerHTML = html;
};

const countWords = (text) => {
  let words = text.split(/[\s,.?!;:"'(){}\[\]<>#\-0-9]+/);
  words = words.filter(function(word) {
      return word.trim() !== "";
  });

  document.querySelector(".text--wordcount").innerHTML = `Word count: ${words.length}`;
}

document.getElementById('submit-markdown-button').addEventListener('click', () => {
  convertMarkdownToHtml();
});
