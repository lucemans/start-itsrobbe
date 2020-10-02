import * as React from 'react';
import Command from './commands/Command';
import CommandHandler from './commands/CommandHandler';

export function Searchbar() {

    const reference = React.useRef();
    let [preview, setPreview] = React.useState(null as Command);

    let preview2: any = (<div className="input-icon">$</div>);
    if (preview != null) {
        preview2 = (
            <img className="input-icon" src={preview.preview} alt="" />
        );
    }

    function updatePreview(text) {
        console.log(text);
        //@ts-ignore
        const r = CommandHandler.instance.matchCommands(text, false);
        if (r.length > 0)
            setPreview(r[0]);
        else
            setPreview(null as Command);
    }

    React.useEffect(() => {
        // @ts-ignore
        reference.current.focus();
    }, [0]);

    return (
        <div className="input">
            {
                preview2
            }
            <div className="in" ref={reference} contentEditable={true} onKeyPress={(e) => {
                if (e.key == "Enter") {
                    e.preventDefault();
                    if (reference.current === undefined) {
                    } else {
                        //@ts-ignore
                        if (CommandHandler.instance.invoke(reference.current['innerHTML'])) {
                            //@ts-ignore
                            reference.current['innerHTML'] = '';
                            setPreview(null as Command);
                        }
                    }
                } else {
                    // @ts-ignore
                    updatePreview(reference.current['innerHTML'] + e.key);
                }
            }} onKeyUp={(e) => {

            }} onKeyUpCapture={(e) => {
                // @ts-ignore
                updatePreview(reference.current['innerHTML'] + e.key);
            }} />
        </div>
    );
}