
// Initialize Ace editor for HTML
const htmlEditor = ace.edit("html-editor");
htmlEditor.setTheme("ace/theme/dracula");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.setValue(`
<body>
    <h1>A VERY Computational Christmas Quiz</h1>
    <h2>By DigiLearnScot</h2>
    <div class="quiz-container" id="quizContainer">
        <div id="questionContainer">
            <div class="question-number" id="questionNumber"></div>
            <div class="image-container">
                <img id="questionImage" src="" alt="Question Image">
            </div>
            <div class="question" id="questionText"></div>
            
            <ul class="answer-options" id="answerOptions"></ul>
            <button class="submit-btn" id="nextButton">Next</button>
        </div>
    
        <div class="result-container" id="resultContainer">
            <div class="result-message" id="resultMessage"></div>
            <div class="result-list" id="resultList"></div>
            <button class="submit-btn" id="restartButton">Restart Quiz</button>
        </div>
    </div>
</body>
`);
htmlEditor.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    wrap: true,
    showLineNumbers: true,
    tabSize: 2
});

// Initialize Ace editor for CSS
const cssEditor = ace.edit("css-editor");
cssEditor.setTheme("ace/theme/dracula");
cssEditor.session.setMode("ace/mode/css");
cssEditor.setValue(`
body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
            color: #333;
            text-align: center;
            background-image: url('https://wallpaperaccess.com/full/832010.jpg'); /* Add a festive background */
            background-size: cover;
            background-position: center;
        }
        h1 {
            color: #e74c3c;
            font-size: 2em;
            margin-top: 20px;
        }

   #questionImage {
    width: 100%;             /* Ensure image takes up 100% of its container's width */
    height: auto;            /* Maintain the aspect ratio */
    object-fit: contain;     /* Prevent the image from being stretched or cropped */
}
        
        .quiz-container {
            background-color: rgba(255, 255, 255, 0.9);
            padding: 20px;
            width: 80%;
            margin: auto;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .question {
            font-size: 1.2em;
            margin-bottom: 15px;
        }
        .question-number {
            font-size: 1.2em;
            color: #2980b9;
            font-weight: bold;
        }
        .answer-options {
            list-style-type: none;
            padding: 0;
            display: flex;
            justify-content: space-between;
            gap: 10px;
            flex-wrap: wrap;
        }
        .answer-option {
            background-color: #3498db;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            flex: 1 1 25%;
            max-width: 100px;
            text-align: center;
            margin: 5px;
        }
        .answer-option:hover {
            background-color: red;
        }
        .selected {
            background-color: #f39c12;
        }
        .image-container {
            margin: auto;
            width:100%;
        }
        .submit-btn {
            background-color: #27ae60;
            color: white;
            padding: 15px 25px;
            border: none;
            font-size: 1.2em;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
        }
        .submit-btn:hover {
            background-color: #2ecc71;
        }
        .result-container {
            display: none;
            margin-top: 30px;
        }
        .result-message {
            font-size: 2em;
            color: #2ecc71;
        }
        .result-list {
            text-align: left;
            font-size: 1.2em;
            margin-top: 20px;
        }
        .correct {
            color: green;
        }
        .incorrect {
            color: red;
        }

        @media (min-width: 768px) {
    #questionImage {
        width: 300px;  /* Set the image width to 300px on larger screens */
        height: auto;  /* Maintain aspect ratio */
    }

    .quiz-container {
        width: 60%;  /* Set the quiz container width to 60% on larger screens */
    }
}
`);
cssEditor.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    wrap: true,
    showLineNumbers: true,
    tabSize: 2
});

