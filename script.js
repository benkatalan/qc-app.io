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


      let excelData = [
        ["מבצע", "מספר מכונה", "מודול", "תאריך", "בודק"]
    ];
    
    function addRow() {
      const tableBody = document.querySelector('#dataTable tbody');
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td><input type="input" placeholder="...הכנס תיאור בדיקה"></td>
          <td><input type="file" accept="image/*"></td>
          <td><input type="input" placeholder="...הכנס מבצע"></td>
          <td><input type="input" placeholder="...הכנס בודק"></td>
          <td><input type="input" placeholder="...הכנס הערות"></td>
          <td>
              <button onclick="deleteRow(this)">X</button>
              <button onclick="confirmRow(this)">V</button>
              <span class="confirmation-label" style="display:none;">נשמר</span>
          </td>
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
  
  function deleteRow(button) {
      if (confirm('האם אתה בטוח שברצונך למחוק שורה זו?')) {
          const row = button.closest('tr');
          row.remove();
      }
  }
  
  function confirmRow(button) {
    if (confirm('האם אתה בטוח שברצונך לשמור שורה זו?')) {
        const row = button.closest('tr');
        const confirmationLabel = row.querySelector('.confirmation-label');
        confirmationLabel.style.display = 'inline'; // הצג את התווית לאישור
        button.style.display = 'none'; // הסתר את כפתור האישור
        row.querySelector('button').style.display = 'none'; // הסתר כפתור המחיקה
  
        // קבל את הנתונים מתיבות הטקסט בשורה החדשה והוסף אותם למערך הנתונים לדוח ה-Excel
        let newRowData = [];
        row.querySelectorAll('input[type="text,input"]').forEach(input => {
            newRowData.push(input.value);
        });
        excelData.push(newRowData);
    }
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
      
    
      function exportTableToExcel() {
        // קבלת נתונים מתיבות הטקסט בטופס HTML
        let operationName = document.getElementById('operationName').value;
        let machineNumber = document.getElementById('machineNumber').value;
        let moduleSelect = document.getElementById('moduleSelect').value;
        let date = document.getElementById('date').value;
        let testerName = document.getElementById('testerName').value;
    
        // יצירת מערך הנתונים לקובץ Excel
        let excelData = [
            ["מבצע", "מספר מכונה", "מודול", "תאריך", "בודק"],
            [operationName, machineNumber, moduleSelect, date, testerName]
        ];
    
        // קבלת נתוני טבלת ה-`dataTable`
        let tableData = [];
        let dataTable = document.getElementById('dataTable');
        for (let i = 0; i < dataTable.rows.length; i++) {
            let rowData = [];
            for (let j = 0; j < dataTable.rows[i].cells.length; j++) {
                rowData.push(dataTable.rows[i].cells[j].textContent);
            }
            tableData.push(rowData);
        }
    
        // הוספת נתוני טבלת ה-`dataTable` למערך הנתונים
        excelData.push(...tableData);
    
        // המרת המערך לגיליון בקובץ ה-Excel
        let ws = XLSX.utils.aoa_to_sheet(excelData);
    
        // יצירת קובץ Excel והורדתו
        let wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Data");
        XLSX.writeFile(wb, 'downloaded_file_' + getRandomNumbers() + '.xls');
    }
    
    function getRandomNumbers() {
        return Math.floor(Math.random() * 10000); // מספר אקראי בין 0 ל־9999
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