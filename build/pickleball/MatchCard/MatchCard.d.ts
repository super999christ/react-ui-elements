import React from 'react';
import type { TeamInfo } from './types';
export declare const MatchCardTeam: ({ ...team }: TeamInfo) => import("react/jsx-runtime").JSX.Element;
export interface MatchCardProps {
    className?: string;
    compact?: boolean;
    court?: string | number;
    detailsUrl?: React.ReactNode;
    event?: string;
    matchDateTime?: string;
    matchNumber?: string | number;
    matchTime?: string | Date;
    round?: string | number;
    teams?: TeamInfo[];
    tournament?: string;
}
declare const MatchCard: React.ForwardRefExoticComponent<MatchCardProps & React.RefAttributes<HTMLDivElement>>;
export default MatchCard;
