import "./styles.css";
import logo from "./assets/logo-ancert.svg";

var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
  <img class='logo' src="${logo}" alt="Logo" class="logo">
  <div class='title'>
    <h1>Unique Element Challenge</h1>
  </div>
  <div class='content'>
    <div class='sections'>
      <div class="section">
        <h2>Target</h2>
        <div>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</div>
      </div >
      <div class="section">
        <h2>Considerations</h2>
        <ul>
          <li>Values are duplicated only twice.</li>
          <li>There is only one non duplicate value.</li>
          <li>The non duplicate value can be placed anywhere on the array.</li>
          <li>The result must be an integer.</li>
        </ul>
      </div> 
    </div>
    <div class="results">
      <div class="result-top">
        <h2>Test Data</h2>
        <div>${arrayTest}</div>
      </div>
      <div class="result-buttons">
        <div class="result-button-left">
          <h2>Expected result</h2>
          <div>4</div>
        </div>
        <div class="result-button-right">
          <h2>Your Result</h2>
          <div>4</div>
        </div>
      </div>
    </div>
  </div>

`;
