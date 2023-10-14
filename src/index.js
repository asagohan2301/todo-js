// TODOリストの追加

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div 生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li 生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button 生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});

// document.querySelector(".add-button").addEventListener("click", () => {

//   const li = document.createElement("li");
//   li.textContent = document.querySelector("input").value;

//   const DidButton = document.createElement("button");
//   DidButton.textContent = "完了";
//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "削除";

//   div.appendChild(li);
//   div.appendChild(DidButton);
//   div.appendChild(deleteButton);

//   document.querySelector(".incomplete-area ul").appendChild(div);
// });
