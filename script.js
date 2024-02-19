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

  
      // בדיקה של קיומו של האלמנט 'machineNumber' לפני הוספת אירוע
      var machineNumberInput = document.getElementById('machineNumber');
      if (machineNumberInput) {
          machineNumberInput.addEventListener('change', function() {
              displayFormDataByMachine(this.value);
          });
      } else {
          console.error("machineNumber element not found.");
      }


// הגדרת פונקציה לטעינת הנתונים מה-localStorage כאשר הדף נטען
window.addEventListener('load', function() {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
        document.getElementById('operationName').value = savedFormData.operationName;
        document.getElementById('machineNumber').value = savedFormData.machineNumber;
        document.getElementById('moduleSelect').value = savedFormData.moduleSelect;
        document.getElementById('date').value = savedFormData.date;
        document.getElementById('testerName').value = savedFormData.testerName;
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

var db; // משתנה גלובלי למסד הנתונים

// כאשר הדף מטען במלואו
window.onload = function() {
  // פתיחת חיבור למסד הנתונים
  var request = indexedDB.open('my_form_data', 250);

  request.onerror = function(event) {
      console.error('Error opening database');
  };

  request.onsuccess = function(event) {
      var db = event.target.result;

      // הסרת האזנה לאירוע שינוי בבחירת המכונה
      document.getElementById('machineNumber').removeEventListener('change', saveFormDataWithMachineAndModule);

      // הוספת אירוע שישמע לשינוי בבחירת המכונה
      document.getElementById('machineNumber').addEventListener('change', function() {
          // קריאה לפונקציה להצגת הנתונים המאוחסנים במסד הנתונים
          displayFormDataByMachine(db, this.value);
      });

      // פונקציה לשמירת הנתונים בבסיס הנתונים עם מספר המכונה ושם המודול
      function saveFormDataWithMachineAndModule() {
        var machineNumber = document.getElementById('machineNumber').value;
        var moduleSelect = document.getElementById('moduleSelect').value;
    
        var request = indexedDB.open('my_form_data', 250); // גרסה חדשה לבסיס הנתונים
    
        request.onerror = function(event) {
            console.error('Error opening database');
        };
    
        request.onsuccess = function(event) {
            var db = event.target.result;
    
            // טרנזקציה ראשית עבור form_data
            var transactionFormData = db.transaction(['form_data'], 'readwrite');
            var objectStoreFormData = transactionFormData.objectStore('form_data');
    
            var formData = {
                machineModule: machineNumber + '_' + moduleSelect, // חיבור בין מספר המכונה ושם המודול
                operationName: document.getElementById('operationName').value,
                date: document.getElementById('date').value,
                testerName: document.getElementById('testerName').value
            };
    
            var requestFormData = objectStoreFormData.add(formData);
    
            requestFormData.onsuccess = function(event) {
                console.log('Form data saved successfully');
            };
    
            requestFormData.onerror = function(event) {
                console.error('Error saving form data');
            };
    
            // טרנזקציה נוספת עבור my_object_store
            var transactionObjectStore = db.transaction(['my_object_store'], 'readwrite');
            var objectStoreMyObject = transactionObjectStore.objectStore('my_object_store');
    
            var machineModuleData = {
                machineModule: machineNumber + '_' + moduleSelect
            };
    
            var requestMyObjectStore = objectStoreMyObject.add(machineModuleData);
    
            requestMyObjectStore.onsuccess = function(event) {
                console.log('Machine module data saved successfully');
            };
    
            requestMyObjectStore.onerror = function(event) {
                console.error('Error saving machine module data');
            };
        };
    }
  
  };
};

// פונקציה להצגת הנתונים בטופס על פי בחירת המכונה
function displayFormDataByMachine(machineNumber) {
  var request = indexedDB.open('my_form_data', 250);

  request.onerror = function(event) {
    console.error('Error opening database');
  };

  request.onsuccess = function(event) {
    var db = event.target.result;

    // טרנזקציה ראשית עבור form_data
    var transactionFormData = db.transaction(['form_data'], 'readonly');
    var objectStoreFormData = transactionFormData.objectStore('form_data');
    var indexFormData = objectStoreFormData.index('machineModule');

    var getRequestFormData = indexFormData.openCursor(IDBKeyRange.bound(machineNumber + '_', machineNumber + '_z'));

    getRequestFormData.onsuccess = function(event) {
      var cursor = event.target.result;
      if (cursor) {
        console.log(cursor.value); // או עבור על רשומה זו ועדכן את הנתונים בהתאם
        cursor.continue();
      } else {
        console.log('No form data available for the selected machine');
      }
    };

    getRequestFormData.onerror = function(event) {
      console.error('Error retrieving form data by machine number');
    };

    // טרנזקציה נוספת עבור my_object_store
    var transactionObjectStore = db.transaction(['my_object_store'], 'readonly');
    var objectStoreMyObject = transactionObjectStore.objectStore('my_object_store');

    var getRequestMyObject = objectStoreMyObject.openCursor();

    getRequestMyObject.onsuccess = function(event) {
      var cursor = event.target.result;
      if (cursor) {
        console.log(cursor.value); // או עבור על רשומה זו ועדכן את הנתונים בהתאם
        cursor.continue();
      } else {
        console.log('No machine module data available');
      }
    };

    getRequestMyObject.onerror = function(event) {
      console.error('Error retrieving machine module data');
    };
  };
}

  document.getElementById('saveButton').addEventListener('click', function() {
    saveFormDataWithMachineAndModule();
  });

// הוספת אירוע לשינוי בבחירת המכונה
document.getElementById('machineNumber').addEventListener('change', function() {
  displayFormDataByMachine(this.value);
});

// יצירת מבנה נתונים לכל מודול
function createModuleData(operationName, date, testerName) {
  return {
      operationName: operationName,
      date: date,
      testerName: testerName
  };
}

// יצירת מבנה נתונים לכל מכונה
function createMachineData() {
  return {
      peExit: null,
      pfExit: null,
      liftExit: null
  };
}

// מבנה נתונים למכונה כולל מבנה נתונים לכל מודול
var machineData = {};

// פונקציה לשמירת נתונים למודול מסוים במכונה מסוימת
function saveModuleData(machineNumber, moduleName, data) {
    if (!machineData[machineNumber]) {
        machineData[machineNumber] = {};
    }
    machineData[machineNumber][moduleName] = data;
}

// פונקציה לקבלת נתונים של מודול מסוים במכונה מסוימת
function getModuleData(machineNumber, moduleName) {
    if (!machineData[machineNumber] || !machineData[machineNumber][moduleName]) {
        return null;
    }
    return machineData[machineNumber][moduleName];
}



