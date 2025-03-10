import "../styles/main.css";

function gridCellDimensions() {
    const element = document.createElement("div");
    element.style.position = "fixed";
    element.style.height = "var(--line-height)";
    element.style.width = "1ch";
    document.body.appendChild(element);
    const rect = element.getBoundingClientRect();
    document.body.removeChild(element);
    return { width: rect.width, height: rect.height };
  }
  
  function adjustMediaPadding() {
    const cell = gridCellDimensions();
  
    function setHeightFromRatio(media, ratio) {
        const rect = media.getBoundingClientRect();
        const realHeight = rect.width / ratio;
        const diff = cell.height - (realHeight % cell.height);
        media.style.setProperty("padding-bottom", `${diff}px`);
    }
  
    function setFallbackHeight(media) {
        const rect = media.getBoundingClientRect();
        const height = Math.round((rect.width / 2) / cell.height) * cell.height;
        media.style.setProperty("height", `${height}px`);
    }
  
    function onMediaLoaded(media) {
      var width, height;
      switch (media.tagName) {
        case "IMG":
          width = media.naturalWidth;
          height = media.naturalHeight;
          break;
        case "VIDEO":
          width = media.videoWidth;
          height = media.videoHeight;
          break;
      }
      if (width > 0 && height > 0) {
        setHeightFromRatio(media, width / height);
      } else {
        setFallbackHeight(media);
      }
    }
  
    const medias = document.querySelectorAll("img, video");
    for (media of medias) {
      switch (media.tagName) {
        case "IMG":
          if (media.complete) {
            onMediaLoaded(media);
          } else {
            media.addEventListener("load", () => onMediaLoaded(media));
            media.addEventListener("error", function() {
                setFallbackHeight(media);
            });
          }
          break;
        case "VIDEO":
          switch (media.readyState) {
            case HTMLMediaElement.HAVE_CURRENT_DATA:
            case HTMLMediaElement.HAVE_FUTURE_DATA:
            case HTMLMediaElement.HAVE_ENOUGH_DATA:
              onMediaLoaded(media);
              break;
            default:
              media.addEventListener("loadeddata", () => onMediaLoaded(media));
              media.addEventListener("error", function() {
                setFallbackHeight(media);
              });
              break;
          }
          break;
      }
    }
  }
  
  adjustMediaPadding();
  window.addEventListener("load", adjustMediaPadding);
  window.addEventListener("resize", adjustMediaPadding);
  
  function checkOffsets() {
    const ignoredTagNames = new Set([
      "THEAD",
      "TBODY",
      "TFOOT",
      "TR",
      "TD",
      "TH",
    ]);
    const cell = gridCellDimensions();
    const elements = document.querySelectorAll("body :not(.debug-grid, .debug-toggle)");
    for (const element of elements) {
      if (ignoredTagNames.has(element.tagName)) {
        continue;
      }
      const rect = element.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) {
        continue;
      }
      const top = rect.top + window.scrollY;
      const left = rect.left + window.scrollX;
      const offset = top % (cell.height / 2);
      if(offset > 0) {
        element.classList.add("off-grid");
        console.error("Incorrect vertical offset for", element, "with remainder", top % cell.height, "when expecting divisible by", cell.height / 2);
      } else {
        element.classList.remove("off-grid");
      }
    }
  }


/* the code starts here */
document.getElementById("newTaskButton").addEventListener("click", togglePopup);
document.getElementById("TDSubmit").addEventListener("click", submit);
document.getElementById("Xbutton").addEventListener("click", togglePopup);

let tasksArray = JSON.parse(localStorage.getItem("tasksList")) || [];
let i = tasksArray.length ? Math.max(...tasksArray.map(task => task.id)) + 1 : 1;

function loadTasks() {
  tasksArray = JSON.parse(localStorage.getItem("tasksList")) || [];
  tasksArray.forEach(task => {
    createTask(task);
  });
  if (tasksArray.length > 0) {
    i = Math.max(...tasksArray.map(task => task.id)) + 1;
  } else {
    i = 1;
  }
}

window.addEventListener("DOMContentLoaded", loadTasks);

function createTask(TDD) {
  if (!TDD.hasOwnProperty("id")) {
    TDD.id = i;
    i++;
  }
  const div = document.createElement("div");
  div.style.border = "var(--border-thickness) solid var(--text-color)";
  div.style.padding = "calc((var(--line-height) / 2)) calc(1ch - var(--border-thickness)/2 calc((var(--line-height) / 2) - (var(--border-thickness)))";
  div.style.lineHeight = "var(--line-height)";
  div.style.verticalAlign = "top";
  div.style.textAlign = "left";
  div.style.position = "relative";
  div.style.top = "calc(var(--line-height) / 2)";
  div.style.width = "calc(round(down, 100%, 1ch))";
  div.style.borderCollapse = "collapse";
  div.style.margin = "0 0 calc(var(--line-height) * 2)";
  div.style.paddingLeft = "10px";
  div.id = `taskDiv${TDD.id}`;
  div.dataset.taskId = TDD.id;
  const title = document.createElement("p");
  const date = document.createElement("p");
  const description = document.createElement("p");
  title.innerHTML = TDD.title;
  date.innerHTML = TDD.date;
  description.innerHTML = TDD.description;
  document.getElementById("tasks").appendChild(div);
  div.appendChild(title);
  div.appendChild(date);
  div.appendChild(description);
  const button1 = document.createElement("button");
  button1.style.position = "absolute";
  button1.style.right = "0";
  button1.style.top = "40px";
  button1.innerHTML = "Done!";
  button1.id = "doneButton";
  button1.name = `${TDD.id}`;
  button1.addEventListener("click", function() {
    done(div);
  });
  div.appendChild(button1);
}

function done(div) {
  const taskId = parseInt(div.dataset.taskId, 10);
  tasksArray = tasksArray.filter(task => task.id !== taskId);
  localStorage.setItem("tasksList", JSON.stringify(tasksArray));
  document.getElementById("tasks").removeChild(div);
}

function submit() {
  const title = document.getElementById("TDTitle").value;
  const date = document.getElementById("TDDate").value;
  const description = document.getElementById("TDDescription").value;
  console.log(title + " " + date + " " + description);
  const TDD = { title, date, description };
  createTask(TDD);
  tasksArray.push(TDD);
  localStorage.setItem("tasksList", JSON.stringify(tasksArray));
  togglePopup();
}

function togglePopup() {
  const popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
