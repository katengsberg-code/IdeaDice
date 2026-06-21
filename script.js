//-------------
//DATA
//-------------

let categories = {

    restaurants: [
        {
            name: "Frankly Pizza",
            category: "restaurants",
            status: "Want To Try",
            rating: "",
            notes: "",
            source:"",
            dateCompleted: ""
        },
        {
            name: "Saffron Indian Cuisine",
            category: "restaurants",
            status: "Want To Try",
            rating: "",
            notes: "",
            source:"",
            dateCompleted: ""
        },
        {
            name: "Talia's Cuzina",
            category: "restaurants",
            status: "Want To Try",
            rating: "",
            notes: "",
            source:"",
            dateCompleted: ""
        }
    ],

    movies: [
        {
            name: "Rear Window",
            category: "movies",
            status: "Want To Try",
            rating: "",
            notes: "",
            source:"",
            dateCompleted: ""
        },
        {
            name: "The Great Escape",
            category: "movies",
            status: "Want To Try",
            rating: "",
            notes: "",
            source:"",
            dateCompleted: ""
        }
    ],

    dateideas: [
        {
            name: "Bike ride + picnic",
            category: "dateideas",
            status: "Want To Try",
            rating: "",
            notes: "",
            source:"",
            dateCompleted: ""
        },
        {
            name: "Learn a new skill",
            category: "dateideas",
            status: "Want To Try",
            rating: "",
            notes: "",
            source:"",
            dateCompleted: ""
        },
    ],

    daytrips: [
        {
            name: "Sailing in Annapolis",
            category: "daytrips",
            status: "Want To Try",
            rating: "",
            notes: "",
            source:"",
            dateCompleted: ""
        },
        {
            name: "Kayaking at Loch Raven",
            category: "daytrips",
            status: "Want To Try",
            rating: "",
            notes: "",
            source:"",
            dateCompleted: ""
        }
    ],

    recipes: [
        {
            name: "Tandoori chicken on the grill",
            category: "recipes",
            status: "Want To Try",
            rating: "",
            notes: "",
            source:"",
            dateCompleted: ""
        },
        {
            name: "Adam's homemade pretzels",
            category: "recipes",
            status: "Want To Try",
            rating: "",
            notes: "",
            source:"",
            dateCompleted: ""
        }
    ]
}

let currentCategory = "restaurants";

let lastRecommendation = null;

let selectedItem = null;

let isNewItem = false;

let browseMode = "active";


//-------------
//PAGE ELEMENTS -- these functions ref directly to HTML elements that appear on screen
//-------------

/* SCREENS */
const homeScreen =
    document.getElementById("homeScreen");

const recommendationScreen =
    document.getElementById("recommendationScreen");

const feedbackScreen =
    document.getElementById("feedbackScreen");

const editorScreen =
    document.getElementById("editorScreen");

const browseScreen =
    document.getElementById("browseScreen");

const screens = [
    homeScreen,
    recommendationScreen,
    feedbackScreen,
    editorScreen,
    browseScreen
];

const SHEET_URL =
    "https://script.google.com/macros/s/AKfycbzCwwHceeUaObFmIOJPL0cC1cffU2mYttS8YPqZOZFAQ7hr-ArDLSa9awD_GtCnTT7_/exec";

let previousScreen = homeScreen;

    /* REOCCURRING BUTTONS ***Note: To force feedback, we do not
include an Editor or Browse button on the Feedback page.*/

const homeEditorButton =
    document.getElementById("homeEditorButton");

const recommendationEditorButton =
    document.getElementById("recommendationEditorButton");

const editorEditorButton =
    document.getElementById("editorEditorButton");

const browseEditorButton =
    document.getElementById("browseEditorButton");

const editorButtons = [
    homeEditorButton,
    recommendationEditorButton,
    editorEditorButton,
    browseEditorButton
]

const homeBrowseButton =
    document.getElementById("homeBrowseButton");

const recommendationBrowseButton =
    document.getElementById("recommendationBrowseButton");

const editorBrowseButton =
    document.getElementById("editorBrowseButton");

const browseBrowseButton =
    document.getElementById("browseBrowseButton");

