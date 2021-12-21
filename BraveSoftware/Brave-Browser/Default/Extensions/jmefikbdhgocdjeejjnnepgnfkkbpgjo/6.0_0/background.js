(function(w,
          storage,
          panels,
          browserAction) {
  const SETTINGS = 'devtools-settings';
  const DEVTOOLS_THEME = 'devtools-theme';
  const DEVTOOLS_FONT = 'devtools-font';
  const DEVTOOLS_SIZE = 'devtools-size';
  const DEVTOOLS_CURRENT = 'devtools-current';
  const DEVTOOLS_ACCENT_COLOR = 'devtools-accent-color';
  const DEVTOOLS_SCROLLBARS = 'devtools-scrollbars';

  let css;

  const styleBuilder = {
    /**
     * Extract current theme colors and inject a style tag in the body
     * @param currentTheme
     * @param currentFontFamily
     * @param currentFontSize
     * @param accentColor
     */
    generateThemeVars(currentTheme,
                      currentFontFamily = 'Menlo',
                      currentFontSize   = 11,
                      accentColor       = null) {
      // Extract colors
      if (currentTheme && currentTheme.colors) {
        const {
                background,
                foreground,
                text,
                selectBg,
                selectFg,
                button,
                disabled,
                contrast,
                second,
                table,
                border,
                hl,
                tree,
                notif,
                accent,
                excluded,
                comments,
                vars,
                links,
                functions,
                keywords,
                tags,
                strings,
                operators,
                attributes,
                numbers,
                parameters
              } = currentTheme.colors;

        return this.styles({
          background,
          foreground,
          primary: text,
          selectBg,
          selectFg,
          button,
          disabled,
          contrast,
          second,
          table,
          border: border,
          highlight: hl,
          tree,
          notif,
          accent,
          excluded,
          comments,
          vars,
          links,
          functions,
          keywords,
          tags,
          errors: tags,
          strings,
          operators,
          numbers,
          attributes,
          parameters,
          fontFamily: currentFontFamily,
          fontSize: currentFontSize,
          accentColor: accentColor
        });
      }
    },

    /**
     * Extract the styles and create a css string to be injected to a style tag
     * @param background
     * @param foreground
     * @param primary
     * @param selectBg
     * @param selectFg
     * @param selectFg2
     * @param button
     * @param disabled
     * @param contrast
     * @param second
     * @param darkerBg
     * @param lighterBg
     * @param table
     * @param border
     * @param highlight
     * @param tree
     * @param notif
     * @param accent
     * @param accent2
     * @param accent3
     * @param excluded
     * @param comments
     * @param vars
     * @param links
     * @param functions
     * @param keywords
     * @param tags
     * @param errors
     * @param strings
     * @param operators
     * @param numbers
     * @param attributes
     * @param parameters
     * @param fontFamily
     * @param fontSize
     * @param accentColor
     * @returns {string}
     */
    styles({
             background,
             foreground,
             primary,
             selectBg,
             selectFg,
             selectFg2,
             button,
             disabled,
             contrast,
             second,
             darkerBg = contrast,
             lighterBg = second,
             table,
             border,
             highlight,
             tree,
             notif,
             accent,
             accent2 = accent,
             accent3 = accent,
             excluded,
             comments,
             vars,
             links,
             functions,
             keywords,
             tags,
             errors,
             strings,
             operators,
             numbers,
             attributes,
             parameters,
             fontFamily,
             fontSize,
             accentColor
           }) {
      // language=CSS
      return `
  :root {
  --bg: ${background};
  --fg: ${foreground};
  --text: ${primary};
  --selBg: ${selectBg};
  --selFg: ${selectFg};
  --selFg2: ${selectFg2};
  --button: ${button};
  --disabled: ${disabled};
  --contrast: ${contrast};
  --second: ${second};
  --active: ${table};
  --border: ${border};
  --hl: ${highlight};
  --tree: ${tree};
  --notif: ${notif};
  --accent: ${accentColor || accent};
  --excluded: ${excluded};

  --tags: ${tags};
  --attributes: ${attributes};
  --comments: ${comments};
  --keywords: ${keywords};
  --errors: ${errors};
  --vars: ${vars};
  --operators: ${operators};
  --functions: ${functions};
  --strings: ${strings};
  --numbers: ${numbers};
  --links: ${links};
  --parameters: ${parameters};

  --ui-font-family: Roboto, Helvetica Neue, Arial, sans-serif;
  --font-family: ${fontFamily}, Menlo, Consolas, "Fira Code", monospace;
  --font-size: ${fontSize || 10}px;
  }
`;
    }
  };

  function generateScrollbarsStyle(scrollbars = true) {
    if (!scrollbars) return '';
    // language=CSS
    return `
      :host ::-webkit-scrollbar,
      html ::-webkit-scrollbar,
      .-theme-with-dark-background ::-webkit-scrollbar,
      :host-context(.-theme-with-dark-background) ::-webkit-scrollbar {
        width: 10px !important;
        height: 10px !important;
        opacity: 0 !important;
        transition: opacity 0.4s ease;
      }
    `;
  }

  async function themeSetup() {
    storage.get(SETTINGS, async object => {
      const settings = object[SETTINGS];
      if (settings && settings.startsWith('{')) {
        const json = JSON.parse(settings);
        const size       = json[DEVTOOLS_SIZE],
              theme      = json[DEVTOOLS_THEME] || 'Material Oceanic',
              current    = json[DEVTOOLS_CURRENT],
              family     = json[DEVTOOLS_FONT],
              scrollbars = json[DEVTOOLS_SCROLLBARS] ?? true,
              accent     = json[DEVTOOLS_ACCENT_COLOR];

        // Variables
        let style = styleBuilder.generateThemeVars(current, family, size, accent);
        // Append scroll manually
        const scroll = generateScrollbarsStyle(scrollbars);

        panels.applyStyleSheet(style);
        browserAction.setIcon({ path: `./public/icons/${theme}.svg` }, () => {});

        // Apply theme
        if (current.dark) {
          css = await fetch('dist/dark.css').then(res => res.text());
        }
        else {
          css = await fetch('dist/light.css').then(res => res.text());
        }
        // Apply def style
        panels.applyStyleSheet(css);
        panels.applyStyleSheet(scroll);
      }
      else {
        // Append scroll manually
        const scroll = generateScrollbarsStyle(true);

        css = await fetch('dist/default.css').then(res => res.text());
        panels.applyStyleSheet(css);
        panels.applyStyleSheet(scroll);
      }

    });
  }

  themeSetup();
  // setInterval(() => {
  //   themeSetup();
  // }, 10000);
  //
  panels.setOpenResourceHandler(() => panels.applyStyleSheet(css));
})(
  window,
  chrome.storage.sync,
  chrome.devtools.panels,
  chrome.action
);
