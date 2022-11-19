import React from 'react';

import fanart1 from "../img/fanart1.png";
import fanart2 from "../img/fanart2.jpeg";
import fanart3 from "../img/fanart3.jpeg";
import fanart4 from "../img/fanart4.jpeg";

export default function Home() {
    return (
        <>
        <div>
            <h1>Welcome to Gordon Ramsay's fanpage!</h1>
            <iframe width="1750" height="315" src="https://www.youtube.com/embed/rEMXENwQZA4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <p>I love gordon!!!1!!
            I don't realy know much web dev but i knew that  i had to make this website. and i ma very perserverent person so i will endure through this pain that is the process of making this in order to appease my my man 
            </p>
            <p>
                anyway hewrws some fanart i did yesterday i think it looks prety good hope you like it gardon!!!!!!!! &lt;3
            </p>
            <img src = {fanart1} width={300} height={300}></img>
            <img src = {fanart2} width={300} height={300}></img>
            <img src = {fanart3} width={300} height={300}></img>

            <section>
                <h2>Blog</h2>
                also i didn't mention this before but i hope you liked the fancam i made i spent a while doing it bc i have never used movie maker before so it was like.. idk pretty tough whoever made that needs to like talk to people because clearly it is not intutive at all

                <p>
                    also this whole html thing like it seems so pointless like why can't i just type what i want and have it appear why do i need these random like p??? like i don't wanna type that i just want to type the things that i think and have that appear like is that so hard. man some pople are such idiots 
                </p>

                
            </section>
            </div>
        </>
    );
};
