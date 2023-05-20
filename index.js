const convertMarkdownToHtml = () => {
  const markdownText = document.getElementById('markdown-text').value;
  let html = marked.parse(markdownText);
  html = DOMPurify.sanitize(html);
  document.getElementById('richtext').innerHTML = html;
};

document.getElementById('submit-markdown-button').addEventListener('click', convertMarkdownToHtml);


