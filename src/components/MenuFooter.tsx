import React from "react";

import githubImg from "../img/github.png";

function MenuFooter() {
  return (
    <div className="grow flex gap-3 items-end">
      <a href="https://github.com/Kyle-Close" target="_blank">
        <img src={githubImg} />
      </a>
      <p>Created by Kyle Close</p>
    </div>
  );
}

export default MenuFooter;