const browseButtons = [
    homeBrowseButton,
    recommendationBrowseButton,
    editorBrowseButton,
    browseBrowseButton
]

const homeHomeButton =
    document.getElementById("homeHomeButton");

const recommendationHomeButton =
    document.getElementById("recommendationHomeButton");

const editorHomeButton =
    document.getElementById("editorHomeButton");

const browseHomeButton =
    document.getElementById("browseHomeButton");

const feedbackHomeButton =
    document.getElementById("feedbackHomeButton");

const homeButtons = [
    homeHomeButton,
    recommendationHomeButton,
    editorHomeButton,
    browseHomeButton,
    feedbackHomeButton
]

const categoryLabels = {

    restaurants: "Restaurants",

    movies: "Movies & TV",

    recipes: "Recipes",

    daytrips: "Day Trips",

    dateideas: "Date Ideas"

};

/* HOME-SPECIFIC BUTTONS */

const restaurantButton =
    document.getElementById("restaurantButton");

const movieButton = 
    document.getElementById("movieButton");

const dateideaButton = 
    document.getElementById("dateideaButton");

const daytripButton = 
    document.getElementById("daytripButton");

const recipeButton = 
    document.getElementById("recipeButton");

const onTheAgendaButton = 
    document.getElementById("onTheAgendaButton");

/*RECOMMENDATION-SPECIFIC BUTTONS */

const rerunButton =
    document.getElementById("rerunButton");

const selectionButton =
    document.getElementById("selectionButton");

const didthisButton =
    document.getElementById("didthisButton");

const selectFavoriteButton =
    document.getElementById("selectFavoriteButton");

/* FEEDBACK-SPECIFIC BUTTONS*/

const feedbackBackToRecommendationButton =
    document.getElementById("feedbackBackToRecommendationButton");

const lovedButton =
    document.getElementById(
        "lovedButton"
    );

const likedButton =
    document.getElementById(
        "likedButton"
    );

const notAgainButton =
    document.getElementById(
        "notAgainButton"
    );

const didntDoButton =
    document.getElementById(
        "didntDoButton"
    );

const skipForNowButton =
    document.getElementById(
        "skipForNowButton"
    );

/* EDITOR-SPECIFIC BUTTONS */

const saveButton =
    document.getElementById(
        "saveButton"
    );

const deleteButton =
    document.getElementById(
        "deleteButton"
    );

/* BROWSE-SPECIFIC BUTTONS */

const activeItemsButton =
    document.getElementById(
        "activeItemsButton"
    );

const plannedItemsButton =
    document.getElementById(
        "plannedItemsButton"
    );

const completedItemsButton =
    document.getElementById(
        "completedItemsButton"
    );

/* TEXT */

const recommendationText = 
    document.getElementById("recommendationText");

const feedbackItemText =
    document.getElementById("feedbackItemText");

const browseList =
    document.getElementById("browseList");

const agendaList =
    document.getElementById("agendaList");

const categoryTitle =
    document.getElementById("categoryTitle");

/* EDITABLE FIELDS AND DROPDOWNS */

const editorNameInput =
    document.getElementById("editorNameInput");

const categoryInput =
    document.getElementById("categoryInput");

const notesInput =
    document.getElementById("notesInput");

const sourceInput =
    document.getElementById("sourceInput");

const statusInput =
    document.getElementById("statusInput");

const ratingInput =
    document.getElementById("ratingInput");

const lastUpdatedText =
    document.getElementById("lastUpdatedText");

//-------------
//RECOMMENDATION FUNCTIONS ("I want DE to recommend something.")
//-------------

function recommend(items) {

    let recommendation;

    do {

        const randomIndex =
            Math.floor(
                Math.random() *
                items.length
            );

        recommendation =
            items[randomIndex];

    } while (

        items.length > 1 &&

        lastRecommendation &&

        recommendation.id ===
            lastRecommendation.id

    );

    lastRecommendation =
        recommendation;

    recommendationText.textContent =
        recommendation.name;
}

