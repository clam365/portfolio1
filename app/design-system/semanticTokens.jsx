"use client";
import {useState, useRef, useEffect, useCallback} from "react";

//Data
const primitives = [
    {
        group: "Neutrals",
        items: [
            {id: "p-white", label: "--color-white", swatch: "#ffffff"},
            {id: "p-steel", label: "--color-steel", swatch: "#EFF3F6"},
            {id: "p-sand-gray", label: "--color-sand-gray", swatch: "#D1D5D6"},
            {id: "p-gray", label: "--color-black", swatch: "#808080"},
            {id: "p-black", label: "--color-black", swatch: "#000000"},

        ],
    },
    {
        group: "Fresh Green",
        items: [
            {id: "p-fg-50", label: "--color-fresh-green-50", swatch: "#f0fdf3"},
            {id: "p-fg-300", label: "--color-fresh-green-300", swatch: "#87eea1"},
            {id: "p-fg-400", label: "--color-fresh-green-400", swatch: "#3cda64"},
            {id: "p-fg-500", label: "--color-fresh-green-500", swatch: "#23c44c"},
        ],
    },
    {
        group: "Baby Blue",
        items: [
            {id: "p-bb-300", label: "--color-baby-blue-300", swatch: "#90D5FF"},
        ],
    },
];

const tokens= [
    {
        group: "Brand",
        items: [
            {id: "t-brand-primary", label: "--color-brand-primary", swatch: "#3cda64"},
        ],
    },
    {
        group: "Surface",
        items: [
            {id: "t-surface-base", label: "--color-surface-base", swatch: "#ffffff"},
            {id: "t-surface-decorative", label: "--color-surface-decorative", swatch: "#90D5FF"},
            {id: "t-surface-raised", label: "--color-surface-raised", swatch: "#EFF3F6"},

        ],
    },
    {
        group: "Text",
        items: [
            {id: "t-text-primary", label: "--color-text-primary", swatch: "#000000"},
            {id: "t-text-secondary", label: "--color-text-secondary", swatch: "#808080"},
            {id: "t-text-tertiary", label: "--color-text-tertiary", swatch: "#3cda64"},
        ],
    },
    {
        group: "Border",
        items: [
            {id: "t-border", label: "--color-border", swatch: "#D1D5D6"},
        ],
    },
    {
        group: "Button",
        items: [
            {id: "t-button-text", label: "--color-button-text", swatch: "#000000"},
            {id: "t-button-bg-primary", label: "--color-button-bg-primary", swatch: "#3cda64"},
            {id: "t-button-bg-primary-hover", label: "--color-button-bg-primary-hover", swatch: "#87eea1"},
            {id: "t-button-bg-outline-hover", label: "--color-button-bg-outline-hover", swatch: "#EFF3F6"},


        ],
    },
];