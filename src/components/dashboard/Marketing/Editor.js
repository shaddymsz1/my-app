import React, { useState, useEffect } from "react";
// import { Editor, block } from "grapesjs-react";
import grapesjs from "grapesjs";
import grapjsPresetWebpages from "grapesjs-preset-webpage";
import thePlugin from "grapesjs-plugin-export";
import GrapesjsForms from "grapesjs-plugin-forms";
import savePlugin from "grapesjs-plugin-call-save";
import plugin from "grapesjs-indexeddb-ui";
import templates from "./templates.json";
// import {  } from "grapesjs-preset-webpage";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-indexeddb-ui/dist/grapesjs-indexeddb-ui.min.css";

import "./grapes.css";

const EditorComponent = () => {
  const [editor, setEditor] = useState();
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      // height: "100%",
      // fromElement: true,
      selectorManager: { componentFirst: true },
      storageManager: { type: "remote" },
      styleManager: { clearProperties: 1 },
      plugins: [
        grapjsPresetWebpages,
        thePlugin,
        GrapesjsForms,
        savePlugin,
        plugin,
      ],
      pluginsOpts: {
        [grapjsPresetWebpages]: { exportOpts: false },
        [thePlugin]: { filenamePfx: "xpcover" },
        [plugin]: {
          // Database name
          dbName: "gjs",

          // Collection name
          objectStoreName: { templates },

          // Indexeddb version schema
          indexeddbVersion: 4,

          // Load on schema upgrade
          addOnUpgrade: [
            {
              id: "Template 1",
              template: true,
              "gjs-html": "html...",
              "gjs-css": "css...",
              "gjs-components": "",
              "gjs-style": "",
            }, // Note prefix should be the same as storageManager id in this case 'gjs-'
            //...
          ],
        },
        // [GrapesjsForms]:{}
      },

      // fromElement: true,
      // height: "300px",
      // width: "auto",
    });
    editor.on("storage:store", function (e) {
      saveContent(); //your method where you store html content of document in DB using ajax
    });

    function saveContent() {
      console.log("saved worked");
    }
    //Add Panel Buttons
    const pn = editor.Panels;
    const panelOpts = pn.addPanel({
      id: "options",
    });
    panelOpts.get("buttons").add([
      {
        attributes: {
          title: "Open Templates",
        },
        className: "fa fa-paperclip",
        command: "open-templates", //Open modal with templates which can be used when creating new page
        id: "open-templates",
      },
      {
        attributes: {
          title: "Open Pages",
        },
        className: "fa fa-file-o",
        command: "open-pages", //Open modal listing your pages
        id: "open-pages",
      },
      {
        attributes: {
          title: "Save As Template",
        },
        className: "fa fa-archive",
        command: "save-as-template", //Save page as template
        id: "save-as-template",
      },
      {
        attributes: {
          title: "Delete from IDB",
        },
        className: "fa fa-trash-o",
        command: "delete-from-idb", //Delete open page or template
        id: "delete-from-idb",
      },
      {
        attributes: {
          title: "Take Screenshot",
        },
        className: "fa fa-camera",
        command: "take-screenshot", //Take an image of the canvas
        id: "take-screenshot",
      },
    ]);
    // editor.runCommand("open-templates");
    var borderRadius = "border-radius";
    var backgroundColor = "background-color";
    var marginBottom = "margin-bottom";
    var fontSize = "font-size";
    editor.CssComposer.setRule(".form", {
      padding: "10px 15px",
      [borderRadius]: "3px",
      [backgroundColor]: "rgba(0,0,0,0.2)",
    });
    editor.CssComposer.setRule(".input", {
      width: "100%",
      padding: "7px 10px",
      [borderRadius]: "2px",
      [marginBottom]: "15px",
      color: "#fff",
      [backgroundColor]: "#554c57",
      border: "none",
    });
    editor.CssComposer.setRule(".textarea", {
      width: "100%",
      padding: "7px 10px",
      [borderRadius]: "2px",
      [marginBottom]: "15px",
      color: "#fff",
      [backgroundColor]: "#554c57",
      border: "none",
    });
    editor.CssComposer.setRule(".button", {
      width: "100%",
      margin: "15px 0px",
      [borderRadius]: "2px",
      color: "#fff",
      [backgroundColor]: "#785580",
      border: "none",
      [fontSize]: "1em",
      padding: "7px 10px",
      cursor: "pointer",
    });
  }, []);

  return (
    <div>
      <div id="gjs">
        <div data-gjs-name="Text1">Text 2</div>
        <div>Text 2</div>
      </div>
      <div id="blocks"> </div>
    </div>
  );
};

export default EditorComponent;
