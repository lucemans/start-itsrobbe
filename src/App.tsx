import * as React from 'react';
import { Searchbar } from './searchbar';
import { Time } from './time';

import moment from 'moment';

let bgs = [
    'https://i.ytimg.com/vi/XqKIOLvmsjw/maxresdefault.jpg',
    'https://i.ytimg.com/vi/41vuqCTd2-U/maxresdefault.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/270598716228579115/72CD26E14B7FCBA028206A06F10548C0D5174CFC/',
    'https://i.pinimg.com/originals/87/7f/1e/877f1e4fb3abf8569087dd5322bc8c31.jpg',
    'https://images7.alphacoders.com/862/862674.jpg',
    'https://wallpaperaccess.com/full/755385.jpg',
    'https://image.freepik.com/free-vector/vaporwave-retro-futuristic-background-abstract-laser-grid-tunnel-neon-colors-with-glow-effect-night-sky-with-stars-wallpaper-cyberpunk-party-music-poster-hackathon-meeting_87408-169.jpg',
    'https://media.discordapp.net/attachments/758581263535177748/759534641509826620/9k.png',
    'https://images2.alphacoders.com/108/1080149.jpg',
    'https://screenshots.gamebanana.com/img/ss/guis/5d84300a4ba7c.webp',
    'https://ak.picdn.net/shutterstock/videos/1025451314/thumb/1.jpg?ip=x480',
    'https://s3.amazonaws.com/pbblogassets/uploads/2020/04/17213507/Synthwave-and-Vaporwave-Tutorial-Look-of-Synthwave.jpg',
];

/*
BRAINSTORM COMMANDS
google <string to search>
timer <start timer>
darkmode / lightmode

*/

let rr = list => list[Math.floor(Math.random() * list.length)];
let dagen = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let maanden = ['Junary', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function App() {

    return (
        <div className="page" style={{ backgroundImage: 'url(\'' + bgs[8] + '\')' }}>
            <div className="title">{dagen[moment().weekday()] + " the " + moment().date() + "th of " + maanden[moment().month()]}</div>
            <Time></Time>
            <Searchbar></Searchbar>
        </div>
    );
}