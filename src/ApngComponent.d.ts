import React from "react";

export interface ApngComponentProps {
    /** 
     * className canvas' className
     */
    className?: string;

    /** 
     * style canvas' style
     */
    style?: React.CSSProperties;

    /** 
     * src apng's path
     */
    src: string;

    /** 
     * rate apng play rate
     */
    rate?: number;

    /** 
     * autoPlay auto play apng
     */
    autoPlay?: boolean;

    /** 
     * playback started
     */
    onPlay?: () => void;

    /** 
     * frame played (frame number passed as event parameter)
     */
    onFrame?: (frame: number) => void;

    /** 
     * playback paused
     */
    onPause?: () => void;

    /** 
     * playback stopped
     */
    onStop?: () => void;

    /** 
     * playback ended (for APNG with finite count of plays)
     */
    onEnd?: () => void;
}

/**
 * ApngComponent
 */
export default class ApngComponent extends React.Component<ApngComponentProps & React.CanvasHTMLAttributes<HTMLCanvasElement>, any> {
    /** 
     * play the apng
     */
    play(): void;

    /** 
     * pause the apng
     */
    pause(): void;

    /** 
     * stop the apng
     */
    stop(): void;

    /** 
     * play the apng once
     */
    one(): void;
}