import React from "react";

import githubImg from "../img/github.png";

function MenuFooter() {
  return (
    <div className="grow flex gap-3 items-end">
      <button>
        <img src={githubImg} />
      </button>
      <p>Created by Kyle Close</p>
    </div>
  );
}

export default MenuFooter;
