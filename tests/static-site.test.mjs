import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

function read(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function assertIncludes(haystack, needle, message) {
  assert.ok(haystack.includes(needle), message);
}

test('main site contains all planned core sections', () => {
  const html = read('index.html');

  [
    'id="home"',
    'id="about"',
    'id="philosophy"',
    'id="services"',
    'id="values"',
    'id="retreats"',
    'id="contact"',
    'id="contactForm"',
  ].forEach((fragment) => {
    assertIncludes(html, fragment, `Expected index.html to include ${fragment}`);
  });
});

test('shared assets exist for all pages', () => {
  assert.ok(fs.existsSync('css/style.css'), 'Expected css/style.css to exist');
  assert.ok(fs.existsSync('js/main.js'), 'Expected js/main.js to exist');
});

test('shared stylesheet includes responsive and retreat page support', () => {
  const css = read('css/style.css');

  [
    '.retreat-page',
    '.retreat-hero',
    '.retreat-section',
    '@media (max-width: 1024px)',
    '@media (max-width: 768px)',
    '@media (max-width: 480px)',
  ].forEach((fragment) => {
    assertIncludes(css, fragment, `Expected css/style.css to include ${fragment}`);
  });
});

test('retreat landing pages exist and include registration anchors', () => {
  ['retreat-shacharit.html', 'retreat-ani-ve-at.html'].forEach((filePath) => {
    assert.ok(fs.existsSync(filePath), `Expected ${filePath} to exist`);
    const html = read(filePath);
    assertIncludes(html, 'id="retreat-contact"', `Expected ${filePath} to include retreat contact section`);
    assertIncludes(html, 'class="retreat-hero"', `Expected ${filePath} to include retreat hero`);
  });
});

test('deployment config exists for clean retreat routes', () => {
  assert.ok(fs.existsSync('netlify.toml'), 'Expected netlify.toml to exist');
  const config = read('netlify.toml');

  assertIncludes(config, '/retreat-shacharit', 'Expected Netlify route for retreat-shacharit');
  assertIncludes(config, '/retreat-ani-ve-at', 'Expected Netlify route for retreat-ani-ve-at');
});
