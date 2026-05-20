import { formatSize } from './app/lib/utils';

const testCases = [
  { bytes: 0, expected: '0 Bytes' },
  { bytes: 1024, expected: '1 KB' },
  { bytes: 1234, expected: '1.21 KB' },
  { bytes: 1024 * 1024, expected: '1 MB' },
  { bytes: 1024 * 1024 * 5.5, expected: '5.5 MB' },
  { bytes: 1024 * 1024 * 1024, expected: '1 GB' },
  { bytes: 1024 * 1024 * 1024 * 1024, expected: '1 TB' },
];

testCases.forEach(({ bytes, expected }) => {
  const result = formatSize(bytes);
  console.log(`Bytes: ${bytes.toString().padEnd(15)} | Expected: ${expected.padEnd(10)} | Got: ${result.padEnd(10)} | ${result === expected ? 'PASS' : 'FAIL'}`);
});
