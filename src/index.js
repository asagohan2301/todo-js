// TODOリストを追加するクリックイベント ----------------
document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});

// 入力値から未完了リストに追加する関数 ----------------
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了リストに追加する関数呼び出し
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する関数 ----------------
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数 ----------------
const createIncompleteList = (text) => {
  // div 生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li 生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 完了ボタンのクリックイベント
  completeButton.addEventListener("click", () => {
    // 削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加 ----
    // 追加する要素を取得
    const addTarget = completeButton.parentNode;
    // 表示するテキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    // li 生成
    const li = document.createElement("li");
    li.innerText = text;
    // 戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻すボタンのクリックイベント
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      const backText = deleteTarget.firstElementChild.innerText;
      deleteTarget.remove();
      createIncompleteList(backText);
    });

    // addTargetの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタンのクリックイベント
  deleteButton.addEventListener("click", () => {
    // 削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
