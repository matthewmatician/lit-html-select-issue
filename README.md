# lit-html-select-issue
Small repo showing lit-html rendering issue with select

## How to
1. clone the repo.
2. npm install using node 10x
3. npx rollup -cw to run a dev server
4. browse to localhost:8011 using chrome or firefox - they have issues. safari works
5. click A and B. select an option in the dropdown for both.
6. notice has you toggle back and forth that even though the model is correct, the select hangs onto the value from the previous model.
