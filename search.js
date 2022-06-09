(function () {
  const appendRow = (keyword) => {
    let table = document.getElementById('result');
    let tr = document.createElement('tr');
    let keywordTd = document.createElement('td');
    let linkTd = document.createElement('td');
    let a = document.createElement('a');
    a.setAttribute('href', "https://www.google.com/search?q=" + encodeURI(keyword));
    a.append("https://www.google.com/search?q=" + encodeURI(keyword));
    a.setAttribute('target', '_blank');
    keywordTd.append(keyword);
    linkTd.appendChild(a);
    tr.appendChild(keywordTd);
    tr.appendChild(linkTd);
    table.appendChild(tr);
  };
  document.getElementById("generate").addEventListener("click", () => {
    const keywords = document.getElementById("keywords").value.split(',');
    for (const element of document.querySelectorAll('#result > tr')) {
      element.remove();
    }
    for (const k of keywords) {
      appendRow(k);
    }
  });
})()
