declare global {
	interface Window {
		// eslint-disable-next-line prettier/prettier
    "startTheAdventure": unknown;
	}
}

// Some notes:
// Most of the code is kinda obfuscated to prevent the player from just ctrl+f-ing the source-code to find the answers to the first couple of riddles.
// If you found this, don't worry - the next mysteries won't be so easy to find...

// @ts-expect-error that's expected lol
// eslint-disable-next-line prettier/prettier, @typescript-eslint/restrict-plus-operands
const checkSecret = (s: string) => s === (Boolean([]) + [])[!Number([]) + !Number([]) + !Number([])] + (![] + [])[Number(!Number([]))] + (![] + [])[!Number([]) + !Number([]) + !Number([])] + (Number([![]]) + [Number(Number(!Number([])) + (!Number([]) + [])[!Number([]) + !Number([]) + !Number([])] + [Number(!Number([]))] + [Number([])] + [Number([])] + [Number([])])])[Number(!Number([])) + [Number([])]];

const addListener = () => {
	// eslint-disable-next-line no-useless-concat
	if (localStorage.getItem('r' + 'a' + 'b' + 'b' + 'i' + 't')) {
		let lastESC = false;
		let timeSinceLastKey = 0;
		document.addEventListener('keydown', event => {
			const isEsc = event.key === 'Escape';

			console.log(lastESC, isEsc, timeSinceLastKey + 2000 > Date.now());

			if (lastESC && isEsc && timeSinceLastKey + 2000 > Date.now()) {
				console.log('pog');
				event.preventDefault();
				event.stopPropagation();
				document.location.href = '/_';
				// eslint-disable-next-line no-useless-concat
				localStorage.removeItem('r' + 'a' + 'b' + 'b' + 'i' + 't');
			}

			lastESC = isEsc;
			timeSinceLastKey = Date.now();
		});
	}
};

export const initRiddle = () => {
	if (process.browser) {
		const letsgo = (arg: string) => {
			if (!checkSecret(arg)) {
				setTimeout(
					console.log.bind(
						console,
						// eslint-disable-next-line prettier/prettier, no-useless-concat
            "Y" + "o" + "u" + " " + "d" + "i" + "d" + "n" + "'" + "t" + " " + "t" + "h" + "i" + "n" + "k" + " " + "i" + "t" + " " + "w" + "o" + "u" + "l" + "d" + " " + "b" + "e" + " " + "t" + "h" + "a" + "t" + " " + "%c" + "e" + "a" + "s" + "y" + "%c" + "," + " " + "d" + "i" + "d" + " " + "y" + "o" + "u" + "?" + "\n\n%c %c\n",
						`font-weight: bold`,
						`font-weight: 200`,
						`background-image: url("https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif");
             background-size: cover;
             color: #fff;
             padding: 50px 148px;
             font-family: "Comic Sans MS";
             font-size: 5rem;
             line-height: 5rem`,
						`background: none`,
					),
				);
				return;
			}

			console.log(
				`
%cSo easy mode it is...
There's no shame in admitting that you're not made out for higher difficulties, %cI guess.\n%c
%c--[----->+<]>.+++++++++.---..+++.++++++++.+[---->+<]>++.---[->++++<]>.------------.---.--[--->+<]>-.--[->++++<]>-.+[->+++<]>.+.+++++++++++.+++[->+++<]>.--[--->+<]>-.---[----->++<]>.+++[->+++<]>++.+..+++++++.+++++++++++.
`,
				`font-family: monospace;
        font-weight: bold`,
				`font-style: italic`,
				`font-style: normal`,
				`    background-image: linear-gradient(
          135deg,
          #ce9ffc 10%,
          #7367f0 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;`,
			);

			// eslint-disable-next-line prettier/prettier, no-useless-concat
			localStorage.setItem('r' + 'a' + 'b' + 'b' + 'i' + 't', 'h' + 'i' + 'nt:' + ' ma' + 'tri' + 'x');

			addListener();
		};

		// eslint-disable-next-line prettier/prettier, no-useless-concat
    letsgo.toString = () => "n" + "i" + "c" + "e" + " " + "t" + "r" + "y";
		// eslint-disable-next-line prettier/prettier, no-useless-concat
    (window as any)["s" + "t" + "a" + "r" + "t" + "T" + "h" + "e" + "A" + "d" + "v" + "e" + "n" + "t" + "u" + "r" + "e"] = letsgo;

		if (localStorage.getItem('rabbit')) addListener();
	}
};
