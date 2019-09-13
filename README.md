# KataminoSolver
Web page dedicated to solving a puzzle game known as Katamino!

Now this is not just any project... it has a whole backstory to it, so buckle up!

My family owns this puzzle game, Katamino, ever since I was a kid. One fine summer night, my little brother pulled out this game for old time's sake and was merrily playing it, until he ran into a problem - he couldn't solve it! We all gathered around, taking turns trying to solve it, confident it could not be that hard. Each one of us spent at least ten minutes tinkering with the game, rotating and flipping everything possible to solve the puzzle, but to no avail. Having spent well over 40 minutes over this puzzle by that point, I wondered if a computer could solve it faster... And here is where the real fun begins.

I decided to code a program that could solve any Katamino puzzle. Given the visual nature of the game, I decided that it would be best to code the game such that it has a visually pleasing user interface and solution display, so I made the solver in the form of a web page! In retrospect, it wasn't the best idea since JavaScript is not the best language for large computational jobs given its one-threaded nature, but at the time of writing the code and developing the web page, I did not anticipate the calculations would be so intensive. A solution for the current setup would be to use a web worker so that the frontend doesn't freeze up while the web page is busy calculating the solution, but that it somewhat beyond the scope of this project - perhaps I will come back to it later! Regardless, the web page does provide nice visuals, and a simple interface to launch the solver! Simply click on the shapes for which you would like to find a solution, click run, and watch the solutions unfold before you!

Oh and if you're wondering, my brother solved the puzzle the very next day, whereas it took me a couple of days to code the solver... So, technically, my brother was faster, in a way!
