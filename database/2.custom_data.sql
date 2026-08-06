INSERT OR IGNORE INTO prog_languages(name, version) VALUES ('typescript', '7.0');

INSERT OR IGNORE INTO typescript_blocks(prog_language_id, block_name, block_content)
SELECT
    prog_language.id,
    'fibonacci',
    'function fibonacci(n: number): number {
  if (n <= 1) return n
  let prev = 0
  let curr = 1
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr]
  }
  return curr
}
'
FROM prog_languages prog_language WHERE prog_language.name = 'typescript' AND prog_language.version = '7.0';

INSERT OR IGNORE INTO typescript_blocks(prog_language_id, block_name, block_content)
SELECT
    prog_language.id,
    'swap',
    '[{{x}}, {{y}}] = [{{y}}, {{x}}]'
FROM prog_languages prog_language WHERE prog_language.name = 'typescript' AND prog_language.version = '7.0';

INSERT OR IGNORE INTO typescript_blocks(prog_language_id, block_name, block_content)
SELECT
    prog_language.id,
    'bubbleSort',
    'function bubbleSort(array: number[]): number[] {
  const len = array.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        //[array[j], array[j + 1]] = [array[j + 1], array[j]]
        //or
        //{{ swap array[j] array[j + 1] }}
      }
    }
  }
  return array
}
'
FROM prog_languages prog_language WHERE prog_language.name = 'typescript' AND prog_language.version = '7.0';