function chooseCategory(categoryName) {
    currentCategory = categoryName;

    categoryTitle.textContent =
    categoryLabels[categoryName];

    showRecommendationScreen();
    
    const activeItems =
    categories[currentCategory].filter(
        function(item) {

            return (
                item.status ===
                "Want To Try"
            );

        }
    );

    recommend(
        activeItems
    );
}

function chooseAgain() {

    const activeItems =
    categories[currentCategory].filter(
        function(item) {

            return (
                item.status ===
                "Want To Try"
            );

        }
    );

    recommend(
        activeItems
    );
}

function recommendFavorite() {

    const favorites = [];

    const items =
        categories[
            currentCategory
        ];

        for (
            const item
            of items
        ) {

            if (

                item.status ===
                    "Completed"

                &&

                item.rating ===
                    "Loved It"

            ) {

                favorites.push(
                    item
                );
            }
        }

    if (
        favorites.length === 0
    ) {

        alert(
            "No favorites yet!"
        );

        return;
    }

    recommend(
        favorites
    );
}


//-------------
//SHOW SCREEN FUNCTIONS ("I want to see each page.")
//-------------

function showScreen(screenToShow) {
    for (const screen of screens) {
        screen.style.display = "none";
    }
    screenToShow.style.display = "block";
}

function showRecommendationScreen() {
    showScreen(recommendationScreen);  
}

function showHomeScreen() {

    showScreen(homeScreen);
}

function showFeedbackScreen() {

    showScreen(feedbackScreen);

    feedbackItemText.textContent =
        lastRecommendation.name;
}

function showEditorScreen() {

    showScreen(editorScreen);
}

function showBrowseScreen() {

    populateBrowse();
    showScreen(browseScreen);
}

//---------------
// ("I want to be able to move between different screens from every screen.")
//---------------

function homeButton() {

    showScreen(homeScreen);
}

function editorButton() {
    newItem();
}

function browseButton() {
    showBrowseScreen();
}

//---------------
//DISPLAY SAVED DATA ON SCREEN ("I want to view the information I save.")
//---------------

function populateBrowse() {
    browseList.innerHTML = "";
    
    for (const categoryName in categories) {

        const items =
         categories[categoryName];

        for (const item of items) {

            if (

                (
                    browseMode === "active" &&
                        item.status ===
                            "Want To Try"
                )

                ||

                                (
                    browseMode === "planned" &&
                        item.status ===
                            "Planned"
                )

                ||

                (

                    browseMode === "completed" &&

                        (
                            item.status ===
                                "Completed"
                        )
                )

            ) {

                const itemButton =
                    document.createElement(
                        "button"
                    );

                itemButton.textContent =
                    item.name +
                    " (" +
                    categoryLabels[categoryName] +
                    ")";

                itemButton.addEventListener(
                    "click",
                    function () {

                        previousScreen = browseScreen;
                        
                        selectedItem = item;

                        isNewItem = false;

                        populateEditor();

                        showScreen(editorScreen);
                    }
                );

                browseList.appendChild(
                    itemButton
                );

                browseList.appendChild(
                    document.createElement("br")
                );
            }
        }
    }
}

function populateEditor() {
    
    editorNameInput.value =
        selectedItem.name;

    categoryInput.value =
        selectedItem.category;
    
    sourceInput.value =
        selectedItem.source;
    
    statusInput.value =
        selectedItem.status;

    ratingInput.value =
    selectedItem.rating;

    notesInput.value =
        selectedItem.notes;

    lastUpdatedText.textContent =
        "Last Updated: " +
        selectedItem.lastUpdated;
}

function showActiveItems() {

    browseMode = "active";

    populateBrowse();
}

function showPlannedItems() {

    browseMode = "planned";

    populateBrowse();
}

function showAgendaItems() {

    agendaList.innerHTML = "";

    for (
        const categoryName
        in categories
    ) {

        const items =
            categories[
                categoryName
            ];

        for (
            const item
            of items
        ) {

            if (
                item.status ===
                "Planned"
            ) {

                const itemButton =
                    document.createElement(
                        "button"
                    );

                itemButton.textContent =
                    item.name +
                    " (" +
                    item.category +
                    ")";

                itemButton.addEventListener(
                    "click",
                    function () {

                        previousScreen = homeScreen;

                        selectedItem = item;

                        isNewItem = false;

                        populateEditor();

                        showScreen(editorScreen);
                    }
                );

                agendaList.appendChild(
                    itemButton
                );

                agendaList.appendChild(
                    document.createElement(
                        "br"
                    )
                );
            }
        }
    }
}

