import React from "react";


export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    lefticon: React.ReactNode;
    name: string;
    control: any;
    errorMessage?: string;
}