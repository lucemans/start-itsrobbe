import * as React from 'react';
import moment from 'moment';

let parseTime = num => ((num >= 10 ? "" : "0") + num);

export function Time() {

    let [cT, setCurrentTime] = React.useState(moment());

    React.useEffect(function () {
        // Luc's autisme
        setTimeout(() => { /** Sync timer */
            setCurrentTime(moment());
            setInterval(function() {
                setCurrentTime(moment());
            }, 1000);
        }, 100 - cT.millisecond());
    }, [0]);

    return (
        <div className="sub">
            <span className="hour">{ parseTime(cT.hour()) }</span>
            <span className="colon">:</span>
            <span className="minutes">{ parseTime(cT.minute()) }</span>
            <span className="seconds">{ parseTime(cT.second()) }</span>
        </div>
    );
}