function showCompletedItems() {

    browseMode = "completed";

    populateBrowse();
}

//-------------
//CONNECT TO GOOGLE SHEETS ("I want to store my DE data in Google Sheets.")
//-------------

async function sendItemToSheet(item) {

    try {

        const response =
            await fetch(
                SHEET_URL,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "text/plain"
                    },

                    body:
                        JSON.stringify(
                            item
                        )
                }
            );

        const text = await response.text();
        const result = JSON.parse(text);
        console.log(result);

    } catch (error) {
        console.error("Error sending to sheet:", error);
    }
}

async function loadFromSheet() {

    try {

        const response =
            await fetch(
                SHEET_URL
            );

        const items =
            await response.json();

        categories = {

            restaurants: [],
            movies: [],
            daytrips: [],
            dateideas: [],
            recipes: []

        };

        for (const item of items) {

            categories[
                item.category
            ].push(
                item
            );
        }

        populateBrowse();

        console.log(
            "Loaded",
            items.length,
            "items"
        );

    } catch (error) {

        console.error(
            "Load failed:",
            error
        );
    }
}

async function deleteItemFromSheet(
    itemId
) {

    try {

        const response =
            await fetch(
                SHEET_URL,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "text/plain"
                    },

                    body:
                        JSON.stringify({
                            action: "delete",
                            id: itemId
                        })
                }
            );

        const text =
            await response.text();

        const result =
            JSON.parse(text);

        console.log(result);

    } catch (error) {

        console.error(error);
    }
}

function deleteItem() {

    const confirmed =
        confirm(
            "Are you sure you want to delete this item?"
        );

    if (!confirmed) {
        return;
    }

    const categoryItems =
        categories[
            selectedItem.category
        ];

    const index =
        categoryItems.indexOf(
            selectedItem
        );

    categoryItems.splice(
        index,
        1
    );

    deleteItemFromSheet(
        selectedItem.id
    );

    populateBrowse();

    showScreen(
        browseScreen
    );

    saveData();
}

function newItem() {

    selectedItem = {

        id: Date.now().toString(),
        
        name: "",

        category: "restaurants",

        status: "Want To Try",

        rating: "",

        notes: "",

        source: "",

        dateCompleted: "",

        lastUpdated: ""

    };

    isNewItem = true;

    populateEditor();

    showScreen(
        editorScreen
    );
}

function saveItem() {
    
    selectedItem.name =
        editorNameInput.value;

    selectedItem.category =
        categoryInput.value;

    selectedItem.source =
        sourceInput.value;

    selectedItem.status =
        statusInput.value;
    
    selectedItem.rating =
        ratingInput.value;    
    
    selectedItem.notes =
        notesInput.value;
    
    selectedItem.lastUpdated =
        new Date()
        .toLocaleString();
    
    if (isDuplicate()) {

        const proceed =
            confirm(
                "Duplicate item found. Save anyway?"
            );

        if (!proceed) {
            return;
        }
    }
    
    if (isNewItem) {

        categories[
            selectedItem.category
        ].push(
            selectedItem
        );

        isNewItem = false;
    }

    populateBrowse();

    showScreen(
        previousScreen
    );

    saveData();

    sendItemToSheet(
        selectedItem
    );
}

function saveData() {

    localStorage.setItem(
        "decisionAppData",
        JSON.stringify(categories)
    );
}

function loadData() {

    const savedData =
        localStorage.getItem(
            "decisionAppData"
        );

    if (savedData) {

        categories =
            JSON.parse(
                savedData
            );
    }
}

//-------------
//ADD AND CHANGE ITEMS ("I want to add and save changes to the items in my DE.")

function markAsPlanned() {

    lastRecommendation.status =
        "Planned";

    lastRecommendation.lastUpdated =
        new Date().toLocaleString();

    saveData();

    sendItemToSheet(
        lastRecommendation
    );

    showFeedbackScreen();
}

