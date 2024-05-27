import React from 'react';
import { DateTime } from 'luxon';

const TimeAgo = ({ pastDate }) => {
    const now = DateTime.now();
    const past = DateTime.fromISO(pastDate);
    const diff = now.diff(past, ['hours', 'minutes', 'seconds']);

    let timeAgoText;

    if (diff.hours > 0) {
        timeAgoText = `${Math.floor(diff.hours)} jam lalu`;
    } else if (diff.minutes > 0) {
        timeAgoText = `${Math.floor(diff.minutes)} menit lalu`;
    } else {
        timeAgoText = `${Math.floor(diff.seconds)} detik lalu`;
    }

    return (
        <span>
            {timeAgoText}
        </span>
    );
};

export default TimeAgo;

// Example usage
// <TimeAgoComponent pastDate="2024-05-28T08:00:00Z" />
