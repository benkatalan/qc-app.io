// קבועים לגודל התמונה
const imageWidth = '185px';
const imageHeight = '185px';

const data = {
      peExit: [ //Print Engine
      { description: "ודא המצאות נועלי ציר Z <br>4 יחידות בכל צד + סרט צהוב", image: "qc_printengine/pe1.jpg", operation: "מבצע 1 מודול 1", tester: "בודק 1 מודול 1", comments: "הערות מודול 1" },
      { description: "ודא מוטות הברגה גיר ציר Z מגורזים", image: "qc_printengine/pe2.jpg", operation: "מבצע 2 מודול 1", tester: "בודק 2 מודול 1", comments: "הערות מודול 1" },
      { description: "ודא המצאות נועלי ציר FOD 2 יחידות בכל צד + סרט צהוב", image: "qc_printengine/pe3.jpg", operation: "מבצע 1 מודול 1", tester: "בודק 1 מודול 1", comments: "הערות מודול 1" },
      { description: "ודא המצאות מדבקות אזהרה בשני צידי ה FOD <br>'אסור להתקרב עם קוצב לב'", image: "qc_printengine/pe4.jpg", operation: "מבצע 2 מודול 1", tester: "בודק 2 מודול 1", comments: "הערות מודול 1" },
      { description: "ודא ביחידת cleaning unit שמורכבת על המסגרת העליונה הימצאות<br> כל הברגים ושהם מחוזקים.", image: "qc_printengine/pe5.jpg", operation: "מבצע 1 מודול 1", tester: "בודק 1 מודול 1", comments: "הערות מודול 1" },
      { description: "ודא המצאות ספוגי תמיכה לכל קורה בגשר בשני הצדדים", image: "qc_printengine/pe6.jpg", operation: "מבצע 2 מודול 1", tester: "בודק 2 מודול 1", comments: "הערות מודול 1" }
    ],
      pfExit: [ //PreFeeder
      { description: "תיאור בדיקה מודול 2", image: "image3.jpg", operation: "מבצע 1 מודול 2", tester: "בודק 1 מודול 2", comments: "הערות מודול 2" },
      { description: "תיאור בדיקה מודול 2", image: "image4.jpg", operation: "מבצע 2 מודול 2", tester: "בודק 2 מודול 2", comments: "הערות מודול 2" }
    ],
      liftExit: [ //Lift
      { description: "ודא 4 ברגי שילוח שחורים מחוברים", image: "qc_lift/lift1.jpg", operation: "מבצע 1 מודול 3", tester: "בודק 1 מודול 3", comments: "הערות מודול 3" },
      { description: "ודא איגוס אזוק עם ספוג הגנה באמצע", image: "qc_lift/lift2.jpg", operation: "מבצע 2 מודול 3", tester: "בודק 2 מודול 3", comments: "הערות מודול 3" },
      { description: "ודא נשם מורכב על המנוע ושיש חור בנשם.", image: "qc_lift/lift3.jpg", operation: "מבצע 2 מודול 3", tester: "בודק 2 מודול 3", comments: "הערות מודול 3" },
      { description: "ודא כבלים אזוקים ומנויילנים.", image: "qc_lift/lift4.jpg", operation: "מבצע 2 מודול 3", tester: "בודק 2 מודול 3", comments: "הערות מודול 3" },
      { description: "ודא קונקטור גלאי מפוצפץ ואזוק", image: "qc_lift/lift5.jpg", operation: "מבצע 2 מודול 3", tester: "בודק 2 מודול 3", comments: "הערות מודול 3" }
    ]
  };

// מצא את כל התמונות בטבלה ושנה את גודלן
document.querySelectorAll('table img').forEach(img => {
  img.style.width = imageWidth;
  img.style.height = imageHeight;
});
 
