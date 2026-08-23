export const conversations = [
    {
        id: "7f8c9a21-6c8e-4f9d-8a2b-31e7c4d91abc",
        title: "Understanding JavaScript Closures",
        createdAt: "2026-08-20",
        updatedAt: "2026-08-20",

        messages: [
            {
                id: "a1b2c3d4-1111-4aaa-8bbb-123456789001",
                role: "user",
                content: "What is a closure in JavaScript?"
            },

            {
                id: "a1b2c3d4-2222-4aaa-8bbb-123456789002",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "A closure is a function that remembers variables from its outer scope even after the outer function has finished executing."
                    },

                    {
                        type: "code",
                        language: "javascript",
                        value: `function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const greet = outer();

greet();`
                    },

                    {
                        type: "text",
                        value:
                            "The inner function still has access to the message variable even after outer() has finished."
                    }
                ],

                responseType: "closure",
                responseIndex: 0
            },

            {
                id: "a1b2c3d4-3333-4aaa-8bbb-123456789003",
                role: "user",
                content: "Where are closures commonly used?"
            },

            {
                id: "a1b2c3d4-4444-4aaa-8bbb-123456789004",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "Closures are commonly used in several situations:"
                    },

                    {
                        type: "list",
                        style: "unordered",
                        items: [
                            "Callbacks",
                            "Event handlers",
                            "Factory functions",
                            "Maintaining private state"
                        ]
                    }
                ],

                responseType: "closure",
                responseIndex: 2
            }
        ]
    },

    {
        id: "8a9b0c12-7d8e-4f9a-8b2c-42e8d5f02bcd",
        title: "CSS Flexbox Explained",
        createdAt: "2026-08-20",
        updatedAt: "2026-08-20",

        messages: [
            {
                id: "b1c2d3e4-1111-4aaa-8bbb-223456789001",
                role: "user",
                content: "What is Flexbox?"
            },

            {
                id: "b1c2d3e4-2222-4aaa-8bbb-223456789002",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "Flexbox is a CSS layout system designed to arrange elements in a row or column and control their alignment and spacing."
                    },

                    {
                        type: "code",
                        language: "css",
                        value: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}`
                    },

                    {
                        type: "list",
                        style: "unordered",
                        items: [
                            "flex-direction",
                            "justify-content",
                            "align-items",
                            "flex-grow",
                            "flex-shrink"
                        ]
                    }
                ],

                responseType: "flexbox",
                responseIndex: 0
            },

            {
                id: "b1c2d3e4-3333-4aaa-8bbb-223456789003",
                role: "user",
                content: "What is flex-grow?"
            },

            {
                id: "b1c2d3e4-4444-4aaa-8bbb-223456789004",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "The flex-grow property determines how much a flex item can grow relative to other flex items when extra space is available."
                    },

                    {
                        type: "table",
                        headers: [
                            "Property",
                            "Purpose",
                            "Default"
                        ],

                        rows: [
                            [
                                "flex-grow",
                                "Controls how much an item grows",
                                "0"
                            ],
                            [
                                "flex-shrink",
                                "Controls how much an item shrinks",
                                "1"
                            ],
                            [
                                "flex-basis",
                                "Defines the initial size",
                                "auto"
                            ]
                        ]
                    }
                ],

                responseType: "flex-grow",
                responseIndex: 0
            }
        ]
    },

    {
        id: "9b0c1d23-8e9f-4a0b-9c3d-53f9e6a13cde",
        title: "SCSS Mixins",
        createdAt: "2026-08-19",
        updatedAt: "2026-08-19",

        messages: [
            {
                id: "c1d2e3f4-1111-4aaa-8bbb-323456789001",
                role: "user",
                content: "What is an SCSS mixin?"
            },

            {
                id: "c1d2e3f4-2222-4aaa-8bbb-323456789002",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "An SCSS mixin is a reusable block of styles that can accept parameters and be included in multiple selectors."
                    },

                    {
                        type: "code",
                        language: "scss",
                        value: `@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    @include flex-center;
}`
                    }
                ],

                responseType: "scss",
                responseIndex: 2
            },

            {
                id: "c1d2e3f4-3333-4aaa-8bbb-323456789003",
                role: "user",
                content: "Why should we use mixins?"
            },

            {
                id: "c1d2e3f4-4444-4aaa-8bbb-323456789004",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "Mixins help reduce repeated CSS and allow you to create reusable patterns."
                    },

                    {
                        type: "list",
                        style: "unordered",
                        items: [
                            "Reduce repeated styles",
                            "Create reusable patterns",
                            "Accept parameters",
                            "Keep SCSS more maintainable"
                        ]
                    }
                ],

                responseType: "scss",
                responseIndex: 1
            }
        ]
    },

    {
        id: "0c1d2e34-9f0a-4b1c-8d4e-64a0f7b24def",
        title: "Semantic HTML",
        createdAt: "2026-08-19",
        updatedAt: "2026-08-19",

        messages: [
            {
                id: "d1e2f3a4-1111-4aaa-8bbb-423456789001",
                role: "user",
                content: "What is semantic HTML?"
            },

            {
                id: "d1e2f3a4-2222-4aaa-8bbb-423456789002",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "Semantic HTML uses elements that describe the meaning and purpose of their content."
                    },

                    {
                        type: "list",
                        style: "unordered",
                        items: [
                            "header",
                            "nav",
                            "main",
                            "section",
                            "article",
                            "aside",
                            "footer"
                        ]
                    }
                ],

                responseType: "semantic-html",
                responseIndex: 0
            },

            {
                id: "d1e2f3a4-3333-4aaa-8bbb-423456789003",
                role: "user",
                content: "Why is semantic HTML important?"
            },

            {
                id: "d1e2f3a4-4444-4aaa-8bbb-423456789004",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "Semantic HTML improves accessibility and makes the document easier to understand."
                    },

                    {
                        type: "list",
                        style: "ordered",
                        items: [
                            "Improves accessibility",
                            "Makes code easier to understand",
                            "Provides better document structure",
                            "Helps assistive technologies"
                        ]
                    }
                ],

                responseType: "semantic-html",
                responseIndex: 1
            }
        ]
    },

    {
        id: "1d2e3f45-0a1b-4c2d-9e5f-75b1a8c35ef0",
        title: "JavaScript Arrays",
        createdAt: "2026-08-17",
        updatedAt: "2026-08-17",

        messages: [
            {
                id: "e1f2a3b4-1111-4aaa-8bbb-523456789001",
                role: "user",
                content: "What is an array in JavaScript?"
            },

            {
                id: "e1f2a3b4-2222-4aaa-8bbb-523456789002",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "An array is a data structure used to store multiple values in a single variable."
                    },

                    {
                        type: "code",
                        language: "javascript",
                        value: `const fruits = [
    "Apple",
    "Banana",
    "Orange"
];

console.log(fruits[0]);`
                    }
                ],

                responseType: "javascript-array",
                responseIndex: 0
            }
        ]
    },

    {
        id: "2e3f4a56-1b2c-4d3e-8f6a-86c2b9d46fa1",
        title: "DOM Manipulation",
        createdAt: "2026-08-16",
        updatedAt: "2026-08-16",

        messages: [
            {
                id: "f1a2b3c4-1111-4aaa-8bbb-623456789001",
                role: "user",
                content: "What is DOM manipulation?"
            },

            {
                id: "f1a2b3c4-2222-4aaa-8bbb-623456789002",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "DOM manipulation means using JavaScript to select, modify, create, or remove elements from an HTML document."
                    },

                    {
                        type: "code",
                        language: "javascript",
                        value: `<code>akdhsajd</code>;

heading.textContent =
    "Hello World";`
                    }
                ],

                responseType: "dom",
                responseIndex: 1
            }
        ]
    },

    {
        id: "3f4a5b67-2c3d-4e4f-9a7b-97d3c0e57ab2",
        title: "Git and GitHub",
        createdAt: "2026-08-10",
        updatedAt: "2026-08-10",

        messages: [
            {
                id: "a2b3c4d5-1111-4aaa-8bbb-723456789001",
                role: "user",
                content: "What is Git?"
            },

            {
                id: "a2b3c4d5-2222-4aaa-8bbb-723456789002",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "Git is a distributed version control system used to track changes in source code."
                    },

                    {
                        type: "code",
                        language: "bash",
                        value: `git init
git add .
git commit -m "Initial commit"
git push`
                    }
                ],

                responseType: "git",
                responseIndex: 0
            },

            {
                id: "a2b3c4d5-3333-4aaa-8bbb-723456789003",
                role: "user",
                content: "What is GitHub?"
            },

            {
                id: "a2b3c4d5-4444-4aaa-8bbb-723456789004",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "GitHub is a platform that hosts Git repositories and provides collaboration features."
                    },

                    {
                        type: "link",
                        text: "Learn more about GitHub",
                        href: "https://github.com"
                    }
                ],

                responseType: "git",
                responseIndex: 2
            }
        ]
    },

    {
        id: "4a5b6c78-3d4e-4f5a-8b6c-a8e4d1f68bc3",
        title: "Responsive Web Design",
        createdAt: "2026-08-05",
        updatedAt: "2026-08-05",

        messages: [
            {
                id: "b2c3d4e5-1111-4aaa-8bbb-823456789001",
                role: "user",
                content: "How does responsive design work?"
            },

            {
                id: "b2c3d4e5-2222-4aaa-8bbb-823456789002",
                role: "assistant",

                content: [
                    {
                        type: "text",
                        value:
                            "Responsive design allows a website to adapt its layout and content to different screen sizes."
                    },

                    {
                        type: "list",
                        style: "unordered",
                        items: [
                            "Flexible layouts",
                            "Media queries",
                            "Flexbox",
                            "CSS Grid",
                            "Responsive units"
                        ]
                    }
                ],

                responseType: "responsive",
                responseIndex: 0
            }
        ]
    }
];


export const mockResponses = [
    {
        id: "javascript",

        keywords: [
            "javascript",
            "js"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "JavaScript is a programming language used to create interactive and dynamic web applications."
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "Handle user interactions",
                        "Manipulate the DOM",
                        "Create dynamic interfaces",
                        "Build web applications"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "JavaScript can run in browsers and on servers using environments such as Node.js."
                },

                {
                    type: "code",
                    language: "javascript",
                    value: `const message = "Hello";

console.log(message);`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "JavaScript allows developers to add dynamic behavior to websites and applications."
                }
            ]
        ]
    },

    {
        id: "closure",

        keywords: [
            "closure",
            "closures"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "A closure is a function that remembers variables from its outer scope."
                },

                {
                    type: "code",
                    language: "javascript",
                    value: `function outer() {
    const count = 0;

    function inner() {
        console.log(count);
    }

    return inner;
}

const example = outer();

example();`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "A closure is created when an inner function maintains access to variables from its outer function."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Closures are commonly used in the following situations:"
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "Callbacks",
                        "Event handlers",
                        "Factory functions",
                        "Private state"
                    ]
                }
            ]
        ]
    },

    {
        id: "flexbox",

        keywords: [
            "flexbox",
            "flex box",
            "flex layout"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "Flexbox is a CSS layout system designed to arrange elements in a row or column."
                },

                {
                    type: "code",
                    language: "css",
                    value: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
}`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Flexbox makes responsive layouts easier by allowing items to grow, shrink, and align."
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "flex-direction",
                        "justify-content",
                        "align-items",
                        "flex-wrap"
                    ]
                }
            ],

            [
                {
                    type: "table",
                    headers: [
                        "Property",
                        "Purpose"
                    ],

                    rows: [
                        [
                            "flex-grow",
                            "Controls growth"
                        ],
                        [
                            "flex-shrink",
                            "Controls shrinking"
                        ],
                        [
                            "flex-basis",
                            "Sets initial size"
                        ]
                    ]
                }
            ]
        ]
    },

    {
        id: "flex-grow",

        keywords: [
            "flex-grow",
            "flex grow"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "The flex-grow property determines how much a flex item can grow when extra space is available."
                },

                {
                    type: "code",
                    language: "css",
                    value: `.item-one {
    flex-grow: 1;
}

.item-two {
    flex-grow: 2;
}`
                }
            ],

            [
                {
                    type: "table",

                    headers: [
                        "Property",
                        "Default",
                        "Purpose"
                    ],

                    rows: [
                        [
                            "flex-grow",
                            "0",
                            "Controls growth"
                        ],
                        [
                            "flex-shrink",
                            "1",
                            "Controls shrinking"
                        ],
                        [
                            "flex-basis",
                            "auto",
                            "Initial size"
                        ]
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "A flex item with flex-grow: 2 receives twice as much available extra space as an item with flex-grow: 1."
                }
            ]
        ]
    },

    {
        id: "flex-shrink",

        keywords: [
            "flex-shrink",
            "flex shrink"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "The flex-shrink property determines how much a flex item can shrink when there is not enough space."
                },

                {
                    type: "code",
                    language: "css",
                    value: `.item {
    flex-shrink: 0;
}`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "A value of 0 prevents a flex item from shrinking."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "flex-shrink works together with flex-grow and flex-basis to control flex item sizing."
                }
            ]
        ]
    },

    {
        id: "scss",

        keywords: [
            "scss",
            "sass",
            "scss mixin",
            "sass mixin"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "SCSS is a CSS preprocessor that adds features such as variables, nesting, mixins, and functions."
                },

                {
                    type: "code",
                    language: "scss",
                    value: `$primary-color: #000;

.button {
    color: $primary-color;
}`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "SCSS helps organize CSS by allowing developers to create reusable variables, mixins, and modular files."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Mixins are useful for reusable patterns."
                },

                {
                    type: "code",
                    language: "scss",
                    value: `@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}`
                }
            ]
        ]
    },

    {
        id: "html",

        keywords: [
            "html",
            "html5",
            "html tags"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "HTML stands for HyperText Markup Language. It provides the structure and content of a web page."
                },

                {
                    type: "code",
                    language: "html",
                    value: `<main>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
</main>`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "HTML5 provides semantic elements that describe the purpose of different sections."
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "header",
                        "nav",
                        "main",
                        "section",
                        "article",
                        "footer"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "HTML provides structure, CSS provides presentation, and JavaScript provides behavior."
                }
            ]
        ]
    },

    {
        id: "semantic-html",

        keywords: [
            "semantic html",
            "semantic tags",
            "semantic elements"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "Semantic HTML uses elements that describe the meaning and purpose of their content."
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "header",
                        "nav",
                        "main",
                        "article",
                        "section",
                        "footer"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Semantic elements improve accessibility and document structure."
                }
            ],

            [
                {
                    type: "code",
                    language: "html",
                    value: `<header>
    <nav>
        Navigation
    </nav>
</header>

<main>
    Main content
</main>

<footer>
    Footer
</footer>`
                }
            ]
        ]
    },

    {
        id: "css",

        keywords: [
            "css",
            "css styling",
            "css properties"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "CSS stands for Cascading Style Sheets. It controls the appearance and layout of HTML elements."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "CSS can control colors, typography, spacing, layouts, animations, and responsive behavior."
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "Colors",
                        "Typography",
                        "Spacing",
                        "Layouts",
                        "Animations"
                    ]
                }
            ],

            [
                {
                    type: "code",
                    language: "css",
                    value: `.card {
    padding: 1rem;
    border-radius: 0.5rem;
}`
                }
            ]
        ]
    },

    {
        id: "specificity",

        keywords: [
            "specificity",
            "css specificity"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "CSS specificity determines which CSS rule is applied when multiple selectors target the same element."
                },

                {
                    type: "table",
                    headers: [
                        "Selector",
                        "Specificity Level"
                    ],

                    rows: [
                        [
                            "Element",
                            "Low"
                        ],
                        [
                            "Class",
                            "Medium"
                        ],
                        [
                            "ID",
                            "High"
                        ]
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "In general, ID selectors have higher specificity than class selectors, and class selectors have higher specificity than element selectors."
                }
            ],

            [
                {
                    type: "code",
                    language: "css",
                    value: `p {
    color: red;
}

.text {
    color: blue;
}

#title {
    color: green;
}`
                }
            ]
        ]
    },

    {
        id: "javascript-array",

        keywords: [
            "array",
            "javascript array",
            "arrays"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "An array is a data structure used to store multiple values in a single variable."
                },

                {
                    type: "code",
                    language: "javascript",
                    value: `const fruits = [
    "Apple",
    "Banana",
    "Orange"
];`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "JavaScript arrays provide useful methods for working with collections."
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "map",
                        "filter",
                        "reduce",
                        "find",
                        "forEach"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Arrays are zero-indexed, meaning the first element has index 0."
                }
            ]
        ]
    },

    {
        id: "dom",

        keywords: [
            "dom",
            "document object model",
            "dom manipulation"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "The DOM represents an HTML document as a tree of objects that JavaScript can interact with."
                },

                {
                    type: "code",
                    language: "javascript",
                    value: `const button =
    document.querySelector("button");

button.addEventListener(
    "click",
    () => {
        console.log("Clicked");
    }
);`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "JavaScript can use the DOM to select elements, change content, modify styles, and respond to events."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "document.querySelector() is commonly used to select an element from the page."
                }
            ]
        ]
    },

    {
        id: "git",

        keywords: [
            "git",
            "github",
            "git commands"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "Git is a distributed version control system used to track changes in source code."
                },

                {
                    type: "code",
                    language: "bash",
                    value: `git init
git add .
git commit -m "Initial commit"`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Common Git commands include:"
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "git init",
                        "git add",
                        "git commit",
                        "git push",
                        "git pull"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "GitHub hosts Git repositories and provides collaboration features."
                },

                {
                    type: "link",
                    text: "Visit GitHub",
                    href: "https://github.com"
                }
            ]
        ]
    },

    {
        id: "responsive",

        keywords: [
            "responsive",
            "responsive design",
            "mobile responsive"
        ],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "Responsive design allows a website to adapt to different screen sizes and devices."
                },

                {
                    type: "code",
                    language: "css",
                    value: `.container {
    width: min(100% - 2rem, 1200px);
    margin-inline: auto;
}`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Common tools for responsive design include:"
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "Media queries",
                        "Flexbox",
                        "CSS Grid",
                        "clamp()",
                        "min() and max()"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "A good responsive design changes layouts and interactions when necessary instead of simply shrinking the desktop design."
                }
            ]
        ]
    },

    {
        id: "default",

        keywords: [],

        responses: [
            [
                {
                    type: "text",
                    value:
                        "This is a mock AI response. Try asking something about HTML, CSS, SCSS, JavaScript, Flexbox, Git, or responsive design."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "I don't have a predefined response for that topic yet. Try asking a frontend development question."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "This frontend application uses predefined responses instead of a real AI API."
                }
            ]
        ]
    }
];
const state = {
    conversations: [],
    currentChatId: null,
    selectedModel: "balanced",
    isGenerating: false,
    attachments: []
};

export default state;


export let greetingMsg = {
    NotLogIn: [
        "Where should we begin?"
    ],
    logIn: [
        "What's on your mind today?",
        "What can I help you with today?",
        "How can I help you today?",
        "What would you like to work on?",
        "Good to see you, {name}.",
        "Welcome back, {name}.",
        "Hey, {name}. Ready to dive in?"
    ]
}