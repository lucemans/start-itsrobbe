export default interface Command {
    aliases: any[];
    preview: string;
    handle(args: string[]): boolean;
}

export class GoogleCommand implements Command {
    aliases = ['google', 'g', 'go', 'bing', 'yahoo'];
    preview = 'https://www.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png';
    handle(args: string[]) {
        window.open('https://www.google.be/search?q='.concat(args.join('+')));
        return true;
    }
}

export class GotoCommand implements Command {
    aliases = ['goto', 'navigate', 'nav'];
    preview = '';
    links = {'bb': 'https://blackboard.uantwerpen.be', 'yt': 'https://www.youtube.com', 'youtube': 'https://www.youtube.com', 'lvk': "https://auth.lvk.sh/login"};
    handle(args: string[]) {
        window.open(this.links[args[0]]);
        return true;
    }
}

export class YoutubeCommand implements Command {
    aliases = ['youtube', 'yt'];
    preview = 'https://www.youtube.com/s/desktop/eca4f304/img/favicon.ico';
    handle(args: string[]) {
        window.open('https://www.youtube.com/results?search_query='.concat(args.join('+')));
        return true;
    }
}