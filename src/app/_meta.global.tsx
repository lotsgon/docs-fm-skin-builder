import type { MetaRecord } from "nextra";

const GETTING_STARTED: MetaRecord = {
  installation: "Installation",
  "first-skin": "Your First Skin",
  "interface-tour": "Interface Tour",
};

const WORKSPACE: MetaRecord = {
  "creating-skins": "Creating Skins",
  "file-browser": "File Browser",
  "skin-config": "Skin Configuration",
};

const EDITORS: MetaRecord = {
  "editor-modes": "Simple vs Expert Mode",
  "css-editor": "CSS Editor",
  "uxml-editor": "UXML Editor",
  "config-editor": "Config Editor",
  "mapping-editor": "Mapping Editor",
  "table-view-editor": "Table View Editor",
  "tile-layout-editor": "Tile Layout Editor",
};

const ASSETS: MetaRecord = {
  "texture-replacement": "Texture Replacement",
  "sprite-atlases": "Sprite Atlases",
  "font-replacement": "Font Replacement",
};

const BUILDING: MetaRecord = {
  "preview-build": "Preview Build",
  "full-build": "Full Build",
  "applying-to-game": "Applying to Game",
  "backup-restore": "Backup & Restore",
};

const REFERENCES: MetaRecord = {
  "config-schema": "Config Schema",
};

const TROUBLESHOOTING: MetaRecord = {
  "common-issues": "Common Issues",
};

const COMMUNITY: MetaRecord = {};

export default {
  index: "Documentation",
  "getting-started": {
    title: "Getting Started",
    items: GETTING_STARTED,
  },
  _features: {
    type: "separator",
    title: "Features",
  },
  workspace: {
    title: "Workspace",
    items: WORKSPACE,
  },
  editors: {
    title: "Editors",
    items: EDITORS,
  },
  assets: {
    title: "Assets",
    items: ASSETS,
  },
  building: {
    title: "Building",
    items: BUILDING,
  },
  _help: {
    type: "separator",
    title: "Help",
  },
  "unity-docs": {
    title: "Unity UI Toolkit Docs ↗",
    href: "https://docs.unity3d.com/6000.3/Documentation/Manual/UIElements.html",
  },
  references: {
    title: "References",
    items: REFERENCES,
  },
  troubleshooting: {
    title: "Troubleshooting",
    items: TROUBLESHOOTING,
  },
  community: {
    title: "Community",
    items: COMMUNITY,
  },
  "download-link": {
    title: "Download FM Skin Builder",
    href: "https://fmskinbuilder.com/download",
  },
  "about-link": {
    title: "About",
    href: "https://fmskinbuilder.com/about",
  },
} as MetaRecord;
