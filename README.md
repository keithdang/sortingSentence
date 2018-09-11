# sortingSentence
Assumptions
1) Sentences are defined as anything that ends with the punctuation of .?!
2) Quotations are removed as there can be many sentences within a quote
so for example <br />
"Why for Pete's sake?" demanded Jerrodd. would be 2 sentences => ["Why for Pete's sake?"] ,[demanded Jerrodd. ] <br />
3) User has the option to decide what kind of sorting they would want in terms of lower upper case priority
ex: <br />
ask, banana, Ask, Banana <br />
or <br />
Ask, Banana, ask, banana <br />
4) Used fs,readline,and regex to assist in grabbing and dissecting text.txt file

To start program
```
node index.js
```
