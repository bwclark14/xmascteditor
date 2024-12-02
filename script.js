
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
const questions = [
            { 
                question: "Santa's elves need to pack 12 gifts into 3 gift boxes equally. How many gifts will go in each box?", 
                options: ["3", "4", "5", "6"], 
                correct: "4",
                image: "1.png"
            },
            { 
                question: "You are creating snowflake decorations. Each snowflake takes 6 cuts and 4 folds. How many folds will you make if you create 5 snowflakes?", 
                options: ["20", "24", "30", "40"], 
                correct: "20",
                image: "2.png"
            },
            { 
                question: "Rudolph the Red-Nosed Reindeer stands first in line, followed by Dasher and Blitzen. If Blitzen moves to the front, what is the new order?", 
                options: ["Dasher, Blitzen, Rudolph", "Blitzen, Rudolph, Dasher", "Rudolph, Blitzen, Dasher", "Blitzen, Dasher, Rudolph"], 
                correct: "Blitzen, Rudolph, Dasher",
                image: "3.png"
            },
            { 
                question: "You have 3 ornaments: a star, a bell, and a candy cane. How many unique combinations of these ornaments can be made?", 
                options: ["2", "4", "6", "8"], 
                correct: "6",
                image: "4.png"
            },
            { 
                question: "Santa’s cookies are placed in 12 bags. If each bag has 8 cookies, how many cookies are there in total?", 
                options: ["80", "88", "90", "96"], 
                correct: "96",
                image: "5.png"
            },
            { 
                question: "A strand of Christmas lights has a repeating pattern of red, green, blue and yellow. What color is the 10th light?", 
                options: ["Red", "Green", "Blue", "Yellow"], 
                correct: "Green",
                image: "6.png"
            },
            { 
                question: "You build 3 snowmen, each with 2 eyes, 1 nose, and 3 buttons. How many parts do you use in total?", 
                options: ["18", "20", "24", "30"], 
                correct: "18",
                image: "7.png"
            },
            { 
                question: "A gingerbread recipe requires 3 cups of flour for every 1 cup of sugar. If you use 12 cups of flour, how much sugar will you need?", 
                options: ["3 cups", "4 cups", "6 cups", "9 cups"], 
                correct: "4 cups",
                image: "8.png"
            },
            { 
                question: "You have 10 presents and need to sort them into size order: small, medium, and large. If 3 are small, 4 are medium, how many are large?", 
                options: ["2", "3", "4", "5"], 
                correct: "3",
                image: "9.png"
            },
            { 
                question: "Santa’s elves need to paint toys. If 4 elves paint 20 toys in an hour, how many toys can 10 elves paint in one hour?", 
                options: ["40", "50", "60", "80"], 
                correct: "50",
                image: "10.png"
            },
            { 
                question: "The New Year countdown timer starts at 11:59:00pm (hours:minutes:seconds). Every 5 seconds until midnight a light is switched on. How many lights are on when the time reads 11:59:41?", 
                options: ["7", "8", "9", "10"], 
                correct: "8",
                image: "11.png"
            },
            { 
                question: "You have 15 minutes to wrap presents. If each present takes 4 minutes to wrap, how many presents can you wrap?", 
                options: ["2", "3", "4", "5"], 
                correct: "3",
                image: "12.png"
            },
            { 
                question: "An ice-skating path has 6 loops. There are 8 turns in each loop.  How many turns will a skater make?", 
                options: ["14", "36", "48", "64"], 
                correct: "48",
                image: "13.png"
            },
            { 
                question: "Each box fits 5 ornaments. How many boxes do you need for 23 ornaments?", 
                options: ["4", "5", "6", "7"], 
                correct: "5",
                image: "14.png"
            },
            { 
                question: "The shortest path to Santa’s house has 3 left turns and 2 right turns. How many turns are in total?", 
                options: ["3", "5", "6", "8"], 
                correct: "5",
                image: "15.png"
            },
            { 
                question: "Each star decoration requires 5 points. How many points do 12 stars have?", 
                options: ["50", "60", "80", "120"], 
                correct: "60",
                image: "16.png"
            },
            { 
                question: "Carolers sing 5 songs in 15 minutes. How long does it take for them to sing 12 songs?", 
                options: ["20 minutes", "25 minutes", "30 minutes", "36 minutes"], 
                correct: "36 minutes",
                image: "17.png"
            },
            { 
                question: "Each candy cane is striped with 3 colors in sequence: red, white, green. What color is the 7th stripe?", 
                options: ["Red", "White", "Green", "Blue"], 
                correct: "Red",
                image: "18.png"
            },
            { 
                question: "You can throw 35 snowballs during a 30 minute snowball fight. How many snowballs do you throw in total after 2 hours of fighting?", 
                options: ["70", "105", "140", "175"], 
                correct: "140",
                image: "19.png"
            },
            { 
                question: "If Santa bakes 84 cookies and packs them into 4 bags, how many cookies are in each bag?", 
                options: ["20", "21", "22", "23"], 
                correct: "21",
                image: "20.png"
            }
        ];

            let currentQuestionIndex = 0;
        let userAnswers = [];
        
        function loadQuestion() {
            const questionData = questions[currentQuestionIndex];
            const questionNumber = document.getElementById("questionNumber");
            const questionText = document.getElementById("questionText");
            const questionImage = document.getElementById("questionImage");
            const answerOptions = document.getElementById("answerOptions");

            questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
            questionText.textContent = questionData.question;
            questionImage.src = questionData.image;

            answerOptions.innerHTML = "";
            questionData.options.forEach(option => {
                const li = document.createElement("li");
                li.textContent = option;
                li.classList.add("answer-option");
                li.addEventListener("click", () => selectAnswer(option, li));
                answerOptions.appendChild(li);
            });

            document.getElementById("nextButton").disabled = true;
        }

        function selectAnswer(option, element) {
            const options = document.querySelectorAll('.answer-option');
            options.forEach(opt => opt.classList.remove('selected'));
            element.classList.add('selected');

            userAnswers[currentQuestionIndex] = option;
            document.getElementById("nextButton").disabled = false;
        }

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    // Call showResults after the last question
    showResults();
  }
}

function showResults() {
    document.getElementById("questionContainer").style.display = 'none'; // Hide question container
    const resultContainer = document.getElementById("resultContainer");
    const resultMessage = document.getElementById("resultMessage");
    const resultList = document.getElementById("resultList");
    
    resultContainer.style.display = 'block'; // Show results

 resultMessage.textContent ="results here";
    let correctAnswers = 0;
    resultList.innerHTML = '';  // Clear any previous results

    questions.forEach((question, index) => {
        const listItem = document.createElement("div");
        if (userAnswers[index] === question.correct) {
            correctAnswers++;
            listItem.classList.add("correct");
            listItem.textContent = `Q${index + 1}: Correct!`;
        } else {
            listItem.classList.add("incorrect");
            listItem.textContent = `Q${index + 1}: Incorrect.`;
        }
        resultList.appendChild(listItem);
    });

    resultMessage.textContent = `You got ${correctAnswers} out of ${questions.length} correct!`;
    
}


        function restartQuiz() {
            currentQuestionIndex = 0;
            userAnswers = [];
            document.getElementById("resultContainer").style.display = 'none';
            document.getElementById("quizContainer").style.display = 'block';
            loadQuestion();
        }

        document.getElementById("nextButton").addEventListener("click", nextQuestion);
        document.getElementById("restartButton").addEventListener("click", restartQuiz);

        loadQuestion();
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


