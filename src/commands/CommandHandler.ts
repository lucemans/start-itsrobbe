import Command from './Command';
import { GoogleCommand, GotoCommand, YoutubeCommand } from './Command';

export default class CommandHandler {

    static instance: CommandHandler = new CommandHandler();

    handlers: Command[] = [
        new GoogleCommand(),
        new GotoCommand(),
        new YoutubeCommand()
    ];
        // this.register("timer", new GoogleCommand());
        // this.register("stopwatch", new GoogleCommand());
        // this.register("alarm", new GoogleCommand());
        // this.register("theme", new GoogleCommand());
        // this.register("snippet", new GoogleCommand());
        // this.register("background", new GoogleCommand());

    

    matchCommands(input: string, strict = true): Command[] {
        const first = input.split(' ')[0].toString().toLowerCase();
        if (first.length == 0)
            return [];
        return this.handlers.filter((a) => {
            return a.aliases.filter((b: string) => {
                // return b.substring(0, input.length) == input;
                return (strict && b.toLowerCase() == first) || (!strict && first.lastIndexOf(b.toLowerCase(), 0) == 0)
            }).length > 0;
        });
    }

    invoke(command: string): boolean {
        const results = this.matchCommands(command);
        if (results.length > 0) {
            const words = command.split(' ').splice(1);
            results[0].handle(words);
            return true;
        }
        return false;
    }


}