function completeItem(rating) {
    
    lastRecommendation.status =
        "Completed";

    lastRecommendation.rating =
        rating;

    lastRecommendation.dateCompleted =
        new Date().toLocaleDateString();

    lastRecommendation.lastUpdated =
        new Date().toLocaleString();

    saveData();

    sendItemToSheet(
        lastRecommendation
    );

    showScreen(
        homeScreen
    );
}

function didntDoItem() {

    lastRecommendation.status =
        "Want To Try";

    lastRecommendation.lastUpdated =
        new Date().toLocaleString();

    saveData();

    sendItemToSheet(
        lastRecommendation
    );

    showScreen(
        homeScreen
    );
}

function skipForNow() {

    showScreen(homeScreen);
}

function markRecommendedItemCompleted() {

    lastRecommendation.status =
        "Completed";

    lastRecommendation.dateCompleted =
        new Date()
            .toLocaleDateString();

    lastRecommendation.lastUpdated =
        new Date()
            .toLocaleString();

    saveData();

    sendItemToSheet(
        lastRecommendation
    );

    showFeedbackScreen();
}

//-------------
//DETECT DUPLICATES ("I want to know if I'm re-adding something I've already added.")
//-------------

function isDuplicate() {

    const categoryItems =
        categories[
            selectedItem.category
        ];

    for (const item of categoryItems) {

        if (

            item !== selectedItem &&

            item.name
                .trim()
                .toLowerCase()
                .replaceAll(" ", "") ===

            editorNameInput.value
                .trim()
                .toLowerCase()
                .replaceAll(" ", "")

        ) {

            return true;
        }
    }

    return false;
}

//--------------
//Actions to Take When the Page Loads
//--------------

/*loadData()
populateBrowse()*/

loadFromSheet();

//-------------
//EVENT LISTENERS (Actions to Take When Triggered)
//-------------

restaurantButton.addEventListener(
    "click",
    function () {
        chooseCategory("restaurants");
    }
);

movieButton.addEventListener(
    "click",
    function () {
        chooseCategory("movies");
    }
);

dateideaButton.addEventListener(
    "click",
    function () {
        chooseCategory("dateideas");
    }
);

daytripButton.addEventListener(
    "click",
    function () {
        chooseCategory("daytrips");
    }
);

recipeButton.addEventListener(
    "click",
    function () {
        chooseCategory("recipes");
    }
);

onTheAgendaButton.addEventListener(
    "click",
    function() {
        showAgendaItems()
    }
)

for (const button of homeButtons) {
    button.addEventListener(
        "click",
        homeButton
    );

}

for (const button of editorButtons) {
    button.addEventListener(
        "click",
        editorButton
    );
}

for (const button of browseButtons) {
    button.addEventListener(
        "click",
        browseButton
    )
}

rerunButton.addEventListener(
    "click",
    chooseAgain
);

selectionButton.addEventListener(
    "click",
    markAsPlanned
);

didthisButton.addEventListener(
    "click",
    markRecommendedItemCompleted
);

selectFavoriteButton.addEventListener(
        "click",
        recommendFavorite
    );

feedbackBackToRecommendationButton.addEventListener(
    "click",
    showRecommendationScreen
);

lovedButton.addEventListener(
    "click",
    function () {

        completeItem(
            "Loved It"
        );
    }
);

likedButton.addEventListener(
    "click",
    function () {

        completeItem(
            "Liked It"
        );
    }
);

notAgainButton.addEventListener(
    "click",
    function () {

        completeItem(
            "Not Again"
        );
    }
);

didntDoButton.addEventListener(
    "click",
    didntDoItem
);

skipForNowButton.addEventListener(
    "click",
    skipForNow
)

saveButton.addEventListener(
    "click",
    saveItem
);

deleteButton.addEventListener(
    "click",
    deleteItem
);

activeItemsButton.addEventListener(
    "click",
    showActiveItems
);

plannedItemsButton.addEventListener(
    "click",
    showPlannedItems
);

completedItemsButton.addEventListener(
    "click",
    showCompletedItems
);