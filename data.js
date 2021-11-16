let data = {
    "posts":[
        {
            "date": "nov 13 3pm",
            "text": "hello peer reviewers--<br>\
            I think I'm going to make a simpler frogger-type game where the player (Smiley) is trying to stay warm on a walk in the freezing Midwest winter, dodging snowflakes❄️ and rain clouds🌧 on the sidewalk, and jumping on sunrays☀️ and mugs of tea🍵 in the snow to keep him warm on the way to his destination<br><br>\
            so aesthetic goals:<br>\
            ★ the player feels accomplished as they make it past the different stages of the game, and wants to try again if they fail<br>\
            signs of success? the game becomes more challenging the more it's played. this means not a total reset when the player wins, but rather it becomes a little more difficult - more obstacles that move faster, or something like that<br>\
            signs of failure? the game has little replay value nor validation upon winning. I want the player to feel a real sense of accomplishment when they do win, and for that to continue to increase\
            <br><br>\
            ★ the player thinks the game is attractive and fun to look at, therefore more fun to play<br>\
            signs of success? the game has its own distinct style and looks cohesive<br>\
            signs of failure? the game looks amateur or incohesive<br><br>\
            core loop: the player will spend most of their time moving between moving enemy obstacles and then jumping onto moving ally obstacles. so mostly timing when to move"
        },
        {
            "date": "nov 15 10am",
            "text": "sooo a design choice has come up - should the player use arrow keys or a joystick? the game is only arrow key movement (just 2 axes, no other player functions) so I really wanted to do arrow keys and have this be contained within the computer without the need for joysticks to be used. however, I'm having trouble with unity recognizing when i press my arrow keys and thus am going to use a joystick controller. the movement will be smoother, so that's a plus of this route. (sorry in advance for forcing you to get out your controller)"
        },
        {
            "date": "nov 15 4pm",
            "text": "working on the enemy code and realized that each enemy does sorta have a relation to each other, since they're moving in a line with the same y value and behavior. anyway I'm going to change the structure of my code to have an enemyholder that holds all the enemies and put the code in there instead of individual enemies, and move the collider into player. hopefully this is a clearer way for me to think about it!"
        },
        {
            "date": "nov 15 4:30pm",
            "text": "ok! so i am having an issue and have to change a design element to solve it. I wanted the enemies to be spawned at random times so there was no consistent pattern in the obstacles. but it's way too much for unity to handle to be doing this every frame and it's being laggy, so I'm going to settle on a more consistent pattern and lose that element of randomness. sad"
        },
        {
            "date": "nov 15 6pm",
            "text": "i just finished the visual parts of the game! still have to add in sound at different events but everything else is done. looking at it, it's kinda ugly I'll be honest. I think I could have spent more time on the visual consistency/cohesivity, and i still could but I probably wont. it was one of my goals that i didn't do that well on, but I also don't think I'll revisit this game past submitting it today so I don't feel much desire to spend time on making it super pretty. (next time i guess)<br><br>\
            in regards to my other goal, the game becoming more challenging as it's played, i actually decided against this because the game is so simple that if it starts slow it's honestly just pretty boring. so it's starting fast and if I were to increase this it would devolve into impossible and stressful very quickly. i think it's (sorta) fun and frustrating and i want to play it until i win each time! so i think the difficulty will just stay static. I don't feel the need for it to have a lot of replay value at this point."
        },
        {
            "date": "nov 15 6:30pm",
            "text": "just added sound fx when the player dies👍🏼"
        },
        {
            "date": "reflection ...",
            "text": "by the end, my goals had changed to become much more practical to the time limit/scope of the assignment (that i had placed on myself by starting late and not caring about it being amazing)<br><br>\
            i made a working frogger-type game! conceptually, i achieved what I had set out to do, but less so visually.<br><br>\
            the way objects interact with each other was what i wanted it to be and it took me a second to figure that out. i feel like i'm well-versed in that now.<br><br>\
            what went wrong is that the game is kinda ugly but it's okay I've made my peace with it<br><br>\
            I wish that at the start i had known that it didn't have to be perfect because I probably spent more time worrying about how I was going to do things than actually doing them. and like it's ugly and simple but it does work and is playable so that's a feat in itself<br><br>\
            from this, i learned that I give up easily when I'm not very invested in the project which sounds kinda messed up but it's true. I worked harder on my last game because I was more excited about the concept I had come up with, so maybe this time I could have spent more time brainstorming ideas instead of just settling on the first one i thought of that would fulfill the requirements."
        },

    ]
};
