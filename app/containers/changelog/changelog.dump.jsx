
// IF THIS GETS TO LONG. ADD A BOTTOM TAG AT CHANGE LOG, SEE THE REST [HERE]
// NOTE: Don't repeat its label at the beginning. Fixed : Fixed this issue...

export const latestChangelogVersion = "1.3.6" // NOTE : Update this value to the latest

export const upcoming = {
    date: "September 5th 2024", // Acts as a last updated
    new: [
        "Translations",
        "Mobile Support",
        "Knowledge Base"
    ],
}

export const changelog = [
    {
        version: "1.6.1",
        date: "November 1st 2024",
        new: [
            "Presets for combo mode",
            "Option to set separators",
            <>Guide video for Conditional Mode. <a href="https://www.youtube.com/watch?v=h_pncUbISGY" target="_blank">YouTube</a></>,
            "Option to name the conditional. Name is then displayed in the conditional box instead of 'Conditional'"
        ],
        fixed: [
            "Minor issues"
        ]
    },
    {
        version: "1.6.0",
        date: "October 23rd 2024",
        new: [
            "New combo mode, conditional mode! Apply SKUs / Barcodes conditionally based on product title, variant, option title, and more (If variant has Blue then include BLU in SKU)."
        ],
        improved: [
            "UI for Duplicate check / History / Create",
        ],
        fixed: [
            "Finished edit results not displaying when duplicate checking",
            "Minor issues",
            "UI inconsistencies"
        ],
        note: [
            "Subscription model has been revised, current paid plan users have been given the highest tier. For more info, please view 'Compare Plans' or consider reaching out to me."
        ],
    },
    {
        version: "1.5.2",
        date: "September 23rd 2024",
        new: [
            "Popup indicator will appear when product sync is complete"
        ],
        fixed: [
            "Issue occuring when applying a case mode to an empty barcode",
            "Minor issues"
        ]
    },
    {
        version: "1.5.0",
        date: "September 5th 2024",
        new: [
            "Aiming to be more user-friendly, the entire creation UI has undergone a massive overhaul. The following are the changes:",
            "Arrangeable (drag and drop) combo boxes",
            "Extra two combo boxes, extended from five",
            "Short 30 second video guides. Accessible on the dev site and through the buttons with the question mark icon"
            
        ],
        improved : [
            "Completely redone the previewer",
            "The modes selection UI",
            "Process of removing and adding boxes has been redone. Removed boxes will no longer show",
            "Removed related wording, prefixes, suffixes, separator, and other elements as it caused confusion"

        ],
        fixed: [
            "Being able to use letters (not numbers) for the 1.3.0 added modes"
        ]
    },
    {
        version: "1.3.6",
        date: "August 24th 2024",
        new: [
            "Sorting alphabetically for Collections, Product Types and Vendors.",
        ]
    },
    {
        version: "1.3.0",
        date: "August 19th 2024",
        new: [
            "New mode, Increment by Product. Value will increase on each product.",
            "New mode, Increment by Variant. Value will increase for each variant. It'll reset to its initial value on each product."
        ],
        improved: [
            "Duplicate check UI to be more concise"
        ],
        fixed: [
            "Instances where barcodes wouldn't properly update when updating with SKUs & Barcodes at the same time",
            "Blank SKUs/Barcodes wouldn't get updated when 'Only Update Duplicates' is enabled"
        ]
    },
    {
        version: "1.2.4",
        date: "August 15th 2024",
        improved: [
            "Warning messages when updating a deleted product / variant. Now will show which products weren't updated",
            "Restore points won't include/show products that weren't updated"
        ],
        fixed: [
            "Issue that occurs when updating with the 'upper/lower case' mode, which would prevent any updates to perform",
            "Product & variant update count. Now accurately counts how many were updated when using barcodes & SKUs, filtering via variant, replace formating, updating only duplicates",
        ],
    },
    {
        version: "1.2.0",
        date: "August 14th 2024",
        new: [
            "Barcode Support!",
            "Upcoming, added to changelog. Shows planned features."
        ],
        improved: [
            "Changelog will appear upon a new update."
        ],
        fixed: [
            "History - Incorrect 'new' SKUs appearing in the wrong order",
            "Minor issues",
            "UI inconsistencies"
        ]
    },
    {
        version: "1.1.0",
        date: "August 9th 2024",
        new: [
            "Introduction sequence - Accessed within Account Info",
            "Changelog: Accessed within Account Info"
        ],
        improved: [
            'Added "More Info" label to Account Info button'
        ],
        fixed: [
            "UI inconsistencies"
        ]
    }
]

// {
//     version: "",
//     date: "",
//     new: [
//         ""
//     ],
//     improved: [
//         ""
//     ],
//     fixed: [
//         ""
//     ],
//     note: [
//         ""
//     ],
//     bad: [
//         ""
//     ]
// }