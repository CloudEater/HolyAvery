window.addEventListener('load', function() {
    
    function replaceName() {
        var theDiv = document.getElementById("replace");
        var theText = theDiv.innerHTML;
	
	var names = ["Website under construction",
	"<img src='/images/jckn.jpg' class='centered' />",
	"<img src='/images/flap.gif' class='centered' />",
	"<img src='/images/maskedseattlegirls.jpg' class='centered' />",
	"<img src='/images/lemur.gif' class='centered' />",
	"<img src='/images/hoaradsee.png' class='centered'/>",



	/*"<img src='/images/zenith.jpg' class='centered' />",
	"<img src='/images/sahdraw.png' class='centered' />",
	"<img src='/images/mew.jpg' class='centered' />",
	"<div class='centered'><img src='/images/oioi.jpg' ><br/>rare pic. 1942</img></div>",
	"<div class='centered'><img src='/images/toki.jpg' ><br/>The grim reaper will end you.</img></div>",
	"Yes, I am a wizard.",
	"You should be more careful.",
	"VLADIMIR!! You're in danger..",
	"Robin is a nerd.", 
	"Elisa is dumb and broken.", 
	"Becky's nose is dead.", 
	"Randolph has no shoes.", 
	"Peteris ate a shrew.", 
	"Aiden snorts licorice.", 
	"Krapo is a flea.", 
	"Marissa licks worms.",
	"Cody is not 7/10.", 
	"Penos hates you.", 
	"Steve is a joke.", 
	"Flying Hydra-Spagheti Penos Monster",
	"Green is the colour of satan's tongue.", 
	"I'm suffering from a dough deficiency.", 
	"Help me, I'm dying.",
	"A Koala Burger with extra cheese.", 
	"China is not Chinese.", 
	"Jesse pants his pants, pants.", 
	"Sasha was born of a turnip.",
	"Joe slept with a bear.",
	"Your mother is a lemon.",
	"Give Nayte your valuables.",
	"Tre kisses magpies.",
	"Alisa is in love with a pinecone.",
	"More like Zachary Trash.",
	"Megan gave birth to a duck.",
	"Wesley is beautiful.",
	"Nicole's insides are made of fruit and mustard.",
	"Tre is making out with a pelican right now.",
	"Veronica cries bouyant tears.",
	"Candy killed an asian girl.",
	"Tre is literally hooking up with an albatros.",
	"Toccara is the grim reaper.",
	"Bub owes me pizza.",
	"Vladimir hates himself.",
	"None of you are going to fit in there.",
	"I wish my eyes were made of amber.",
	"Paolo eats newspapers with milk.",
	"Robin is the BIGGEST nerd.",
	"Jacob cries while watching Shrek.",
	"I'm never bitter.",
	"Nino's a peanut.",
	"I'm never salty.",
	"Vlad's eyes are tomatoes.",
	"Aaron has cheese in his pockets.",
	"Jessie is secretly a triangle."//*/
	];

    	var which = Math.floor(Math.random()*names.length);
	

    	// Replace words
    	theText = theText.replace("...", (names[which]+"<br/><h1>Website under construction</h1>"));
    	theDiv.innerHTML = theText;
    }

    replaceName();

}, false);