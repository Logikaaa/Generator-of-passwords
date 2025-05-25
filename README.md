<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Генератор Паролів</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      padding: 20px;
    }

    .container {
      max-width: 400px;
      margin: auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px gray;
    }

    h2 {
      text-align: center;
    }

    label {
      display: block;
      margin-top: 10px;
    }

    input[type="checkbox"] {
      margin-right: 5px;
    }

    input[type="number"] {
      width: 60px;
    }

    button {
      margin-top: 15px;
      width: 100%;
      padding: 10px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    #result {
      margin-top: 15px;
      font-weight: bold;
      text-align: center;
      word-break: break-all;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Генератор Паролів</h2>

    <label><input type="checkbox" id="lowercase">Малі букви (a-z)</label>
    <label><input type="checkbox" id="uppercase">Великі букви (A-Z)</label>
    <label><input type="checkbox" id="numbers">Цифри (0-9)</label>
    <label><input type="checkbox" id="symbols">Символи (!@#$%)</label>

    <label>Довжина пароля:
      <input type="number" id="length" min="4" max="50" value="12">
    </label>

    <button onclick="generatePassword()">Згенерувати</button>

    <div id="result"></div>
  </div>

  <script>
    function generatePassword() {
      const lower = "abcdefghijklmnopqrstuvwxyz";
      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const number = "0123456789";
      const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      
      let characters = "";
      let password = "";

      if (document.getElementById("lowercase").checked) characters += lower;
      if (document.getElementById("uppercase").checked) characters += upper;
      if (document.getElementById("numbers").checked) characters += number;
      if (document.getElementById("symbols").checked) characters += symbol;

      const length = parseI1. HTML (залишається звичайним):
html
Копіювати
Редагувати
<label class="checkbox-container">
  <input type="checkbox" id="lowercase">
  <span class="custom-checkbox"></span>
  Малі букви (a-z)
</label>
🎨 2. CSS:
css
Копіювати
Редагувати
/* Контейнер */
.checkbox-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  position: relative;
  padding-left: 30px; /* місце для кастомного чекбокса */
}

/* Приховуємо стандартний checkbox */
.checkbox-container input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  cursor: pointer;
}

/* Створюємо кастомний квадрат */
.custom-checkbox {
  position: absolute;
  left: 0;
  top: 2px;
  height: 20px;
  width: 20px;
  background-color: white;
  border: 2px solid #4CAF50; /* колір рамки */
  border-radius: 6px;         /* заокруглення кутів */
  transition: all 0.2s ease;
}

/* Галочка при виборі */
.checkbox-container input:checked ~ .custom-checkbox {
  background-color: #4CAF50;
}

/* Маленька "галочка" */
.custom-checkbox::after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .custom-checkbox::after {
  display: block;
  left: 6px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}nt(document.getElementById("length").value);

      if (characters.length === 0) {
        document.getElementById("result").innerText = "Виберіть хоча б один варіант!";
        return;
      }

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }

      document.getElementById("result").innerText = password;
    }
  </script>
</body>
</html>



