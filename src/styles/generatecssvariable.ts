import { csscssVariableMapper } from  './variables.ts';

export const generateCssVariables = (palette) => {
  console.log(palette , "palette")
    const variables = {};
    Object.entries(cssVariableMapper).forEach(([cssVar, key]) => {
      const [category, shade] = key.split('.');
      if (palette[category] && palette[category][shade]) {
        variables[cssVar] = palette[category][shade];
      }
    });
    return variables;
  };