// Initialize Ace editor for JavaScript
const jsEditor = ace.edit("js-editor");
jsEditor.setTheme("ace/theme/dracula");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.setValue(`
const factButton = document.getElementById("fact-button");
const resetButton = document.getElementById("reset-button");
const factText = document.getElementById("fact-text");
const factImage = document.getElementById("fact-image");

// Original facts array to reset
const originalFacts = [
  {
    text: "The first computer virus was created in 1982.",
    image: "https://tse4.mm.bing.net/th/id/OIP.A841fIv6sL9hMwLaLGuQDAHaDt?w=310&h=175&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  },
  {
    text: "The number of emails sent and received per day in 2024 is 361.6 billion.",
    image: "https://cdn.shopify.com/s/files/1/0840/8370/3830/articles/1701784225-number-of-emails-sent-and-received-per-day-2023-2027.png?v=1714654437"
  },
  {
    text: "The internet was originally developed for military use.",
    image: "https://tse4.mm.bing.net/th/id/OIP.m5as9dHqt3CrZQGua_EZWgHaD2?w=318&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  },
  {
    text: "The first computer game was called Spacewar! and was created in 1962.",
    image: "https://tse1.mm.bing.net/th/id/OIP.AZJ3rV7_IN1PUdAuPYUazAHaEK?w=1280&h=720&rs=1&pid=ImgDetMain"
  },
  {
    text: "The first programmable and digital computer, ENIAC (Electronic Numerical Integrator and Computer), was developed in 1945",
    image: "https://th.bing.com/th/id/R.39f00ad246b0328b29ae9ed6de30afcf?rik=BtVkVuZJj47oqw&pid=ImgRaw&r=0"
  }
];

// Clone original facts to a new array for manipulation
let facts = [...originalFacts];

// Default image to restore when reset is pressed
const defaultImageUrl = "https://tinyurl.com/csfact101";

function getRandomFact() {
  if (facts.length === 0) {
    factText.textContent = "All facts have been shown!";
    factImage.src = ""; // Optionally clear the image when no facts are left
    factButton.disabled = true; // Disable the button when out of facts
    return;
  }

  const randomIndex = Math.floor(Math.random() * facts.length);
  const randomFact = facts.splice(randomIndex, 1)[0]; // Remove the fact from the array
  factText.textContent = randomFact.text;
  factImage.src = randomFact.image;
}

function resetFacts() {
  facts = [...originalFacts]; // Reset facts array to original
  factText.textContent = ""; // Clear fact text
  factImage.src = defaultImageUrl; // Restore default image
  factButton.disabled = false; // Re-enable the Show Fact button
}

// Event listeners
factButton.addEventListener("click", getRandomFact);
resetButton.addEventListener("click", resetFacts);
`);
jsEditor.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    wrap: true,
    showLineNumbers: true,
    tabSize: 2
});

// Function to update preview
function updatePreview() {
    const htmlContent = htmlEditor.getValue();
    const cssContent = `<style>${cssEditor.getValue()}</style>`;
    const jsContent = `<script>${jsEditor.getValue()}</script>`;
    const fullContent = htmlContent + cssContent + jsContent;

    const previewFrame = document.getElementById('preview');
    previewFrame.srcdoc = fullContent; // Inject the code into the iframe
}

// Initial preview update
updatePreview();

// Listen for changes in the editors to update preview dynamically
htmlEditor.session.on('change', updatePreview);
cssEditor.session.on('change', updatePreview);
jsEditor.session.on('change', updatePreview);
// Tab switching logic
const tabButtons = document.querySelectorAll(".tab-button");
const codeEditors = document.querySelectorAll(".code-editor");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons and editors
    tabButtons.forEach(btn => btn.classList.remove("active"));
    codeEditors.forEach(editor => editor.classList.remove("active"));

    // Add 'active' class to the clicked button and the corresponding editor
    button.classList.add("active");
    document.getElementById(button.getAttribute("data-tab") + "-editor").classList.add("active");
  });
});

function saveContentToLocalStorage() {
    localStorage.setItem("htmlContent", htmlEditor.getValue());
    localStorage.setItem("cssContent", cssEditor.getValue());
    localStorage.setItem("jsContent", jsEditor.getValue());
}

function updatePreview() {
    const htmlContent = htmlEditor.getValue();
    const cssContent = `<style>${cssEditor.getValue()}</style>`;
    const jsContent = `<script>${jsEditor.getValue()}</script>`;
    const fullContent = htmlContent + cssContent + jsContent;

    const previewFrame = document.getElementById('preview');
    previewFrame.srcdoc = fullContent; // Inject the code into the iframe

    // Save the current editor content to localStorage on each preview update
    saveContentToLocalStorage();
}

