import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const manifest = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'));

test('extensionPack lists SFMC extensions then editor tooling', () => {
    assert.deepStrictEqual(manifest.extensionPack, [
        'joernberkefeld.sfmc-data',
        'Accenture-oss.sfmc-devtools-vscode',
        'joernberkefeld.sfmc-language',
        'joernberkefeld.mso-conditionals',
        'dbaeumer.vscode-eslint',
        'esbenp.prettier-vscode',
        'EditorConfig.EditorConfig',
        'johnpapa.vscode-peacock',
    ]);
});

test('icon path points at bundled asset', () => {
    assert.equal(manifest.icon, 'resources/images/pack-expanded-v2-transparent-256.png');
});
