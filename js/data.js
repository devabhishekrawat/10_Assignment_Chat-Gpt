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
const state = {
    conversations: conversations,
    currentChatId: null,
    selectedModel: "balanced",
    isGenerating: false,
    attachments: []
};

export default state;

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
                        "JavaScript is a lightweight, interpreted (or just-in-time compiled) dynamic programming language with first-class functions. While it is best known as the scripting language for Web pages, many non-browser environments—such as Node.js, Apache CouchDB, and Adobe Acrobat—also use it."
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "Handle user interactions and complex client-side logic",
                        "Manipulate the DOM in real-time without full page reloads",
                        "Fetch data asynchronously using modern Fetch API or Axios",
                        "Build high-performance web applications using modern frameworks like React, Vue, and Angular"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "JavaScript is cross-platform and multi-paradigm, supporting object-oriented, imperative, and declarative programming styles. It runs in browser engines like V8 (Chrome), SpiderMonkey (Firefox), and JavaScriptCore (Safari), as well as server runtime environments like Node.js and Deno."
                },

                {
                    type: "code",
                    language: "javascript",
                    value: `// Example: Modern Async JavaScript
const fetchUserData = async (userId) => {
    try {
        const response = await fetch(\`https://api.example.com/users/\${userId}\`);
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        console.log("User retrieved:", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch user:", error);
    }
};

fetchUserData(101);`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Over the years, ECMAScript standards (starting with ES6 in 2015) have introduced powerful features such as arrow functions, destructuring, modules, promises, and classes, making JavaScript a scalable language for full-stack enterprise applications."
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
                        "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In JavaScript, closures are created every time a function is created, at function creation time, allowing an inner function to access an outer function's scope even after the outer function has finished executing."
                },

                {
                    type: "code",
                    language: "javascript",
                    value: `function createCounter(initialValue = 0) {
    let count = initialValue;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}

const counter = createCounter(10);
console.log(counter.getValue()); // 10
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.getValue()); // 12 (count remains preserved in memory)`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Closures allow for powerful design patterns in JavaScript, such as data privacy and encapsulation. Since JavaScript historically lacked private class fields, closures were the primary mechanism for creating private variables that could not be accessed or overwritten directly from the outside."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Understanding closures is essential for mastering asynchronous JavaScript, building factory functions, and working with event listeners. Here are typical use cases:"
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "Currying and function partial application",
                        "Preserving state in event handlers and async callbacks",
                        "Creating private variables and module patterns",
                        "Memoization and performance optimization techniques"
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
                        "The Flexible Box Layout Module (Flexbox) is a one-dimensional CSS layout model designed to lay out items in rows or columns. It provides a more efficient way to align, distribute, and structure space among items in a container, even when their sizes are unknown or dynamic."
                },

                {
                    type: "code",
                    language: "css",
                    value: `.navigation-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 2rem;
    background-color: #1a1a1a;
}`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Flexbox works on a parent-child relationship. The parent container becomes a flex container by applying `display: flex`, and its immediate children become flex items that react to main-axis and cross-axis alignment rules."
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "flex-direction: defines the main axis (row, row-reverse, column, column-reverse)",
                        "justify-content: defines alignment along the main axis (e.g., center, space-between)",
                        "align-items: defines default behavior for how flex items are laid out along the cross axis",
                        "flex-wrap: controls whether the flex container is single-line or multi-line"
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
                            "Specifies how much a flex item will grow relative to the rest of the flex items when positive free space is distributed."
                        ],
                        [
                            "flex-shrink",
                            "Specifies how a flex item will shrink relative to the rest of the flex items when negative free space is distributed."
                        ],
                        [
                            "flex-basis",
                            "Sets the initial main size of a flex item before free space is distributed according to flex factors."
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
                        "The `flex-grow` property dictates the proportion of available extra space inside the flex container that should be allocated to an item. It accepts a unitless numerical value that serves as a relative proportion ratio."
                },

                {
                    type: "code",
                    language: "css",
                    value: `.sidebar {
    width: 250px;
    flex-grow: 0; /* Remains fixed at 250px */
}

.main-content {
    flex-grow: 1; /* Absorbs all remaining horizontal space */
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
                            "Determines how much remaining positive space the item absorbs."
                        ],
                        [
                            "flex-shrink",
                            "1",
                            "Determines how much the item contracts when space overflows."
                        ],
                        [
                            "flex-basis",
                            "auto",
                            "Defines the baseline size before growing or shrinking occurs."
                        ]
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "For example, if all flex items have `flex-grow: 1`, available space will be split equally among them. However, if one item has `flex-grow: 2`, it will attempt to reserve twice as much of the remaining space as the items set to `1`."
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
                        "The `flex-shrink` property specifies how much a flex item will contract relative to the other flex items in the container when the combined size of all items exceeds the available space along the main axis."
                },

                {
                    type: "code",
                    language: "css",
                    value: `.avatar {
    width: 48px;
    height: 48px;
    flex-shrink: 0; /* Ensures the avatar image is never squished */
}`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Setting `flex-shrink: 0` is extremely useful for UI components such as fixed icons, badges, and avatars inside flex containers, ensuring their dimensions remain fixed regardless of screen size changes."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "When combined with `flex-grow` and `flex-basis`, `flex-shrink` forms the shorthand `flex: <grow> <shrink> <basis>`. A common reset rule is `flex: 1 1 auto` for fully responsive elements."
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
                        "SCSS (Sassy CSS) is an extension syntax of Sass (Syntactically Awesome Style Sheets) that is fully fully compatible with CSS. It adds sophisticated preprocessing capabilities including variables, nested rules, mixins, functions, selector inheritance, and modular code imports."
                },

                {
                    type: "code",
                    language: "scss",
                    value: `$primary-color: #3b82f6;
$border-radius: 8px;

.card {
    background-color: #fff;
    border-radius: $border-radius;
    padding: 1.5rem;

    .card-header {
        color: $primary-color;
        font-weight: bold;
    }

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
}`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "SCSS enables developers to follow DRY (Don't Repeat Yourself) architecture principles in enterprise design systems through parameterized mixins and functions, simplifying theme management and media query break-points."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Mixins allow you to define styles that can be re-used throughout your stylesheet without repeating non-semantic class names."
                },

                {
                    type: "code",
                    language: "scss",
                    value: `@mixin responsive-flex($direction: row, $justify: space-between) {
    display: flex;
    flex-direction: $direction;
    justify-content: $justify;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
}

.header-container {
    @include responsive-flex(row, space-around);
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
                        "HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. HTML documents consist of a tree of nested nodes and tags that instruct web browsers how to render text, multimedia, forms, and dynamic components."
                },

                {
                    type: "code",
                    language: "html",
                    value: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Structure</title>
</head>
<body>
    <main>
        <h1>Welcome to Web Development</h1>
        <p>HTML forms the bedrock of web application architecture.</p>
    </main>
</body>
</html>`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "HTML5 introduced enhanced semantic elements, structural tags, web storage APIs, embedded multimedia (`<audio>` and `<video>`), dynamic graphics canvas APIs, and native input validations, modernizing web application standards."
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "<header>: Represents introductory content or navigational links",
                        "<nav>: Encapsulates major navigation blocks",
                        "<main>: Represents the dominant content unique to the document",
                        "<section>: Represents a standalone, generic group of content",
                        "<article>: Encapsulates self-contained, independently distributable compositions",
                        "<footer>: Contains footer information such as copyright or metadata"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "The web platform operates on a separation of concerns principle: HTML establishes content structure, CSS controls visual presentation, and JavaScript governs behavior and interactive state."
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
                        "Semantic HTML means using HTML elements according to their intended structural purpose rather than purely for styling or layout convenience. For example, using `<button>` instead of `<div onclick=\"...\">` communicates meaning to both browsers and assistive technologies."
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "Provides natural landmark roles for Screen Readers and assistive tools",
                        "Boosts Search Engine Optimization (SEO) by identifying primary text context",
                        "Improves developer codebase readability, maintenance, and debugging",
                        "Ensures native keyboard accessibility (e.g., focus management and enter key handling)"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Semantic elements allow accessibility tools (like screen readers) to build accessibility trees seamlessly, helping visually impaired users navigate documents efficiently using landmark shortcuts."
                }
            ],

            [
                {
                    type: "code",
                    language: "html",
                    value: `<header>
    <nav aria-label="Main Navigation">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>Understanding Semantic HTML</h2>
        <p>Semantic tags convey explicit structural meaning.</p>
    </article>
</main>

<footer>
    <p>&copy; 2026 Frontend Architecture Handbook</p>
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
                        "Cascading Style Sheets (CSS) is the stylesheet language used to specify the presentation, layout, visual aesthetics, and formatting of documents written in HTML or XML. It allows web developers to isolate style declarations cleanly from structural content."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Modern CSS offers layout engines such as Flexbox and CSS Grid, visual transformations, keyframe animations, custom CSS custom properties (variables), media query breakpoints, and container queries for ultra-responsive web development."
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "Color spaces & modern palettes (HSL, OKLCH, RGB, Hex)",
                        "Typography control (custom web fonts, line-height, variable fonts)",
                        "The Box Model (content, padding, border, margin calculations)",
                        "Advanced Layout Systems (Flexbox, CSS Grid, Multi-column layout)",
                        "Animations & Transitions (hardware-accelerated visual transforms)"
                    ]
                }
            ],

            [
                {
                    type: "code",
                    language: "css",
                    value: `:root {
    --primary-hue: 220;
    --brand-color: hsl(var(--primary-hue), 90%, 56%);
}

.card {
    background-color: #ffffff;
    padding: clamp(1rem, 3vw, 2.5rem);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
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
                        "CSS Specificity is the scoring system browsers use to determine which property values are applied to an element when multiple competing CSS selectors match the same HTML node. Specificity acts as a 3-column weight system: (IDs, Classes/Attributes/Pseudo-classes, Elements/Pseudo-elements)."
                },

                {
                    type: "table",
                    headers: [
                        "Selector Type",
                        "Weight Category",
                        "Example"
                    ],

                    rows: [
                        [
                            "Inline Styles",
                            "1-0-0-0 (Highest non-override)",
                            "style='color: red;'"
                        ],
                        [
                            "ID Selectors",
                            "0-1-0-0",
                            "#main-header"
                        ],
                        [
                            "Class / Attribute / Pseudo-class",
                            "0-0-1-0",
                            ".btn, [type='text'], :hover"
                        ],
                        [
                            "Element / Pseudo-element",
                            "0-0-0-1 (Lowest)",
                            "h1, p, ::before"
                        ]
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "When specificity scores are identical between two rules targeting the same element, the rule declared latest in the stylesheet wins due to the cascading order principle."
                }
            ],

            [
                {
                    type: "code",
                    language: "css",
                    value: `/* Specificity score: 0-0-0-1 (Element) */
p {
    color: gray;
}

/* Specificity score: 0-0-1-0 (Class) -> Overrides element selector */
.description {
    color: blue;
}

/* Specificity score: 0-1-0-0 (ID) -> Overrides class & element selectors */
#intro-text {
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
                        "In JavaScript, an array is an ordered list-like object used to store multiple data items in a single variable reference. JavaScript arrays are dynamic, resize automatically, and can contain mixed data types simultaneously."
                },

                {
                    type: "code",
                    language: "javascript",
                    value: `const products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Mouse", price: 25, inStock: false },
    { id: 3, name: "Keyboard", price: 75, inStock: true }
];`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Modern ES6+ JavaScript offers a rich collection of functional built-in higher-order array methods that do not mutate original arrays, encouraging clean immutable state management pattern:"
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "map(): Transforms array elements by applying a function to each item",
                        "filter(): Creates a new array containing elements that pass a logical test condition",
                        "reduce(): Executes a reducer function to accumulate array elements into a single value",
                        "find(): Returns the first array element that satisfies a provided testing function",
                        "some() / every(): Tests whether at least one or all elements satisfy a condition"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "JavaScript arrays are zero-indexed, meaning the first index starts at `0`, and the last index corresponds to `array.length - 1`. Negative indexing can be achieved using modern `.at(-1)` syntax."
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
                        "The Document Object Model (DOM) is a cross-platform programming interface that represents an HTML or XML document as a hierarchical tree structure of nodes. The DOM enables scripts (like JavaScript) to access, modify, style, and dynamically construct web page content and events."
                },

                {
                    type: "code",
                    language: "javascript",
                    value: `// Querying and attaching event handlers
const alertBtn = document.querySelector("#alert-trigger");
const statusText = document.querySelector(".status-message");

alertBtn.addEventListener("click", (event) => {
    event.preventDefault();
    statusText.textContent = "Processing action...";
    statusText.classList.add("active");
});`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Every HTML tag, attribute, and text snippet becomes an object node in the DOM tree. Developers manipulate the DOM tree using selector methods such as `querySelector`, `querySelectorAll`, `getElementById`, and node manipulation APIs like `appendChild` or `remove`."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Because direct DOM manipulation can be computationally expensive due to browser layout repaints and reflows, modern web frameworks like React utilize a Virtual DOM layer to batch and optimize updates."
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
                        "Git is a distributed version control system designed to track changes in source code during software development. It allows developers to work concurrently across branches, inspect revision histories, revert code regressions, and collaborate effectively."
                },

                {
                    type: "code",
                    language: "bash",
                    value: `# Standard Git Feature-Branch Workflow
git checkout -b feature/user-authentication
git add .
git commit -m "feat: add user login and password hash validation"
git push origin feature/user-authentication`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Essential Git terminal commands and daily operations:"
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "git init: Initializes a new local Git repository workspace",
                        "git status: Inspects untracked, modified, or staged file changes",
                        "git add: Stages changed files to prepare them for a commit snapshot",
                        "git commit: Saves staged changes as a permanent revision snapshot",
                        "git fetch / pull: Downloads remote history changes into your local branch",
                        "git rebase / merge: Integrates branch commits into your active branch"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "GitHub is a cloud platform that hosts Git repositories, providing collaboration workflows like Pull Requests, code review tools, continuous integration pipelines (GitHub Actions), and issue tracking."
                },

                {
                    type: "link",
                    text: "Explore GitHub Platform Documentation",
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
                        "Responsive Web Design (RWD) is an approach to web design that ensures user interfaces render smoothly across diverse screen sizes, orientations, pixel densities, and device types—from mobile smartphones to ultra-wide desktop monitors."
                },

                {
                    type: "code",
                    language: "css",
                    value: `/* Responsive Grid Container using modern minmax & clamp */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: clamp(1rem, 2vw, 2rem);
    width: min(100% - 2rem, 1200px);
    margin-inline: auto;
}`
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "Key tools and strategy primitives in responsive design include:"
                },

                {
                    type: "list",
                    style: "unordered",
                    items: [
                        "Mobile-First Approach: Designing for mobile constraints first, expanding layout complexity upward",
                        "Fluid Layouts: Utilizing relative percentage units, `ch`, `rem`, `vw`, or CSS `min()`, `max()`, and `clamp()`",
                        "CSS Media Queries (@media): Applying conditional styles based on viewport dimensions",
                        "Responsive Images: Using `<picture>` and `srcset` to serve resolution-appropriate images",
                        "Flexbox and CSS Grid: Automatic item wrapping and flexible space distribution"
                    ]
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "A truly responsive application focuses on progressive enhancement—adapting layout grids, font scale, touch target padding, and navigation menus to feel native to each user's viewing context."
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
                        "Welcome to the mock AI interface. You can query any web development topic such as HTML, Semantic HTML, CSS, Specificity, SCSS, JavaScript, Closures, Arrays, DOM Manipulation, Flexbox, Git, or Responsive Design."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "I don't have a built-in response for that specific keyword. Please try asking a core frontend architecture or developer question."
                }
            ],

            [
                {
                    type: "text",
                    value:
                        "This demo application runs on a client-side mock response dataset designed to emulate real-time AI responses and structured components without requiring live external API tokens."
                }
            ]
        ]
    }
];



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

export function getRandomGreeting() {
    const userDataStr = sessionStorage.getItem("user");
    const user = userDataStr ? JSON.parse(userDataStr) : null;

    const isLoggedIn = user && user.isLoggedIn;
    const userName = user?.name || "Friend";

    if (!isLoggedIn) {
        const randomIndex = Math.floor(Math.random() * greetingMsg.NotLogIn.length);
        return greetingMsg.NotLogIn[randomIndex];
    }

    const randomIndex = Math.floor(Math.random() * greetingMsg.logIn.length);
    const selectedGreeting = greetingMsg.logIn[randomIndex];

    return selectedGreeting.replace("{name}", userName);
}