function updateTable() {
  const moduleSelect = document.getElementById('moduleSelect');
  const selectedModule = moduleSelect.value;
  const tableBody = document.querySelector('#dataTable tbody');
  tableBody.innerHTML = '';

  data[selectedModule].forEach(item => {
    const row = document.createElement('tr');

// מבצע
let operationCellContent = item.operation;
let operationColorClass = "";
if (operationCellContent === "תקין") {
  operationColorClass = "green";
} else {
  operationColorClass = "red";
}
operationCellContent = `
  <select onchange="handleOperationStatusChange(this)">
    <option value="סטטוס" ${operationCellContent === 'סטטוס' ? 'selected' : ''} style="background-color: gray;">סטטוס</option>
    <option value="תקין" ${operationCellContent === 'תקין' ? 'selected' : ''}>תקין</option>
    <option value="לא תקין" ${operationCellContent === 'לא תקין' ? 'selected' : ''}>לא תקין</option>
  </select>
`;

// בודק
let testerCellContent = item.tester;
let testerColorClass = "";
if (testerCellContent === "עבר") {
  testerColorClass = "green";
} else {
  testerColorClass = "red";
}
testerCellContent = `
  <select onchange="handleTesterStatusChange(this)">
    <option value="סטטוס" ${testerCellContent === 'סטטוס' ? 'selected' : ''} style="background-color: gray;">סטטוס</option>
    <option value="עבר" ${testerCellContent === 'עבר' ? 'selected' : ''}>עבר</option>
    <option value="לא עבר" ${testerCellContent === 'לא עבר' ? 'selected' : ''}>לא עבר</option>
  </select>
`;

    row.innerHTML = `
      <td>${item.description}</td>
      <td><img src="${item.image}" alt="תמונה" style="width: ${imageWidth}; height: ${imageHeight};"></td>
      <td class="${operationColorClass}">${operationCellContent}</td>
      <td class="${testerColorClass}">${testerCellContent}</td>
      <td><input type="text" value="${item.comments}"></td>
    `;
    tableBody.appendChild(row);
  });
}
  
  function handleOperationStatusChange(selectElement) {
    const selectedValue = selectElement.value;
    const cell = selectElement.parentElement;
    if (selectedValue === "תקין") {
      cell.className = "green";
    } else {
      cell.className = "red";
    }
  }
  
  function handleTesterStatusChange(selectElement) {
    const selectedValue = selectElement.value;
    const cell = selectElement.parentElement;
    if (selectedValue === "עבר") {
      cell.className = "green";
    } else {
      cell.className = "red";
      cell.innerHTML += `<br><input type="text" placeholder="הכנס הערות">`;
    }
  }
  
  // עדכון ראשוני של הטבלה
  updateTable();

    // פונקציה להצגת חלון הטקסט בהתאם לבחירת הבודק
    function showCommentsInput(selectElement) {
        const selectedValue = selectElement.value;
        const row = selectElement.parentElement.parentElement;
        const commentsInput = row.querySelector('input[type="text"]');
        if (selectedValue === "לא עבר") {
          commentsInput.style.display = "block";
        } else {
          commentsInput.style.display = "none";
        }
      }
    
      // פונקציה לעדכון סטטוס הבודק
      function handleTesterStatusChange(selectElement) {
        const selectedValue = selectElement.value;
        const cell = selectElement.parentElement;
        if (selectedValue === "עבר") {
          cell.className = "green";
        } else {
          cell.className = "red";
          showCommentsInput(selectElement); // קריאה לפונקציה להצגת חלון הטקסט
        }
      }

      document.getElementById('addRowButton').addEventListener('click', addRow);

      function addRow() {
        const tableBody = document.querySelector('#dataTable tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td><input type="text-input" placeholder="הכנס תיאור בדיקה"></td>
          <td><input type="file" accept="image/*"></td>
          <td><input type="text-input" placeholder="הכנס מבצע"></td>
          <td><input type="text-input" placeholder="הכנס בודק"></td>
          <td><input type="text-input" accept="image/*" placeholder="הכנס הערות"></td>
        `;
        tableBody.appendChild(newRow);
      
        const fileInput = newRow.querySelector('input[type="file"]');
        fileInput.addEventListener('change', function() {
          const row = this.parentNode.parentNode;
          const imageCell = row.querySelector('td:nth-child(2)');
          const imageButton = document.createElement('button');
          imageButton.textContent = 'הצג תמונה';
          imageButton.addEventListener('click', function() {
            displayImage(fileInput);
          });
          imageCell.appendChild(imageButton);
        });
      }
      
      // פונקציה להצגת התמונה בחלון פופאפ
      function displayImage(input) {
        if (input.files && input.files[0]) {
          const reader = new FileReader();
          reader.onload = function(e) {
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            modalImage.src = e.target.result;
            modal.style.display = 'block';
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
      
      // סגירת חלון הפופאפ בלחיצה על "x"
      const closeButton = document.querySelector('.close');
      closeButton.addEventListener('click', function() {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'none';
      });
      
    
    function exportToExcel() {
      const table = document.getElementById('dataTable');
      const wb = XLSX.utils.table_to_book(table);
      XLSX.writeFile(wb, 'data.xlsx');
    }

document.addEventListener("DOMContentLoaded", function() {
  var saveButton = document.getElementById("saveDataBtn");
  saveButton.addEventListener("click", saveFormData);
});

// הגדרת פונקציה לטעינת הנתונים מה-localStorage כאשר הדף נטען
window.addEventListener('load', function() {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
        document.getElementById('operationName').value = savedFormData.operationName;
        document.getElementById('machineNumber').value = savedFormData.machineNumber;
        document.getElementById('moduleSelect').value = savedFormData.moduleSelect;
        document.getElementById('date').value = savedFormData.date;
        document.getElementById('testerName').value = savedFormData.testerName;
    }
});

// קבע אירועים על שדות הטבלה ושמור את הנתונים בזמן אמת
const descriptionCells = document.querySelectorAll('#dataTable td:first-child');
const imageCells = document.querySelectorAll('#dataTable td:nth-child(2) img');

descriptionCells.forEach((cell, index) => {
    cell.addEventListener('input', function() {
        data[index].description = cell.textContent.trim();
        saveTableData();
    });
});

imageCells.forEach((cell, index) => {
    cell.addEventListener('input', function() {
        data[index].image = cell.src;
        saveTableData();
    });
});


// פונקציה לשמירת מספר המכונה ב-localStorage
function saveMachineNumberToLocalStorage(machineNumber) {
  localStorage.setItem('machineNumber', machineNumber);
}

// פונקציה לשמירת המודול הנבחר ב-localStorage
function saveSelectedModuleToLocalStorage(selectedModule) {
  localStorage.setItem('selectedModule', selectedModule);
}


// קריאה לפונקציה בכל שינוי בתיבת הטקסט של מספר המכונה
document.getElementById('machineNumber').addEventListener('change', function() {
  saveMachineNumberToLocalStorage(this.value);
});

// קריאה לפונקציה בכל שינוי בתיבת ה-Select של המודול
document.getElementById('moduleSelect').addEventListener('change', function() {
  saveSelectedModuleToLocalStorage(this.value);
});

function saveFormData() {
  var request = indexedDB.open('my_form_data', 3);

  request.onupgradeneeded = function(event) {
      var db = event.target.result;
      var objectStore = db.createObjectStore('form_data', { keyPath: 'id', autoIncrement:true });
      objectStore.createIndex('operationName', 'operationName', { unique: false });
      objectStore.createIndex('machineNumber', 'machineNumber', { unique: false });
      objectStore.createIndex('moduleSelect', 'moduleSelect', { unique: false });
      objectStore.createIndex('date', 'date', { unique: false });
      objectStore.createIndex('testerName', 'testerName', { unique: false });
  };
  
  request.onerror = function(event) {
      console.error('Error opening database');
  };


  request.onsuccess = function(event) {
      var db = event.target.result;
      var transaction = db.transaction(['form_data'], 'readwrite');
      var objectStore = transaction.objectStore('form_data');

      var formData = {
          operationName: document.getElementById('operationName').value,
          machineNumber: document.getElementById('machineNumber').value,
          moduleSelect: document.getElementById('moduleSelect').value,
          date: document.getElementById('date').value,
          testerName: document.getElementById('testerName').value
      };

      var request = objectStore.add(formData);

      request.onsuccess = function(event) {
          console.log('Form data saved successfully');
      };

      request.onerror = function(event) {
          console.error('Error saving form data');
      };
  };
}

// כאשר המסמך נטען במלואו
window.onload = function() {
  // פתיחת חיבור למסד הנתונים
  var request = indexedDB.open('my_form_data', 3);

  request.onerror = function(event) {
      console.error('Error opening database');
  };

  request.onsuccess = function(event) {
      var db = event.target.result;

      // הוספת אירוע שישמע לשינוי בבחירת המכונה
      document.getElementById('machineNumber').addEventListener('change', function() {
          // קריאה לפונקציה להצגת הנתונים המאוחסנים במסד הנתונים
          displayFormDataByMachine(db, this.value);
      });
  };
};

// פונקציה להצגת הנתונים בטופס על פי בחירת המכונה
function displayFormDataByMachine(db, machineNumber) {
  var transaction = db.transaction(['form_data'], 'readonly');
  var objectStore = transaction.objectStore('form_data');
  var index = objectStore.index('machineNumber');

  // קביעת מקור המידע לבחירת המכונה
  var request = index.getAll(machineNumber);

  request.onsuccess = function(event) {
      var formData = event.target.result;
      if (formData && formData.length > 0) {
          // הצגת הנתונים בטופס
          var latestData = formData[formData.length - 1]; // לקבל את הנתונים האחרונים
          document.getElementById('operationName').value = latestData.operationName;
          document.getElementById('moduleSelect').value = latestData.moduleSelect;
          document.getElementById('date').value = latestData.date;
          document.getElementById('testerName').value = latestData.testerName;
      } else {
          // אין נתונים זמינים למכונה זו
          console.log('No data available for the selected machine');
          // ניקוי תיבות הטקסט בטופס
          document.getElementById('operationName').value = '';
          document.getElementById('moduleSelect').value = '';
          document.getElementById('date').value = '';
          document.getElementById('testerName').value = '';
      }
  };

  request.onerror = function(event) {
      console.error('Error retrieving form data by machine number');
  };
}

// שמירה של הטבלה לבסיס הנתונים
function saveFormDataTODB() {
  // פתיחת חיבור לבסיס הנתונים
  var request = indexedDB.open('my_form_data', 3);

  request.onerror = function(event) {
      console.error('Error opening database');
  };

  request.onsuccess = function(event) {
      var db = event.target.result;
      var transaction = db.transaction(['form_data'], 'readwrite');
      var objectStore = transaction.objectStore('form_data');
      
      // מעבר על כל השורות בטבלה
      var table = document.getElementById('dataTable');
      var rows = table.getElementsByTagName('tr');
      for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          var rowData = {};

          // קביעת נתוני השורה
          rowData.operation = row.querySelector('td[value="taskOper"] select').value;
          rowData.tester = row.querySelector('td[value="taskCheck"] select').value;
          rowData.comments = row.querySelector('td[value="taskComment"] input').value;

          // שמירת הנתונים לבסיס הנתונים
          var request = objectStore.add(rowData);
          
          request.onsuccess = function(event) {
              console.log('Form data saved successfully');
          };

          request.onerror = function(event) {
              console.error('Error saving form data');
          };
      }
  };
}








