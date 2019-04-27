import React from 'react';
import { OutboundLink } from '../components/Link';

function urlWrapper(json) {
  const urlRegex = /(https:\/\/[a-z.]+[/a-z]+)/gi;
  let m,
    matches = [];

  do {
    if ((m = urlRegex.exec(json))) {
      matches = matches.concat(m[0]);
    }
  } while (m);

  const separator = new RegExp(matches.join('|'), 'gi');
  const parts = json.split(separator);
  const anchors = matches.map(m => (
    <OutboundLink href={m}>{m}</OutboundLink>
  ));

  anchors.forEach((anchor, i) => parts.splice(i * 2 + 1, 0, anchor));

  const tags = parts.map((elem, i) => <span key={i}>{elem}</span>);
  return tags;
}

export default urlWrapper;
