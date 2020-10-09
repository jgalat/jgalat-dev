import React from 'react';
import 'normalize.css';

import Layout from './src/components/layout';
import { light, dark } from './src/themes';

function setColorMode() {
  const lightTheme = 'LIGHT_THEME';
  const darkTheme = 'DARK_THEME';

  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    .matches;
  const storedPreference = window.localStorage.getItem('color-scheme');

  let colorScheme = 'light';
  if (
    !!storedPreference &&
    ['light', 'dark'].some((cs) => cs === storedPreference)
  ) {
    colorScheme = storedPreference;
  } else {
    colorScheme = userPrefersDark ? 'dark' : 'light';
  }

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const root = window.document.documentElement;
  root.style.setProperty('--initial-color-scheme', colorScheme);

  Object.entries(theme).forEach(([name, color]) => {
    const varName = `--color-${name}`;
    root.style.setProperty(varName, color);
  });
}

function LoadColorScheme() {
  const script = String(setColorMode)
    .replace("'LIGHT_THEME'", JSON.stringify(light))
    .replace("'DARK_THEME'", JSON.stringify(dark));

  const renderedScript = `(${script})()`;
  return <script dangerouslySetInnerHTML={{ __html: renderedScript }} />;
}

function FallbackColorScheme() {
  const variables = Object.entries(light).reduce(
    (vars, [name, color]) => `${vars}\n--color-${name}: ${color};`,
    ''
  );
  const css = `html { ${variables} }`;

  return <style>{css}</style>;
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents([<FallbackColorScheme key="fallback" />]);
  setPreBodyComponents([<LoadColorScheme key="load" />]);
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