// Listen for changes in the editors to update preview and save content dynamically
htmlEditor.session.on('change', updatePreview);
cssEditor.session.on('change', updatePreview);
jsEditor.session.on('change', updatePreview);


// Load saved content if available
function loadContentFromLocalStorage() {
    const savedHtml = localStorage.getItem("htmlContent");
    const savedCss = localStorage.getItem("cssContent");
    const savedJs = localStorage.getItem("jsContent");

    if (savedHtml) htmlEditor.setValue(savedHtml, -1); // The '-1' avoids moving cursor to start
    if (savedCss) cssEditor.setValue(savedCss, -1);
    if (savedJs) jsEditor.setValue(savedJs, -1);
}

// Call the function to load saved content when the page loads
window.addEventListener("load", loadContentFromLocalStorage);


document.getElementById("popoutBtn").addEventListener("click", () => {
    const htmlContent = htmlEditor.getValue();
    const cssContent = `<style>${cssEditor.getValue()}</style>`;
    const jsContent = `<script>${jsEditor.getValue()}</script>`;
    const fullContent = `
        <html>
        <head><meta charset="UTF-8"><title>Live Preview</title></head>
        <body>${htmlContent}${cssContent}${jsContent}</body>
        </html>
    `;

    // Create a new Blob containing the HTML content, set type to HTML
    const previewBlob = new Blob([fullContent], { type: 'text/html' });
    const previewUrl = URL.createObjectURL(previewBlob);

    // Open new window with Blob URL
    const popoutWindow = window.open(previewUrl, '_blank');
    if (!popoutWindow) {
        alert("Please allow pop-ups to open the preview.");
    }
});


//
/*

// Function to encode content to Base64
function toBase64(str) {
    return btoa(unescape(encodeURIComponent(str))); // Convert to Base64
}

// Function to decode Base64 content
function fromBase64(base64Str) {
    return decodeURIComponent(escape(atob(base64Str))); // Convert from Base64
}

// Function to update the URL dynamically
function updateUrl() {
    const htmlContent = htmlEditor.getValue();
    const cssContent = cssEditor.getValue();
    const jsContent = jsEditor.getValue();

    // Encode the content to Base64
    const encodedHtml = toBase64(htmlContent);
    const encodedCss = toBase64(cssContent);
    const encodedJs = toBase64(jsContent);

    // Create the shareable URL
    const shareableUrl = `${window.location.origin}?html=${encodedHtml}&css=${encodedCss}&js=${encodedJs}`;

    // Update the URL in the browser's address bar without reloading the page
    window.history.replaceState(null, "", shareableUrl);

    // Display the shareable URL to the user
    const shareUrlText = document.getElementById("share-url-text");
    shareUrlText.innerHTML = `Your Shareable URL: <a href="${shareableUrl}" target="_blank">${shareableUrl}</a>`;
}

// Function to load content from the URL and decode it
function loadContentFromUrl() {
    const params = new URLSearchParams(window.location.search);

    // Get the Base64 content from the URL
    const htmlContent = params.get('html');
    const cssContent = params.get('css');
    const jsContent = params.get('js');

    // Decode the Base64 content and set it in the editors
    if (htmlContent) {
        htmlEditor.setValue(fromBase64(htmlContent), -1);
    }
    if (cssContent) {
        cssEditor.setValue(fromBase64(cssContent), -1);
    }
    if (jsContent) {
        jsEditor.setValue(fromBase64(jsContent), -1);
    }

    // Update the preview with the loaded content
    updatePreview();
}

// Call the function to load content from the URL when the page loads
window.addEventListener("load", loadContentFromUrl);

// Function to update the preview iframe with the content
function updatePreview() {
    const iframe = document.getElementById("preview");
    const htmlContent = htmlEditor.getValue();
    const cssContent = cssEditor.getValue();
    const jsContent = jsEditor.getValue();

    // Set the iframe's content
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(htmlContent);
    iframe.contentWindow.document.write(`<style>${cssContent}</style>`);
    iframe.contentWindow.document.write(`<script>${jsContent}</script>`);
    iframe.contentWindow.document.close();
}

// Add an event listener for the "Generate Shareable URL" button
document.getElementById("shareBtn").addEventListener("click", updateUrl);

*/
