Boggle Solver
=============

Assignment
----------

Create a web-based solver for Boggle. Users should be able to enter their boggle “board” into the webapp and have the app “solve” the board by listing out all of the valid words contained on the board.

You may use any publicly available language, libraries, tools, and information resources. We do ask that you come prepared to discuss what resources you used, and that the final result reflects your own work and thinking. We’re especially interested in seeing how you approach the algorithm for solving the board, so please avoid using a pre-built library to solve that piece. Please be sure to attribute any resources that contributed ideas or code to your solution. When you’re done, please send along the source code and (if possible) a live URL.

I’ve gotten feedback from a couple of folks recently that they wished they had a little more clarity on what specifically we’re looking for in this assignment. So off the top of my head here are a few things we’ll be interested in seeing:

- How performant is the solution? Are users having to wait a long time to see their results?
- How easy is it to understand or maintain the code?
- How usable/pleasant is the interface? Might Boggle players actually want to use this app?
- How scalable and versatile is the application? - Could you plug in a different dictionary? Alphabet? Would it continue to perform well on a 5x5 or 6x6 board?

In 4 hours, we certainly don’t expect that anyone would be able to ace every one of the above, but we’d love to see a solution that shows off your strengths in some of the above areas and performs reasonably in the others.


Rules
-----

- 4x4 board
- Adjacent characters (horizontal, vertical, diagonal)
- >= 3 letters


TODO
----

- Allow users to edit the board
- Deploy

- Downcase all letters
- Prettier error handling on invalid board
- Responsive
- Clear / Reset button for solutions
- Organize CSS better


Notes
-----

- Not using tests due to time constraints, might add if have time
- Just using basic CSS with BEM, no time for more advanced organization/tools
- How much do we care about browser compatibility? (CSS Flex, Map, etc)
- Javascript Map: BTree vs Hash?


Discussion Points
-----------------

- Tradeoffs of backend vs front-end only
- Avoiding blocking in main thread (worker, etc)
- Duplicates (not revisiting letters, but multiple paths for the same word)



References
----------

- <https://en.wikipedia.org/wiki/Boggle>
- MDN for Javascript docs where appropriate (inevitable *shrug*)
- [Create React App](https://facebook.github.io/create-react-app/)
- [NodeJS File documentation](https://nodejs.org/api/fs.html)
- [NodeJS Readline documentation](https://nodejs.org/api/readline.html)
