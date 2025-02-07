// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  
  // Manuals
  importersAndExportersSidebar: [{
    type: 'category',
    label: 'Importers and Exporters',
    link: { type: 'generated-index', slug: 'importers-and-exporters' },
    items: [{ type: 'autogenerated', dirName: 'importers-and-exporters' }],
    collapsed: false,
    collapsible: false,
  }],

  virtalisHubAndWebViewerSidebar: [{
    type: 'category',
    label: 'Virtalis Hub and Web Viewer',
    link: { type: 'generated-index', slug: 'virtalis-hub-and-web-viewer' },
    items: [{ type: 'autogenerated', dirName: 'virtalis-hub-and-web-viewer' }],
    collapsed: false,
    collapsible: false,
  }],

  visionaryRenderSidebar: [{
    type: 'category',
    label: 'Visionary Render',
    link: { type: 'generated-index', slug: 'visionary-render' },
    items: [{ type: 'autogenerated', dirName: 'visionary-render' }],
    collapsed: false,
    collapsible: false,
  }],

  // Guides
  virtalisHubSystemAdminSidebar: [{
    type: 'category',
    label: 'Virtalis Hub System Admin',
    link: { type: 'generated-index', slug: 'virtalis-hub-system-admin' },
    items: [{ type: 'autogenerated', dirName: 'virtalis-hub-system-admin' }],
    collapsed: false,
    collapsible: false,
  }],

  visionaryRenderProgrammingSidebar: [{
    type: 'category',
    label: 'Visionary Render Programming',
    link: { type: 'generated-index', slug: 'visionary-render-programming' },
    items: [{ type: 'autogenerated', dirName: 'visionary-render-programming' }],
    collapsed: false,
    collapsible: false,
  }],

  // Changelogs
  changelogsSidebar: [{
    type: 'category',
    label: 'Changelogs',
    link: { type: 'generated-index', slug: 'changelogs' },
    items: [{ type: 'autogenerated', dirName: 'changelogs' }],
    collapsed: false,
    collapsible: false,
  }],
};

export default sidebars;
