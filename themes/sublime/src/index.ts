import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';

export const sublime = createTheme({
  theme: 'dark',
  settings: {
    background: '#303841',
    foreground: '#FFFFFF',
    caret: '#FBAC52',
    selection: '#4C5964',
    selectionMatch: '#3A546E',
    gutterBackground: '#303841',
    gutterForeground: '#FFFFFF70',
    lineHighlight: '#00000059',
  },
  styles: [
    { tag: [t.meta, t.comment], color: '#A2A9B5' },
    { tag: [t.attributeName, t.keyword], color: '#B78FBA' },
    { tag: t.function(t.variableName), color: '#5AB0B0' },
    { tag: [t.string, t.regexp, t.attributeValue], color: '#99C592' },
    { tag: t.operator, color: '#f47954' },
    // { tag: t.moduleKeyword, color: 'red' },
    { tag: [t.propertyName, t.typeName], color: '#629ccd' },
    { tag: [t.tagName, t.modifier], color: '#E35F63' },
    { tag: [t.number, t.definition(t.tagName), t.className, t.definition(t.variableName)], color: '#fbac52' },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#E35F63' },
  ],
});
